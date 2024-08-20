"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumberTransformer = void 0;
class ColumnNumberTransformer {
    to(data) {
        return data;
    }
    from(data) {
        // output value, you can use Number, parseFloat variations
        // also you can add nullable condition:
        // if (!Boolean(data)) return 0;
        return parseInt(data);
    }
}
exports.ColumnNumberTransformer = ColumnNumberTransformer;
