import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "abhay@gmail.com" && password === "123") {
    res.status(200).json({ user: "abhay", role: "admin", accesToken: "123456" });
    console.log("response send successfully");
  } else if (email === "naman@gmail.com" && password === "098") {
    res.status(200).json({ user: "naman", role: "agency", accessToken: "567890" });
  } else if (req.body == null) {
    res.status(400).send({ success: false });
  }
});
// router.post("/signup", signup);

export default router;
