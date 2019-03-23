"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
const react_router_1 = require("react-router");
const template_1 = require("./template");
const App_1 = require("../shared/components/App");
const store_1 = __importDefault(require("../shared/store"));
const auth_1 = require("../shared/store/auth");
const reducer_1 = require("../shared/store/home/reducer");
const images_1 = require("../shared/store/images");
const react_redux_1 = require("react-redux");
const render = (req) => __awaiter(this, void 0, void 0, function* () {
    const authData = auth_1.INITIAL_STATE;
    const homeData = reducer_1.INITIAL_STATE;
    const imagesData = images_1.INITIAL_STATE;
    const store = store_1.default({
        auth: authData,
        home: homeData,
        images: imagesData
    });
    console.log(store);
    const app = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_1.StaticRouter, { location: req.url, context: {} },
            React.createElement(App_1.App, null))));
    return template_1.getPageTemplate(store, app);
});
exports.default = render;
//# sourceMappingURL=render.js.map