const express = require('express')
const app = express()

const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`express app listening on port ${port}`)
})
