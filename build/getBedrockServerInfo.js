"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBedrockServerInfo = void 0;
var minecraft_server_util_1 = require("minecraft-server-util");
var splitAddress_1 = require("./splitAddress");
var getBedrockServerInfo = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, host, port, s, error_1;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = (0, splitAddress_1.splitAddress)(address, 19132), host = _a.host, port = _a.port;
                _l.label = 1;
            case 1:
                _l.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, minecraft_server_util_1.statusBedrock)(host, port)];
            case 2:
                s = _l.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _l.sent();
                s = null;
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, {
                    online: !!s,
                    host: ((_b = s === null || s === void 0 ? void 0 : s.srvRecord) === null || _b === void 0 ? void 0 : _b.host) || host,
                    port: {
                        ipv4: (s === null || s === void 0 ? void 0 : s.portIPv4) || port,
                        ipv6: (s === null || s === void 0 ? void 0 : s.portIPv6) || null,
                        srv: ((_c = s === null || s === void 0 ? void 0 : s.srvRecord) === null || _c === void 0 ? void 0 : _c.port) || null,
                    },
                    edition: (s === null || s === void 0 ? void 0 : s.edition) || null,
                    version: ((_d = s === null || s === void 0 ? void 0 : s.version) === null || _d === void 0 ? void 0 : _d.name) || null,
                    protocol: ((_e = s === null || s === void 0 ? void 0 : s.version) === null || _e === void 0 ? void 0 : _e.protocol) || null,
                    guid: (s === null || s === void 0 ? void 0 : s.serverGUID.toString()) || null,
                    id: (s === null || s === void 0 ? void 0 : s.serverID) || null,
                    gamemode: {
                        id: (s === null || s === void 0 ? void 0 : s.gameModeID) || null,
                        name: (s === null || s === void 0 ? void 0 : s.gameMode) || null,
                    },
                    motd: {
                        raw: ((_f = s === null || s === void 0 ? void 0 : s.motd) === null || _f === void 0 ? void 0 : _f.raw) || null,
                        clean: ((_g = s === null || s === void 0 ? void 0 : s.motd) === null || _g === void 0 ? void 0 : _g.clean) || null,
                        html: ((_h = s === null || s === void 0 ? void 0 : s.motd) === null || _h === void 0 ? void 0 : _h.html) || null,
                    },
                    players: {
                        online: ((_j = s === null || s === void 0 ? void 0 : s.players) === null || _j === void 0 ? void 0 : _j.online) || 0,
                        max: ((_k = s === null || s === void 0 ? void 0 : s.players) === null || _k === void 0 ? void 0 : _k.max) || 0,
                    },
                }];
        }
    });
}); };
exports.getBedrockServerInfo = getBedrockServerInfo;
