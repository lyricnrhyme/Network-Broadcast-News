const net = require("net");

const client = net.createConnection(6969, "0.0.0.0", () => {
    client.write("WELCOME!");
    client.on("data", data => {
        // console.log(data.toString());
    });
    process.stdin.pipe(client);
    client.write("WELCOME");
    client.on("data", data => {

        const msg = data.toString();
        if (msg.includes("/shia")) {
            client.write("https://www.youtube.com/watch?v=PSZy6lGgOcI")
        } 
        if (msg.includes("/just do it")) {
            client.write("https://www.youtube.com/watch?v=oTz93Y-qeq0");
        }
        if (msg.includes("/doodlebob")) {
            client.write("https://www.youtube.com/watch?v=9kn3mzdAnYI")
        }
        if (msg.includes("/key and peele")) {
            client.write("https://www.youtube.com/watch?v=nlD9JYP8u5E")
        }
        if (msg.includes("/a a ron")) {
            client.write("https://www.youtube.com/watch?v=Dd7FixvoKBw")
        }
             
        clients.map(user => {
            user.write(msg);
        })
    });

 clients.push(client);

});