import axios from 'axios';

const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
  }
});

export default github;