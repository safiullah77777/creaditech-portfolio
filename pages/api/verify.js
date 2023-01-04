// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { secretKey } from "../../utils/keys";

export default async function handler(req, res) {
  const human = await ValidateHuman(req.body.token);
  if (!human) {
    res.status(400).send({ message: "you're not human" });
    return;
  }
  res.status(200).send({ message: "you're human" ,success: true });
}
const ValidateHuman = async (token) => {
  console.log({ token, secretKey });
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    }
  );
  const data = await response.json();
  console.log(data);
  return data.success;
};
