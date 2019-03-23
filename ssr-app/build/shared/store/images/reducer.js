"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.INITIAL_STATE = {
    items: [],
    totalPages: 0,
    total: 0,
    isLoading: false
};
exports.default = (state = exports.INITIAL_STATE, action) => {
    switch (action.type) {
        case types_1.IMAGES_ACTION_TYPES.LOADING:
            return Object.assign({}, state, action.payload);
        case types_1.IMAGES_ACTION_TYPES.SEARCH_SUCCEED:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
// SELECTORS
exports.getImages = (state) => {
    return state.images.items;
};
exports.getIsLoading = (state) => state.images.isLoading;
exports.getTotalItems = (state) => {
    return state.images.total;
};
exports.getTotalPages = (state) => {
    return state.images.totalPages;
};
//# sourceMappingURL=reducer.js.map