const express = require("express");

const app = express();

const morgan = require("morgan");

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.get("/", (req, res) => {
  try {
    res.json({
      message: "Hello, from server",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/jokes", (req, res) => {
  try {
    const jokes = [
      {
        joke: "Why don't scientists trust atoms? Because they make up everything!",
      },
      {
        joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      },
      {
        joke: "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them.",
      },
      {
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      },
      {
        joke: "I used to play piano by ear, but now I use my hands.",
      },
    ];

    res.status(200).json(jokes);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
