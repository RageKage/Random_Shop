module.exports = {
    "development": {
      "storage": "menuitems.db",
      "dialect": "sqlite"
    },
    "production": {
      "username": "niman",
      "password": process.env.DB_PASSWORD,
      "database": "demo-online-restaurant-database",
      "host": "demo-online-restaurant-database-server.database.windows.net",
      "dialect": "mssql",
    }
  }
