// this is nothing but some sort of middleware

import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request:NextRequest){
    const session =await getSession()

    const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard")

    if(!session?.user){
        return NextResponse.redirect(new URL("/sign-in",request.url))

    }

    const isSignPage = request.nextUrl.pathname.startsWith("/sign-in")
    const isSignUpPage  = request.nextUrl.pathname.startsWith("/sign-up")

    return NextResponse.next()
    

}