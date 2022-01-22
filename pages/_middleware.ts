import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest, res : NextResponse){
   
     const response = NextResponse.next();

     response.cookie("ip", req.ip.toString(), {

         path : "/",
         maxAge: 1000 * 60 * 60 * 24 * 7,
         httpOnly : true,
         sameSite : "none",
         domain : "leagueoflegendspremium.com",
         secure : true
     });

     return response;
        
}