module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env("DATABASE_CLIENT", "postgres"),
        host: env("DATABASE_HOST", "ec2-63-34-16-201.eu-west-1.compute.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dd1nei0mvj92tv"),
        user: env("DATABASE_USERNAME", "szuyijfjiekxtv"),
        password: env("DATABASE_PASSWORD", "83778774c9c738aa185347c4db8ffbedd6103947d1ca68831a1127332bf74a1f"),
        ssl: false,
      },
      debug: false,
      options: {},
    },
  },
});