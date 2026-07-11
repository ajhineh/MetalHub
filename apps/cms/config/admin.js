module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'testAdminJwtSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'testApiTokenSalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'testTransferTokenSalt'),
    },
  },
});
