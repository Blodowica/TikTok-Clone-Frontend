import http from 'k6/http';
import { check, sleep } from 'k6';

// Define your video service URL
let VIDEO_SERVICE_URL = 'https://localhost:32770/api/Video/upload';  // Replace with your actual video service URL

// Read the video file in the global scope
let videoData = open('../resources/testvideo.mp4', 'b');  // 'b' flag indicates binary mode

export let options = {
  vus: 1,
  duration: '1m',
};

export default function () {
  uploadVideo();
}

function uploadVideo() {
  // Prepare the request body
  let requestBody = {
    file: http.file(videoData, 'testvideo.mp4', 'video/mp4'),
    caption: 'wssws',
    isCommentsDisabled: 'false',
    audience: 'Everyone',
    authorId: '23', // Replace with the actual author ID
  };

  // Send a POST request with the file content as body
  let res = http.post(VIDEO_SERVICE_URL, requestBody);

  // Check if the request was successful (status 200)
  check(res, { 'status was 200': (r) => r.status == 200 });

  sleep(30); // sleep for 1 second between requests
}
