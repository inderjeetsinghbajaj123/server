import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.get("/health" , (req,res) => {
  return res.status(200).json({"status":"AWS server is live with ci cd integrated"})
})

app.get("/", (req, res) => {
  res.status(200).send("Hello World from AWS SERVER!")
})  

app.listen(PORT, () => {
  console.log(`This Server is running on ${PORT}`)
})