module.exports = ({ env }) => ({
  connection: {
    client: env('DB_CONNECTION'),
    connection: {
      host: env('DB_HOST'),
      port: env.int('DB_PORT'),
      database: env('DB_DATABASE'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
