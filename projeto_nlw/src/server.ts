import {http, port} from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(port, () => console.log("Server is running on port", port));
