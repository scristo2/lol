import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest, res : NextResponse){
   
     const response = NextResponse.next();
     response.cookie("ip", req.ip || "undefined", {

          path : "/",
          maxAge : 3600,
          httpOnly : true,
          sameSite : "strict",
          domain : "leagueoflegendspremium.com"
     });
     return response;
        
}