// eslint-disable-next-line no-undef
module.exports = {
  apps : [{
    name: 'Main',
    script: 'main.js',
    instances: 1,
    autorestart: false,
    watch: false,
    max_restarts: 10,
    node_args: '--max_old_space_size=8192'
  }],
};
