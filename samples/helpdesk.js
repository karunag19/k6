import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// ----------karuna - working ----------
// export const options = {
//     vus: 10,
//     duration: '10s',
// };
// ----------karuna end-------

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '5s', target: 50 },
  ],
};

export default function () {
  const res = http.get('http://10.10.42.26:8000/async/');
  // const res = http.get('http://10.10.42.26:8000/sync/');
  sleep(1);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}

