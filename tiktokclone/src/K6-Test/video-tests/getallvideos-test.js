import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_VIDEO_URL = 'https://localhost:32770/api/Video'; // Update with your actual video API base URL

export let options = {
  stages: [
    { duration: '1m', target: 100 }, // ramp-up to 10 users over 1 minute
    { duration: '2m', target: 250 }, // stay at 10 users for 2 minutes
    { duration: '1m', target: 0 }, // ramp-down to 0 users over 1 minute
  ],
};

export default function () {
  let res = http.get(`${BASE_VIDEO_URL}/GetAllVideos`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1); // sleep for 1 second between requests
}