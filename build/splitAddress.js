"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAddress = void 0;
var splitAddress = function (address, defaultPort) {
    var _a = address.split(":"), host = _a[0], port = _a[1];
    return { host: host, port: parseInt(port) || defaultPort || 25565 };
};
exports.splitAddress = splitAddress;
