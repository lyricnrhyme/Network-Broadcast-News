const net = require("net");

const client = net.createConnection(6969, "34.217.133.117", () => {
    client.write("WELCOME!");
    client.on("data", data => {
        // console.log(data.toString());
    });
    process.stdin.pipe(client);
    

});