const { app } = require("./app");

// Utils
const { db } = require("./utils/database.util");

const startServer = async () => {
  try {
    await db.authenticate();

    await db.sync();

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log("Express app running!!", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
