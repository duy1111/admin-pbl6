import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/setting-forms";

interface SettingsPageProps {
    params: {
        categoryId: string;
    }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({params}) => {
    const {userId} = auth()
    const user = await currentUser()
    console.log(user)

    if(!userId){
        redirect("/sign-in")
    }

    const category = await prismadb.category.findFirst({
        where:{
            id: params.categoryId,
            userId
        }
    })

    if(!category){
        redirect("/")
    }
  return (
    <div className="flex flex-col" >
        <div className="flex-1 space-y-4 p-8 pt-6" >
            <SettingsForm initialData={category} />
        </div>
    </div>
  )
}

export default SettingsPage