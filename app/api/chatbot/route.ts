import { NextResponse } from "next/server"

export async function POST(req:Request){
    console.log("wow")
    return NextResponse.json({message:"wow"})
}