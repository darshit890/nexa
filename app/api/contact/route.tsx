
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const { name, email, message } = await req.json();


        if (!name) {
            return new NextResponse("name is missing", { status: 401 });
        }
        if (!email) {
            return new NextResponse("email is missing", { status: 401 });
        }
        if (!message) {
            return new NextResponse("message is missing", { status: 401 });
        }

        const job = await db.contact.create({
            data: {
                name,
                email,
                message
            },
        });

        return NextResponse.json(job)

    } catch (error) {
        console.log(`[JOB_POST] : ${error}`)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}