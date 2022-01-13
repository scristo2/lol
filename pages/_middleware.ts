import { NextResponse, NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest, res: NextResponse) {

    let response = NextResponse.next();
    
    console.log(request.nextUrl.pathname);

    return response;



}