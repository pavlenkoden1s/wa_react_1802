"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = require("../components/Home/Home");
const react_redux_1 = require("react-redux");
const mapStateToProps = (state) => {
    console.log('=====', state);
    return {
        title: state.home.title
    };
};
const ConnectedHome = react_redux_1.connect(mapStateToProps)(Home_1.Home);
exports.Home = ConnectedHome;
//# sourceMappingURL=Home.js.map