import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req : NextRequest){

    const res = NextResponse.next();
    res.cookie('ip', req.ip);
    return res;
}