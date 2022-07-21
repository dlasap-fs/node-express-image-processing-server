const express = require("express")
const path = require("path")
const imgRouter = require("./src/router")

const app = express()
const pathToIndex = path.resolve(__dirname, '../client/index.html')

app.use('/', imgRouter)
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/*', (request, response)=>{
    response.sendFile(pathToIndex)
})
module.exports = app