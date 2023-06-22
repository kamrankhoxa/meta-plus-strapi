module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6455aad034a64f765034a6f4727aeeb8'),
    },
  },
});


// module.exports = {
//   apps: [
//     {
//       name: 'your-app-name', // Your project name
//       cwd: '/home/ubuntu/my-project', // Path to your project
//       script: 'npm', // For this example we're using npm, could also be yarn
//       args: 'start', // Script to start the Strapi server, `start` by default
//       env: {   
//         ADMIN_JWT_SECRET: '6455aad034a64f765034a6f4727aeeb8',
//         NODE_ENV: 'production',
//       },
//     },
//   ],
// };