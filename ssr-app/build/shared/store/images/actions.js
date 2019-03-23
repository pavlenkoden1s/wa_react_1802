"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const unsplash_1 = require("../../services/unsplash");
const loadingStart = () => ({
    type: types_1.IMAGES_ACTION_TYPES.LOADING,
    payload: { isLoading: true }
});
const searchSucceed = (payload) => ({
    type: types_1.IMAGES_ACTION_TYPES.SEARCH_SUCCEED,
    payload
});
const searchError = () => ({
    type: types_1.IMAGES_ACTION_TYPES.SEARCH_ERROR,
});
// Action creator
exports.getItems = (payload) => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        dispatch(loadingStart());
        const response = yield unsplash_1.searchItems(payload);
        if (response) {
            dispatch(searchSucceed(Object.assign({}, response, { isLoading: false })));
        }
        else {
            dispatch(searchError());
        }
    });
};
//# sourceMappingURL=actions.js.map