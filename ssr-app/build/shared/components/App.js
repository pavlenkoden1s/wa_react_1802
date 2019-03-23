"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const containers_1 = require("../containers");
const containers_2 = require("../containers");
class App extends React.Component {
    render() {
        // @ts-ignore
        return React.createElement("div", null,
            React.createElement("nav", null,
                React.createElement(react_router_dom_1.Link, { to: '/' }, "Home"),
                React.createElement(react_router_dom_1.Link, { to: '/about' }, "About")),
            React.createElement(react_router_1.Route, { path: '/', exact: true, render: () => React.createElement(containers_2.Home, null) }),
            React.createElement(react_router_1.Route, { path: '/about', render: () => React.createElement(containers_1.About, null) }));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map