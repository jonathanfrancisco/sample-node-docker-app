const config = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_ADMIN_USERNAME,
    password: process.env.DB_ADMIN_PASSWORD,
    name: process.env.DB_NAME,
  },
};

export default config;
