const rateLimit = require("express-rate-limit");
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors")

// Routers
const { eventsRoute } = require("./routes/events.route");
const { suscribeRoute } = require("./routes/suscribe.route");
const { ebookDataRoute } = require("./routes/ebookData.route");
const { formYellowRoute } = require("./routes/formYellow.route");
const { serviceFormRoute } = require("./routes/serviceForm.route");

// Global err controller
const { globalErrorHandler } = require("./controllers/error.controller");

// Utils
const { AppError } = require("./utils/appError.util");

// Init express app
const app = express();

// Enable incoming JSON
app.use(express.json());

// Use cors
app.use(cors())

// Set template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Limit the number of requests that can be accepted to our server
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000, // 1 hr
  message: "Number of requests have been exceeded",
});

app.use(limiter);

// Add security headers
app.use(helmet());

// Compress responses
app.use(compression());

// Log incoming requests
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

// Define endpoints
app.use("/api/v1/events", eventsRoute);
app.use("/api/v1/suscribe", suscribeRoute);
app.use("/api/v1/ebook-data", ebookDataRoute);
app.use("/api/v1/form-yellow", formYellowRoute);
app.use("/api/v1/form-services", serviceFormRoute);

// Handle incoming unknown routes to the server
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
