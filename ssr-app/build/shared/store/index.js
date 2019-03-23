"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const images_1 = __importDefault(require("./images"));
const auth_1 = __importDefault(require("./auth"));
const home_1 = __importDefault(require("./home"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
// const createStoreWithMiddleware = (middleWears: Array<Middleware> = []) => );
const reducer = redux_1.combineReducers({
    images: images_1.default,
    auth: auth_1.default,
    home: home_1.default
});
function configureStore(initialState = {}, middleWears = []) {
    console.log('>>>', initialState);
    return redux_1.createStore(reducer, initialState, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default, ...middleWears)));
}
exports.default = configureStore;
//# sourceMappingURL=index.js.map