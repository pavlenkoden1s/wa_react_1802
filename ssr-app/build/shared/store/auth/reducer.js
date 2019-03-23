"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.INITIAL_STATE = {
    isAuthenticated: false,
    token: ''
};
exports.default = (state = exports.INITIAL_STATE, action) => {
    switch (action.type) {
        case types_1.AUTH_ACTION_TYPES.SET_TOKEN:
            const isAuthenticated = true;
            const token = action.payload.access_token;
            return Object.assign({}, state, { isAuthenticated, token });
        default:
            return state;
    }
};
exports.isAuthenticated = (state) => (state.auth.isAuthenticated);
//# sourceMappingURL=reducer.js.map