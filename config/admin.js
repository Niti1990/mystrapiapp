module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '54a2a9eb14105130f901ceb8b0e190e1'),
  },
});
