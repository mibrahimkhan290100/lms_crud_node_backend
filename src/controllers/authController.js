const { hashPassword, verifyPassword } = require("../utils/configs/auth");
const { signToken } = require("../utils/configs/jwt");
const db = require("../utils/databases/db");
const {
  registerSchema,
  loginSchema,
} = require("../utils/validations/authValidation");

async function RegisterUser(req, res) {
  const { error, value } = registerSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const message = error.details.map((d) => d.message);
    return res.status(400).json({ error: message });
  }

  const { password, ...UserData } = value;

  try {
    const existing = await db("users").where({ email: UserData.email }).first();

    if (existing) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const password_hash = await hashPassword(password);

    const [id] = await db("users").insert({
      ...UserData,
      password: password_hash,
    });

    return res.status(201).json({
      user: { id, ...UserData },
      status: true,
      message: "Data inserted Successfully",
    });
  } catch (err) {
    console.error("RegisterUser error:", err);
    return res.status(500).json({ error: "Registration failed" });
  }
}

async function LoginUser(req, res) {
  const { error, value } = loginSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const message = error.details.map((d) => d.message);
    return res.status(400).json({ error: message });
  }

  const { email, password } = value;

  try {
    const user = await db('users').where({email}).first();
    if(!user){
        return res.status(401).json({error : "User does not exists"})
    }

    const verify_password = await verifyPassword(user.password , password);
    if(!verify_password){
        return res.status(401).json({error:"Password invalid"});

    }

    const token = signToken({id: user.id , email : user.email});

    res.status(200).json({
        status: true ,
        message:"Login Successfull",
        data : {
            user,
            token
        }
    })
  } catch (err) {
    console.log('Login error: ' , err )
    res.status(500).json({
        error:"Login failed, please try again"
    })
  }
}

module.exports = { RegisterUser, LoginUser };
