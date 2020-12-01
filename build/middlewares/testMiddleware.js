"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMiddleware = void 0;
function testMiddleware(req, res, next) {
    console.log("Request...");
    next();
}
exports.testMiddleware = testMiddleware;
;
//# sourceMappingURL=testMiddleware.js.map