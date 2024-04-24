import React, { useState, useEffect } from "react";
import {
  CloseButton,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import * as signalR from "@microsoft/signalr";
import {  getVideoCommnets } from "../API/VideoAPI";
import { useLocation } from "react-router-dom";
import FullVideoPlayerComponent  from "../Components/VideoPlayerComponent/VideoPlayerComponent";
import CommentesComponent from "../Components/CommentsComponent"
import NavHeader from "../Components/NavComponent/NavHeaderComponent";

// Import your API function
function FullVideoPage() {
  const location = useLocation();
  const video = location.state?.video || null;

  // /const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [connectionId, setConnectionId] = useState(null); // Add this line
  const [connection, setConnection] = useState(null); // Add this line

  useEffect(() => {
    const fetchData = async () => {
      try {
        let newConnection = null;

        // Load the video first
        // const videoData = await getVideoById();
        // setVideo(videoData);

        const commentData = await getVideoCommnets(video.id);
        setComments(commentData);

        // Create a new SignalR connection
        newConnection = new signalR.HubConnectionBuilder()
          .withUrl("https://localhost:32768/commentHub")
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
        await newConnection.invoke("JoinGroup", String(video.id));

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
        <Col xl={12}>
          <NavHeader />
        </Col>
      </Row>
      <Col className="mt-1 mb-1 d-flex justify-content-start m-4 mb-0" xl={6}>
        <CloseButton />
      </Col>
      <Row>
        <Col xl={8} style={{ backgroundColor: "black" }}>
          <FullVideoPlayerComponent video={video} />
        </Col>
        <Col xl={4} className="position-relative">
          <CommentesComponent video={video} comments={comments} />
        </Col>
      </Row>
    </Container>
  );
}

export default FullVideoPage;
