import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest, res : NextResponse){
   
     const response = NextResponse.next();
     response.cookie("ip", req.ip || "not found ip" , {

          path : "/",
          sameSite : "strict",
          secure: false,
          
         
     });
     return response;
        
}