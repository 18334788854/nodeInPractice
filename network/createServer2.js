let net = require("net");
let assert = require("assert");
let clients = 0;
let expectedAssertions = 2;
let server = net.createServer(function (client) {
    clients++;
    let clientId = clients;
    console.log(`Client connected:${clientId}`);
    client.on("end", function () {
        console.log(`Client disconnected:${clientId}`);
    });
    client.write(`Welcome client:${clientId}\r\n`);
    client.pipe(client);
});

server.listen(8000, function () {
    console.log(`Server started on port 8000!`);

    runTest(1, function () {
        runTest(2, function () {
            console.log(`Tests finished!`);
            assert.equal(0, expectedAssertions);
            server.close();
        })
    })
});

function runTest(expectedId, done) {
    let client = net.connect(8000);
    client.on("data", function (data) {
        let expected = `Welcome client:${expectedId}\r\n`;
        assert.equal(data.toString(), expected);
        expectedAssertions--;
        client.end();
    });
    client.on("end", done);
}