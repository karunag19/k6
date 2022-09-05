import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '10s',
};

export default function () {
  http.get('http://10.10.42.26:8000/async/');
  // http.get('http://10.10.42.26:8000/sync/');
  sleep(1);
}

