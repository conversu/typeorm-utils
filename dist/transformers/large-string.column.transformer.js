"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnLargeStringTransformer = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class ColumnLargeStringTransformer {
    constructor(secret, encrypt) {
        this.secret = secret;
        this.encrypt = encrypt;
    }
    to(data) {
        if (!data) {
            return null;
        }
        try {
            let result = data;
            if (this.encrypt) {
                result = crypto_js_1.default.AES.encrypt(result, this.secret).toString();
            }
            return Buffer.from(result, 'utf-8');
        }
        catch (err) {
            return null;
        }
    }
    from(data) {
        if (!data) {
            return null;
        }
        let result = data.toString('utf-8');
        try {
            if (this.encrypt) {
                result = crypto_js_1.default.AES.decrypt(result, this.secret).toString(crypto_js_1.default.enc.Utf8);
            }
            return result;
        }
        catch (err) {
            return null;
        }
    }
}
exports.ColumnLargeStringTransformer = ColumnLargeStringTransformer;
