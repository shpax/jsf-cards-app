
module.exports = {
  apps: [{
    script: './bin/www',
    name: 'jsf-cards-app',
    watch: process.env.NODE_ENV ? [] : ['views', 'routes', 'app.js']
  }],
};