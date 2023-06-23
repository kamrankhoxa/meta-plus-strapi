module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env("DATABASE_CLIENT", "postgres"),
        host: env("DATABASE_HOST", "ec2-52-31-161-46.eu-west-1.compute.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dt896gb8qr3je"),
        user: env("DATABASE_USERNAME", "wgruhkwmnwlbmb"),
        password: env("DATABASE_PASSWORD", "314b277d680b9284bfef8d0f4bac4c048264378322a442e8a9480926f7c6a22a"),
        ssl: false,
      },
      debug: false,
      options: {},
    },
  },
});