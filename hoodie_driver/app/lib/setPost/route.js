'use server'
import { NextResponse } from "next/server";
import { addNewPost } from "../firebase/blogAPI";


export async function POST(req) {
    const data = await req.json();

    try {
  
     const response = await addNewPost(data);


      if (response.ok) {
        
        return NextResponse.json(response, { status: 201 });
      } else {
        return NextResponse.json(response, { status: 200 });
      }
    } catch (error) {
      return NextResponse.json({ok:false, message: 'Internal Server Error' }, { status: 500 })
      
    }
  }