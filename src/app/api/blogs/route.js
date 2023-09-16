import { blogsdata } from "@/utils/db";
import { NextResponse } from "next/server";


export  function GET(){
    
   
  
 

    return new NextResponse(JSON.stringify(blogsdata),{
      status: 200,
     

    });
    
}