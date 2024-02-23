import User from "../db/db.js";
import zod from "zod";
import { errorHandler } from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const jwt_secret = process.env.JWT_SECRET || 'secret_string';

const signupSchema = zod.object({
  username: zod.string().min(3),
  email: zod.string().email(),
  password: zod.string().min(5),
});

const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(5),
});

export default async function signup(req, res) {
  const { success } = signupSchema.safeParse(req.body);

  if (!success) {
    console.log("not working");
    return next(errorHandler(400, "Password too small or Incorrect inputs"));
  }

  try {
    //destructuring
    const { username, email, password } = req.body;
    console.log(username, email, password);

    //existing username or email checks
    const existingUserWithUsername = await User.findOne({ username: username });
    const existingUserWithEmail = await User.findOne({ email: email });

    if (existingUserWithEmail) {
      return next(errorHandler(400, "a user already exists with that email, login instead"));
    }

    if (existingUserWithUsername) {
      return next(errorHandler(411, "username taken"));
      // res.status(411).json({message: "username taken"});
    }

    const saltRounds = 10;
    const hashedPassword = bcryptjs.hashSync(password, saltRounds);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ msg: "signup successful" });
  } catch (error) {
    next(error);
  }
}

export const signin = async (req, res, next) => {
  //zod checks
  const { success } = signinSchema.safeParse(req.body);

  if (!success) {
    //error 400
    return next(errorHandler(400, "Incorrect inputs")); // CAN NOT STRESS THIS FACT ENOUGH PLEASE RETURN ERRORS THROUGH ERROR HANDLER AND A STATUS CODE IS SO IMPORTANT TO FIND OUT BUGS WTF
  }

  try {
    //destructuring Request body
    const { email, password } = req.body;

    //email and password check from database and bcryptjs
    const validUser = await User.findOne({ email: email }); //works as a user info extraction for later as well

    if (!validUser) {
      return next(errorHandler(400, "No user found"));
    }

    //hashing password with bcryptjs
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    //so acutally, the salt is stored in the hashed password automatically, hence not needing the salt when verifying.

    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    // @ts-ignore
    const { password: whateverPassword, ...rest } = validUser._doc; //notice the way of excluding the password from the object

    //signing jwt token with user id and jwt_secret to send
    const token = jwt.sign({ id: validUser._id }, jwt_secret);

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
