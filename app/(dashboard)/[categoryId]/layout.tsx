import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
    children,
    params
}:{
    children: React.ReactNode;
    params: {categoryId: string}
}){
    const {userId} = auth() ;
    if(!userId){
        redirect('/sign-in');
    }

    const categories = await prismadb.category.findFirst({
        where:{
            id: params.categoryId,
            userId : userId , 
        }
    })

    if(!categories){
        redirect('/')
    }

    return (
        <>
            
            <Navbar/>
            {children}
        </>
    )
}