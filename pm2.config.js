module.exports = {
  apps: [
    {
      name: 'Node',
      script: 'npm run dev:node',
      watch: ['./build/index.js'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      name: 'Remix',
      script: 'npm run dev:remix',
      ignore_watch: ['.'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      ignore_watch: ['.'],
      name: 'Post css',
      script: 'npm run dev:css',
      autorestart: false,
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
  ],
}
