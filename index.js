import http from "http";

const listener = (req, res) => {
    res.end("Hello World!");
}

const server = http.createServer(listener);
server.listen(3000);