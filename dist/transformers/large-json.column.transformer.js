"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnLargeJsonTransformer = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class ColumnLargeJsonTransformer {
    constructor(secret, encrypt) {
        this.encrypt = encrypt;
        this.secret = secret;
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
            return Buffer.from(result, 'utf-8');
        }
        catch (err) {
            return Buffer.from('transformation_error');
        }
    }
    from(data) {
        const content = data.toString('utf-8');
        if (content === 'transformation_error') {
            return null;
        }
        try {
            let result = content;
            if (this.encrypt) {
                result = crypto_js_1.default.AES.decrypt(content, this.secret).toString(crypto_js_1.default.enc.Utf8);
            }
            return result ? JSON.parse(result) : null;
        }
        catch (err) {
            return content;
        }
    }
}
exports.ColumnLargeJsonTransformer = ColumnLargeJsonTransformer;
