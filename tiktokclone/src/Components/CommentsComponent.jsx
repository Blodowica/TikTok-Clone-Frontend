import React, { useState, useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { IoSendSharp } from "react-icons/io5";
import { getVideoCommnets, postComment } from "../API/VideoAPI";

function CommentesComponent({ video }) {
  const [comments, setComments] = useState([]);
  const [connectionId, setConnectionId] = useState(null); // Add this line
  const [connection, setConnection] = useState(null); // Add this line
  const [commentContent, setCommentContent] = useState("");
  const [inputValue, SetInputValue] = useState("");
  const author = "Saltyhooman";
  const userId = 12;
  // Use a ref for the connection
  const connectionRef = useRef(null);

  useEffect(() => {
    // console.log("useEffect ran, video:", video);

    const fetchData = async () => {
      try {
        // If a connection already exists, stop it
        let newConnection = null;
        console.log("test ran, connection:", connectionRef.current);

        if (connectionRef.current) {
          await connectionRef.current.stop();
          console.log("Existing SignalR connection stopped");
        }

        console.log("useEffect ran, connection:", connectionRef.current);
        if (video) {
          const commentData = await getVideoCommnets(video.id);
          setComments(commentData);
        } else {
          console.log("Video is undefined");
          return;
        }

        // Create a new SignalR connection
        newConnection = new signalR.HubConnectionBuilder()
          .withUrl(`${process.env.REACT_APP_COMMENT_HUB}`)
          .build();

        // Add a listener for the 'ReceiveComment' method
        newConnection.off("RecieveComment");
        newConnection.on("RecieveComment", (comment) => {
          console.log("Received new comment:", comment);
          setComments((prevComments) => [...prevComments, comment]);
        });

        // Log connection state
        newConnection.on("connected", () => {
          //console.log("SignalR connection established");
        });

        newConnection.on("disconnected", () => {
          console.log("SignalR connection disconnected");
        });

        // Start the connection
        await newConnection.start();
        //console.log("SignalR connection started successfully");

        // Join the group
        await newConnection.invoke("JoinGroup", String(video.id));

        const id = await newConnection.invoke("GetConnectionId");
        //console.log("Connection ID:", id);
        setConnectionId(id);
        connectionRef.current = newConnection;
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
        console.log("SignalR connection stopped");
      }
    };
  }, [video]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  const handleSubmitComment = async () => {
    try {
      const trimmedCommentContent = commentContent.trim();
      if (trimmedCommentContent !== "") {
        //UPDATE TO SENT CURRENT USERS NAME AND ID
        const date = new Date();

        //console.log(date);
        postComment(
          author,
          trimmedCommentContent,
          date.toISOString(),
          video.id,
          userId
        );
        setCommentContent("");
        document.getElementById("commentContentInputForm").value = "";
      }
    } catch (error) {
      alert(
        "Something went wrong posting the comment, please try again later!"
      );
      console.log(error);
    }
  };

  return (
    <>
      <div className="position-relative  ">
        <div
          className="p-4 rounded shadow"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          {video && (
            <>
              <h5 className="mb-3">{video.caption}</h5>
            </>
          )}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span>Likes, Comments, Saves</span>
            {/* Add any additional buttons/icons here */}
          </div>
          <hr />
          {/* Add any additional content here */}
        </div>
      </div>
      <section
        className="gradient-custom overflow-y-scroll"
        style={{ maxHeight: "57vh" }}
      >
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xl={12} className="col-md-12 col-lg-10 col-xl-8">
              <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
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

      <Form>
        <InputGroup
          className="mt-1 mb-3 mx-auto"
          style={{ width: "97%" }}
          required
        >
          <Form.Control
            id="commentContentInputForm"
            onChange={(e) => {
              setCommentContent(e.target.value);
              SetInputValue(e.target.value);
            }}
            onKeyDown={handleEnter}
            placeholder="Write a comment..."
            aria-label="video Comment"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <Button onClick={() => handleSubmitComment()}>
              <IoSendSharp />
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  );
}

export default CommentesComponent;
