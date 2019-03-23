"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const render_1 = __importDefault(require("./render"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get('/*', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('REQUEST');
    // const reactDom = render(mock);
    const reactDom = yield render_1.default(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(reactDom);
}));
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});
//# sourceMappingURL=server.js.map