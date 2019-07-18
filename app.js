const signalR = require("@aspnet/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:8087/rt-online-user")
    .build();

connection.on("SendNode", data => {
    console.log(data);
});


connection.start()
    .then(() => connection.invoke("SendNode", "Hello"));