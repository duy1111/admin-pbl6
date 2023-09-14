import prismadb from "@/lib/prismadb";

interface DashboardPageProps{
    params: {categoryId: string}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => { 
    const category = await prismadb.category.findFirst({
        where:{
            id: params.categoryId
        }
    })
    return ( 
        <div>
            Active Category: {category?.name}
        </div>
     );
}
 
export default DashboardPage;