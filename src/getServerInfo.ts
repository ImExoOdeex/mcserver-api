import { status, queryFull, statusLegacy } from "minecraft-server-util";
import { splitAddress } from "./splitAddress";

type MinecraftServer = {
    online: boolean;
    host: string;
    ip: string | null;
    port: number | null;
    version: string | null;
    protocol: number | null;
    software: string | null;
    plugins: string[];
    map: string | null;
    motd: {
        raw: string | null;
        clean: string | null;
        html: string | null;
    };
    favicon: string | null;
    players: {
        online: number;
        max: number;
        list: { name: string; id: string | null }[];
    };
    ping: number | null;
    debug: {
        status: boolean;
        query: boolean;
        legacy: boolean;
    };
};

const getServerInfo = async (address: string): Promise<MinecraftServer> => {
    const { host, port } = splitAddress(address);

    let s, q, l;

    const res = await Promise.allSettled([
        status(host, port),
        queryFull(host, port),
        statusLegacy(host, port),
    ]);

    res[0].status === "fulfilled" && (s = res[0].value);
    res[1].status === "fulfilled" && (q = res[1].value);
    res[2].status === "fulfilled" && (l = res[2].value);

    return {
        online: !!s || !!q || !!l,
        host: s?.srvRecord?.host || l?.srvRecord?.host || host,
        ip: q?.hostIP || null,
        port: q?.hostPort || s?.srvRecord?.port || l?.srvRecord?.port || port || null,
        version: q?.version || s?.version?.name || l?.version?.name || null,
        protocol: s?.version?.protocol || l?.version?.protocol || null,
        software: q?.software || s?.version?.name || null,
        plugins: q?.plugins || [],
        map: q?.map || null,
        motd: {
            raw: q?.motd?.raw || s?.motd?.raw || l?.motd?.raw || null,
            clean: q?.motd?.clean || s?.motd?.clean || l?.motd?.clean || null,
            html: q?.motd?.html || s?.motd?.html || l?.motd?.html || null,
        },
        favicon: s?.favicon || null,
        players: {
            online: q?.players?.online || s?.players?.online || l?.players?.online || 0,
            max: q?.players?.max || s?.players?.max || l?.players?.max || 0,
            list:
                s?.players?.sample ||
                q?.players?.list.map((p) => {
                    return { name: p, id: null };
                }) ||
                [],
        },
        ping: s?.roundTripLatency || null,
        debug: {
            status: !!s,
            query: !!q,
            legacy: !s && !!l,
        },
    };
};

export { getServerInfo };