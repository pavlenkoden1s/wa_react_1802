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
const auth_1 = require("../../services/auth");
const types_1 = require("./types");
const dispatchSetToken = (payload) => ({
    type: types_1.AUTH_ACTION_TYPES.SET_TOKEN,
    payload
});
exports.setToken = (code) => (dispatch) => __awaiter(this, void 0, void 0, function* () {
    const responseData = yield auth_1.fetchToken(code);
    dispatch(dispatchSetToken(responseData));
});
//# sourceMappingURL=actions.js.map