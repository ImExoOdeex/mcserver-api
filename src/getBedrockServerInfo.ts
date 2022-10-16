import { statusBedrock } from "minecraft-server-util";
import splitAddress from "./splitAddress";

type BedrockServer = {
    online: boolean;
    host: string;
    port: {
        ipv4: number | null;
        ipv6: number | null;
        srv: number | null;
    };
    edition: string | null;
    version: string | null;
    protocol: number | null;
    guid: string | null;
    id: string | null;
    gamemode: {
        id: number | null;
        name: string | null;
    };
    motd: {
        raw: string | null;
        clean: string | null;
        html: string | null;
    };
    players: {
        online: number;
        max: number;
    };
};


const getBedrockServerInfo = async (address: string): Promise<BedrockServer> => {
    const { host, port } = splitAddress(address, 19132);

    let s;

    try {
        s = await statusBedrock(host, port);
    } catch (error) {
        s = null;
    }

    return {
        online: !!s,
        host: s?.srvRecord?.host || host,
        port: {
            ipv4: s?.portIPv4 || port,
            ipv6: s?.portIPv6 || null,
            srv: s?.srvRecord?.port || null,
        },
        edition: s?.edition || null,
        version: s?.version?.name || null,
        players: {
            online: s?.players?.online || 0,
            max: s?.players?.max || 0,
        },
        protocol: s?.version?.protocol || null,
        guid: s?.serverGUID.toString() || null,
        id: s?.serverID || null,
        gamemode: {
            id: s?.gameModeID || null,
            name: s?.gameMode || null,
        },
        motd: {
            raw: s?.motd?.raw || null,
            clean: s?.motd?.clean || null,
            html: s?.motd?.html || null,
        },
    };
};

export { getBedrockServerInfo };