"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.client = void 0;
const mongodb_1 = require("mongodb");
const connectionString = "mongodb+srv://thuynguyen:131123Na@cluster0.wnuov.mongodb.net/";
exports.client = new mongodb_1.MongoClient(connectionString);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.client.connect();
        console.log("DB connected successfully!");
    }
    catch (e) {
        console.log(e);
    }
    finally {
        yield exports.client.close();
    }
});
exports.connectDB = connectDB;
//# sourceMappingURL=server.js.map