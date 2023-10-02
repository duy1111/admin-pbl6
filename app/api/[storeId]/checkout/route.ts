import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Script } from "vm";

const corsHeaders = {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type, Authorization",

}

export async function OPTIONS(){
    return NextResponse.json({},{headers:corsHeaders});

}

export async function POST(
    req: Request,
    {params}: {
        params: {
            storeId:string
        }
    }
){
    const {productIds} = await req.json();
    if(!productIds || productIds.length === 0){
        return new NextResponse("Product Ids are required!",{status: 400})
    }

    const products = await prismadb.product.findMany({
        where:{
            id:{
                in: productIds
            }
        }
    })

    // const line_items: Script

    const order = await prismadb.order.create({
        data:{
            storeId: params.storeId,
            isPaid: false,
            orderItems: {
                create: productIds.map((productId : string) => ({
                    product: {
                        connect:{
                            id: productId
                        }
                    }
                }))
            }
        }
    });


    // const session = await stripe.checkout.sessions.create({
    //     line_items,
    //     mode: "payment",
    //     bill
    // })

    return NextResponse.json({url: `${process.env.FRONTEND_STORE_URL}/cart?success=1`},{
        headers: corsHeaders
    })
}