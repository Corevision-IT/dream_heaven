const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
const authRouters = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")


/* ROUTES */
app.use("/auth",authRouters);
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)



/* MONGO SET UP*/
const PORT = process.env.PORT || 3000;
mongoose.connect(
  process.env.MONGO_URI, 
  {
    dbName:"Dream_Heaven",
    useNewUrlParser: true,
    useUnifiedTopology: true,    
  })
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`Server is running on Port :${PORT}`));
    })
    .catch((err) => console.log(`${err} : Did Not Connect`))

