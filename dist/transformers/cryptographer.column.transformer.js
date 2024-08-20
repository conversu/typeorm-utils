"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnCryptographerTransformer = void 0;
const aes_1 = require("../utils/aes");
class ColumnCryptographerTransformer {
    constructor(secret) {
        this.secret = secret;
    }
    to(data) {
        return (0, aes_1.encrypt)(this.secret, data);
    }
    from(data) {
        return (0, aes_1.decrypt)(this.secret, data);
    }
}
exports.ColumnCryptographerTransformer = ColumnCryptographerTransformer;
