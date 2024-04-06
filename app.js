const express = require("express")

const app = express()

app.use((res, req, next) => {
    console.log("IN the middleware")
    next()
})
app.use((req, res, next) => {
    console.log("IN the middleware")
   res.send({ key1: "HelloSharpener" })
})


app.listen(3000);