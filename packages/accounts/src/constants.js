export const APP_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://app.jobel.co'
    : 'http://localhost:3000';
export const RESUME_APP_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://my.jobel.co'
    : 'http://localhost:5000';
