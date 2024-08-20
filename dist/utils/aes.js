"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
const crypto_js_1 = __importDefault(require("crypto-js"));
function encrypt(secret, value) {
    if (value) {
        return crypto_js_1.default.AES.encrypt(value, secret).toString();
    }
    return null;
}
function decrypt(secret, value) {
    if (value) {
        return crypto_js_1.default.AES.decrypt(value, secret).toString(crypto_js_1.default.enc.Utf8);
    }
    return null;
}
