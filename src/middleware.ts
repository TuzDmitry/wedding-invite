import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ipMap = new Map<string, { count: number, timestamp: number }>();

export function middleware(req: NextRequest) {
    const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "unknown";
    const now = Date.now();
    const record = ipMap.get(ip);
    console.log(ip,'ip')
    if (record && now - record.timestamp < 60_000) {
        if (record.count > 10) {
            return new NextResponse("Too many requests", { status: 429 });
        }
        record.count++;
    } else {
        ipMap.set(ip, { count: 1, timestamp: now });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:function*'],
}
