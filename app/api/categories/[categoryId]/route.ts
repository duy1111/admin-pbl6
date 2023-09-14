import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params } :{params: {categoryId: string }} ) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { name } = body
        if(!userId){
            return new NextResponse('Unauthentiacted', {status:401})
        }
        if(!name){
            return new NextResponse("Name id required", { status: 400 } )
        }
        if(!params.categoryId){
            return new NextResponse("Category id is required", {status:400})
        }
        console.log(name)
        console.log(userId)
        console.log(params.categoryId)
        const category = await prismadb.category.update({
            where: {
                id: params.categoryId,
                userId: userId
            },
            data:{
                name: name
            }
        })

        return NextResponse.json(category);
    } catch(error){
        console.log("[category_PATCH]", error);
        return new NextResponse("Interal error", { status: 500 });
    }
}

export async function DELETE(req: Request, { params } :{params: {categoryId: string }} ) {
    try{
        const { userId } = auth();
        if(!userId){
            return new NextResponse('Unauthentiacted', {status:401})
        }
        if(!params.categoryId){
            return new NextResponse("Store id is required", {status:400})
        }
        const category = await prismadb.category.deleteMany({
            where: {
                id: params.categoryId,
                userId: userId
            }
        })
        return NextResponse.json(category);
    } catch(error){
        console.log("[category_PATCH]", error);
        return new NextResponse("Interal error", { status: 500 });
    }
}