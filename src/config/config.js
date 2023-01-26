let config;

if (process.env.ENVIRONMENT === "production") {
  config = {
    serverPort: process.env.SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET_WORD,
    database: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dialect: "postgres",
    },
  };
} else if (process.env.ENVIRONMENT === "staging") {
  config = {
    serverPort: process.env.SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET_WORD,
    database: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dialect: "postgres",
    },
  };
} else if (process.env.ENVIRONMENT === "development") {
  config = {
    serverPort: process.env.SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET_WORD,
    database: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dialect: "postgres",
    },
  };
} else {
  config = {
    serverPort: process.env.SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET_WORD,
    database: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dialect: "postgres",
    },
  };
}

module.exports = { config };
