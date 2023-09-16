import { blogsdata } from "@/utils/db";
import { NextResponse } from "next/server";


export function GET(req, content) {
  // Method to fetch the single blog data by using the title of the blog
  const userData = blogsdata.filter((item) => item.title === content.params.title);

  if (userData.length === 0) {
    const response = {
      result: "No Result found",
      success: false,
    };
    return new NextResponse(JSON.stringify(response), {
      status: 200,
     
    });
  } else {
    const response = {
      ...userData[0],
      success: true,
    };
    return new NextResponse(JSON.stringify(response), {
      status: 200,
     
    });
  }
}





