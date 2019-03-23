"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const configs_1 = __importDefault(require("../configs"));
const request = axios_1.default.create({
    baseURL: configs_1.default.baseUrl,
    headers: {
        'Authorization': `Client-ID ${configs_1.default.clientId}`
    }
});
exports.default = request;
//# sourceMappingURL=axios.js.map