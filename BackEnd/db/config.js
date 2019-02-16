var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: "volunteer_db",
  user: 'Reema'
};

var connection = pgInstance(config);

module.exports = connection;