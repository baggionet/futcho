const fs = require('fs');
const path = require('path');

const routesFiles = [
  path.resolve(__dirname, '../public'),
  path.resolve(__dirname, '../public/images'),
  path.resolve(__dirname, '../public/images/equipo')
];

routesFiles.forEach(route => {
  if (!fs.existsSync(route)) {
    fs.mkdirSync(route);
  }
});