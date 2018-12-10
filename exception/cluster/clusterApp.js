const app = require("./app");
const cluster = require("cluster");

if (cluster.isMaster) {
    let totalWorkers = require("os").cpus().length - 1;
    console.log(`Running ${totalWorkers} total workers.`);
    for (let i = 0; i < totalWorkers; i++) {
        cluster.fork();
    }
    cluster.on("exit", function (worker) {
        console.log(`Worker ${worker.id} died`);
        cluster.fork();
    });
} else {
    console.log(`Worker PID:${process.pid}`);
    app.listen(process.env.PORT || 3000);
}