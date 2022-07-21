const {workerData, parentPort} = require("worker_threads")
const gm = require("gm")

gm(workerData.source).resize(100,100).write(workerData.destination, (error)=>{
    if(error) throw new Error(error)
    parentPort.postMessage({
        resized: true
    })
})

