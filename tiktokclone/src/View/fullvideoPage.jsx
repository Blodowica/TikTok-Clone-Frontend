import React, { useState, useEffect } from "react";
import {
  CloseButton,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import * as signalR from "@microsoft/signalr";
import { getVideoById, getVideoCommnets } from "../API/VideoAPI";
// Import your API function
function FullVideoPage() {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [connectionId, setConnectionId] = useState(null); // Add this line
  const [connection, setConnection] = useState(null); // Add this line

  useEffect(() => {
    const fetchData = async () => {
      try {
        let newConnection = null;

        // Load the video first
        const videoData = await getVideoById();
        setVideo(videoData);

        const commentData = await getVideoCommnets(videoData.id);
        setComments(commentData);

        // Create a new SignalR connection
        newConnection = new signalR.HubConnectionBuilder()
          .withUrl("https://localhost:32770/commentHub")
          .build();

        // Add a listener for the 'ReceiveComment' method
        newConnection.on("RecieveComment", (comment) => {
          console.log("Received new comment:", comment);
          setComments((prevComments) => [...prevComments, comment]);
        });

        // Log connection state
        newConnection.on("connected", () => {
          //console.log("SignalR connection established");
        });

        newConnection.on("disconnected", () => {
          //console.log("SignalR connection disconnected");
        });

        // Start the connection
        await newConnection.start();
        //console.log("SignalR connection started successfully");

        console.log();
        // console.log(video);
        // Join the group
        await newConnection.invoke("JoinGroup", String(videoData.id));

        const id = await newConnection.invoke("GetConnectionId");
        //console.log("Connection ID:", id);
        setConnectionId(id);
        setConnection(newConnection);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      if (connection) {
        connection.stop();
        console.log("SignalR connection stopped");
      }
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={8} className="p-0" style={{ height: "99.3vh" }}>
          {video && (
            <ReactPlayer
              className="d-flex justify-content-center"
              url={video.videoURL}
              loop
              controls
              width="100%"
              height="100%"
              style={{
                minHeight: "80vh",
              }}
            />
          )}
        </Col>
        <Col xl={4} className="position-relative">
          <CloseButton className="position-absolute top-0 end-0 m-3" />

          {video && (
            <>
              <p>{video.caption}</p>
            </>
          )}
          <p>Likes, Comments, Saves</p>
          <hr />

          <section
            className="gradient-custom overflow-y-scroll"
            style={{ maxHeight: "60vh" }}
          >
            <Container>
              <Row className="d-flex justify-content-center">
                <Col xl={12} className="col-md-12 col-lg-10 col-xl-8">
                  <div className="card">
                    <div className="card-body p-4">
                      {comments.length > 0 ? (
                        comments.map((comment, index) => (
                          <div key={index}>
                            <Row>
                              <Col>
                                <div className="d-flex flex-start">
                                  <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src={comment.avatar}
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                  />
                                  <div className="flex-grow-1 flex-shrink-1">
                                    <div>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1">
                                          {comment.author}{" "}
                                          <span className="small">
                                            {comment.createdAt}
                                          </span>
                                        </p>
                                        <a href="#!">
                                          <i className="fas fa-reply fa-xs"></i>
                                        </a>
                                      </div>
                                      <p className="small mb-0">
                                        {comment.content}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            {index !== comments.length - 1 && <hr />}
                          </div>
                        ))
                      ) : (
                        <p className="text-center">No comments yet.</p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <InputGroup className="mb-3 d-flex align-text-bottom">
            <Form.Control
              placeholder="Write a comment..."
              aria-label="video Comment"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default FullVideoPage;
