import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1, // 1 virtual user
  duration: '30s', // for 30 seconds
};


export default function () {
  let res = http.get(`https://localhost:32770/api/Video/GetAllVideos`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1); // sleep for 1 second between requests
}