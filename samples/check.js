import { check } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '10s',
};

export default function () {
  const res = http.get('http://10.10.42.26:8000/async/');
  check(res, {
    'is status 200': (r) => r.status === 200,
    'verify homepage text': (r) =>
      r.body.includes('async'),
  });
}