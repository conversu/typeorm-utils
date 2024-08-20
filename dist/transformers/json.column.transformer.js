"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnJsonTransformer = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class ColumnJsonTransformer {
    constructor(secret, encrypt) {
        this.secret = secret;
        this.encrypt = encrypt;
    }
    to(data) {
        try {
            let result = 'transformation_error';
            if (typeof data === 'string') {
                result = data;
            }
            else {
                result = JSON.stringify(data);
            }
            if (this.encrypt) {
                result = crypto_js_1.default.AES.encrypt(result, this.secret).toString();
            }
            return result;
        }
        catch (err) {
            return 'transformation_error';
        }
    }
    from(data) {
        if (data === 'transformation_error') {
            return null;
        }
        try {
            if (this.encrypt) {
                return JSON.parse(crypto_js_1.default.AES.decrypt(data, this.secret).toString(crypto_js_1.default.enc.Utf8));
            }
            return JSON.parse(data);
        }
        catch (err) {
            return data;
        }
    }
}
exports.ColumnJsonTransformer = ColumnJsonTransformer;
