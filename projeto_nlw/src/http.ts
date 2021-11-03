import express, {Request, Response} from "express";
import "./database";
import {routes} from "./routes";
import {createServer} from "http";
import {Server, Socket} from "socket.io";
import path from "path";

const port = 3333;
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request: Request, response: Response) => {
	return response.render("html/client.html");
});

app.get("/pages/admin", (request: Request, response: Response) => {
	return response.render("html/admin.html");
});

//	Criando protocolo HTTP
const http = createServer(app);

//	Criando protocolo WebSocket
const io = new Server(http);

io.on("connection", (socket: Socket) => {
	console.log("Conected:", socket.id);
});

app.use(express.json());
app.use(routes);

export {http, io, port};
