/**
 * pm2 process definition.
 *
 * The app needs Node 22, but pm2 itself may be running on an older system
 * Node, so pass the Node 22 binary explicitly the first time:
 *
 *   REALTOR_NODE_BIN="$(nvm which 22)" pm2 start ecosystem.config.cjs
 *   pm2 save
 *
 * pm2 remembers the interpreter after that; later deploys only need
 * `pm2 restart realtor-dcantero`.
 */
module.exports = {
  apps: [
    {
      name: "realtor-dcantero",
      cwd: __dirname,
      script: "server.js",
      interpreter: process.env.REALTOR_NODE_BIN || "node",
      node_args: "--env-file-if-exists=.env",
      env: { NODE_ENV: "production" },
      max_memory_restart: "300M",
      time: true,
    },
  ],
};
