"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("./server");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/getData", (req, res) => {
    res.send("Hello hihihi");
});
app.post("/post", (req, res) => {
    console.log("Connect to React");
    res.send("/");
    (0, server_1.connectDB)();
});
app.post("/makeOrder", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map