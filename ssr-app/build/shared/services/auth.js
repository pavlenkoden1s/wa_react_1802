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
const axios_1 = __importDefault(require("axios"));
const configs_1 = __importDefault(require("../configs"));
exports.fetchAuthCode = () => {
    const requestConfig = {
        params: {
            client_id: configs_1.default.clientId,
            redirect_uri: 'http://localhost:3000/auth',
            response_type: 'code',
            scope: 'public+read_user'
        }
    };
    axios_1.default.get('https://unsplash.com/oauth/authorize', requestConfig);
};
exports.fetchToken = (code) => __awaiter(this, void 0, void 0, function* () {
    const requestConfig = {
        params: {
            client_id: configs_1.default.clientId,
            client_secret: configs_1.default.clientSecret,
            redirect_uri: 'http://localhost:3000/auth',
            code,
            grant_type: 'authorization_code'
        }
    };
    const request = axios_1.default.create(requestConfig);
    const response = yield request.post('https://unsplash.com/oauth/token');
    return response.data;
});
//# sourceMappingURL=auth.js.map