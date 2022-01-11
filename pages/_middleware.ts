import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {

    let response = NextResponse.next();

    const {nextUrl: url, geo} = req

    const country = geo.country || "sin definir";


    console.log('el pais es '+ country);

    return response;



}