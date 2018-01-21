import express from 'express'
import path from 'path'

const app = express()

app.post("/api/auth", (req, res) => {
  res.status(400).json({errors: {global: "Invalid credentials"}})
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8879, () => console.log(' my server is running on port 8879'))
