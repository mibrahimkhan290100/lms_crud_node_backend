const { hashPassword } = require("../utils/configs/auth");
const db = require("../utils/databases/db");
const { registerSchema } = require("../utils/validations/authValidation");

async function RegisterUser(req, res) {
  const { error, value } = registerSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const message = error.details.map((d) => d.message);
    return res.status(400).json({ error: message });
  }

  const {password , ...UserData} = value;
  
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
      user: {id , ...UserData },
      status: true,
      message: "Data inserted Successfully",
    });
  } catch (err) {
    console.error("RegisterUser error:", err);
    return res.status(500).json({ error: "Registration failed" });
  }
}
const LoginUser = async (req, res) => {};

module.exports = { RegisterUser, LoginUser };
