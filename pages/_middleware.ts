import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest, res : NextResponse){

    const response = NextResponse.next();
    response.cookie('ip', req.ip || "undefined");

    return response;
}