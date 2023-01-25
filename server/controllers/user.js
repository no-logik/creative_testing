export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(200).json({
      message: "hello world",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
