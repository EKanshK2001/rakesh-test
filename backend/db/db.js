import mongoose from "mongoose";

// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.MONGO_URI);

mongoose
  .connect('mongodb+srv://ekanshadmin:Yio947clsEJcHAqc@cluster0.qjptc24.mongodb.net/rakesh_test_app')
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
