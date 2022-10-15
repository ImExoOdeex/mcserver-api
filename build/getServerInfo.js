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
exports.getServerInfo = void 0;
var minecraft_server_util_1 = require("minecraft-server-util");
var splitAddress_1 = require("./splitAddress");
var getServerInfo = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, host, port, s, q, l, res;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    return __generator(this, function (_3) {
        switch (_3.label) {
            case 0:
                _a = (0, splitAddress_1.splitAddress)(address), host = _a.host, port = _a.port;
                return [4 /*yield*/, Promise.allSettled([
                        (0, minecraft_server_util_1.status)(host, port),
                        (0, minecraft_server_util_1.queryFull)(host, port),
                        (0, minecraft_server_util_1.statusLegacy)(host, port),
                    ])];
            case 1:
                res = _3.sent();
                res[0].status === "fulfilled" && (s = res[0].value);
                res[1].status === "fulfilled" && (q = res[1].value);
                res[2].status === "fulfilled" && (l = res[2].value);
                return [2 /*return*/, {
                        online: !!s || !!q || !!l,
                        host: ((_b = s === null || s === void 0 ? void 0 : s.srvRecord) === null || _b === void 0 ? void 0 : _b.host) || ((_c = l === null || l === void 0 ? void 0 : l.srvRecord) === null || _c === void 0 ? void 0 : _c.host) || host,
                        ip: (q === null || q === void 0 ? void 0 : q.hostIP) || null,
                        port: (q === null || q === void 0 ? void 0 : q.hostPort) || ((_d = s === null || s === void 0 ? void 0 : s.srvRecord) === null || _d === void 0 ? void 0 : _d.port) || ((_e = l === null || l === void 0 ? void 0 : l.srvRecord) === null || _e === void 0 ? void 0 : _e.port) || port || null,
                        version: (q === null || q === void 0 ? void 0 : q.version) || ((_f = s === null || s === void 0 ? void 0 : s.version) === null || _f === void 0 ? void 0 : _f.name) || ((_g = l === null || l === void 0 ? void 0 : l.version) === null || _g === void 0 ? void 0 : _g.name) || null,
                        protocol: ((_h = s === null || s === void 0 ? void 0 : s.version) === null || _h === void 0 ? void 0 : _h.protocol) || ((_j = l === null || l === void 0 ? void 0 : l.version) === null || _j === void 0 ? void 0 : _j.protocol) || null,
                        software: (q === null || q === void 0 ? void 0 : q.software) || ((_k = s === null || s === void 0 ? void 0 : s.version) === null || _k === void 0 ? void 0 : _k.name) || null,
                        plugins: (q === null || q === void 0 ? void 0 : q.plugins) || [],
                        map: (q === null || q === void 0 ? void 0 : q.map) || null,
                        motd: {
                            raw: ((_l = q === null || q === void 0 ? void 0 : q.motd) === null || _l === void 0 ? void 0 : _l.raw) || ((_m = s === null || s === void 0 ? void 0 : s.motd) === null || _m === void 0 ? void 0 : _m.raw) || ((_o = l === null || l === void 0 ? void 0 : l.motd) === null || _o === void 0 ? void 0 : _o.raw) || null,
                            clean: ((_p = q === null || q === void 0 ? void 0 : q.motd) === null || _p === void 0 ? void 0 : _p.clean) || ((_q = s === null || s === void 0 ? void 0 : s.motd) === null || _q === void 0 ? void 0 : _q.clean) || ((_r = l === null || l === void 0 ? void 0 : l.motd) === null || _r === void 0 ? void 0 : _r.clean) || null,
                            html: ((_s = q === null || q === void 0 ? void 0 : q.motd) === null || _s === void 0 ? void 0 : _s.html) || ((_t = s === null || s === void 0 ? void 0 : s.motd) === null || _t === void 0 ? void 0 : _t.html) || ((_u = l === null || l === void 0 ? void 0 : l.motd) === null || _u === void 0 ? void 0 : _u.html) || null,
                        },
                        favicon: (s === null || s === void 0 ? void 0 : s.favicon) || null,
                        players: {
                            online: ((_v = q === null || q === void 0 ? void 0 : q.players) === null || _v === void 0 ? void 0 : _v.online) || ((_w = s === null || s === void 0 ? void 0 : s.players) === null || _w === void 0 ? void 0 : _w.online) || ((_x = l === null || l === void 0 ? void 0 : l.players) === null || _x === void 0 ? void 0 : _x.online) || 0,
                            max: ((_y = q === null || q === void 0 ? void 0 : q.players) === null || _y === void 0 ? void 0 : _y.max) || ((_z = s === null || s === void 0 ? void 0 : s.players) === null || _z === void 0 ? void 0 : _z.max) || ((_0 = l === null || l === void 0 ? void 0 : l.players) === null || _0 === void 0 ? void 0 : _0.max) || 0,
                            list: ((_1 = s === null || s === void 0 ? void 0 : s.players) === null || _1 === void 0 ? void 0 : _1.sample) ||
                                ((_2 = q === null || q === void 0 ? void 0 : q.players) === null || _2 === void 0 ? void 0 : _2.list.map(function (p) {
                                    return { name: p, id: null };
                                })) ||
                                [],
                        },
                        ping: (s === null || s === void 0 ? void 0 : s.roundTripLatency) || null,
                        debug: {
                            status: !!s,
                            query: !!q,
                            legacy: !s && !!l,
                        },
                    }];
        }
    });
}); };
exports.getServerInfo = getServerInfo;
