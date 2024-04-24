import React, { useState, useEffect } from "react";
import {
  Button,
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
import FullVideoPlayerComponent from "../Components/fullvideoPlayerComponent";
import { useLocation } from "react-router-dom";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import CommentesComponent from "../Components/CommentsComponent";

// Import your API function
function FullVideoPage() {
  const location = useLocation();
  const video = location.state?.video || null;

  // /const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [connectionId, setConnectionId] = useState(null); // Add this line
  const [connection, setConnection] = useState(null); // Add this line

  // First useEffect for setting up the connection
  useEffect(() => {
    const fetchData = async () => {
      try {
        // If a connection already exists, stop it
        if (connection) {
          await connection.stop();
          console.log("Existing SignalR connection stopped");
        }

        let newConnection = null;

        // Load the video first
        // const videoData = await getVideoById();
        // setVideo(videoData);

        // Ensure video is defined before accessing its id
        if (video) {
          const commentData = await getVideoCommnets(video.id);
          setComments(commentData);
        } else {
          console.log("Video is undefined");
          return;
        }

        // Create a new SignalR connection
        newConnection = new signalR.HubConnectionBuilder()
          .withUrl("https://localhost:32768/commentHub")
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
  }, []); // Empty dependency array

  // Second useEffect for joining the group
  useEffect(() => {
    const joinGroup = async () => {
      if (video && connection) {
        await connection.invoke("JoinGroup", String(video.id));
      }
    };

    joinGroup();
  }, [video, connection]); // Dependency array with video and connection

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
