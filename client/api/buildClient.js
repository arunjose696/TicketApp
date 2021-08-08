import axios from 'axios';

export default function buildClient(args) {
  const { req } = args;
  if (typeof window != 'undefined') {
    console.log(
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    );
    return axios.create({
      baseURL: '/',
    });
  }

  return axios.create({
    baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
    headers: req.headers,
  });
}
