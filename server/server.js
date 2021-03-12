const http = require("http");
const app = require("./index");
const db = require('./models');
const PORT = process.env.PORT || '8080';


const server = http.createServer(app)

if (process.env.NODE_ENV === "development") {
  server.listen(PORT, () => {
    console.log(`Local: ${process.env.NODE_APP_URL}:${PORT}`);
    console.log('*************************************\n');
  })
} else {
  // Sync sequelize models then start Express app
  // =============================================
  db.sequelize.sync({ force: false, alter: true })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Local: ${process.env.NODE_APP_URL}:${PORT}`);
        console.log('*************************************\n');
      });
    }) 
    .then(() => {
      console.log('\n*************************************');
      console.log(`${process.env.DB_USERNAME} database connected | database name: ${process.env.DB_DATABASE}`);
    });
}