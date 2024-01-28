"use server"

import { redirect } from "next/navigation"
import { prisma } from "../../prisma/client"
import { currentUser } from "@clerk/nextjs";

export async function handleSubmitAction(currentState, formData) {
    try {
        const user = await currentUser();
        const title = formData.get("title")
        const code = formData.get("code")

        if (!user) throw new Error("you must be signed in to create an bin");
        if (!title || !code) {
            return {
                message: "Title and Code are required"
            }
        }
        const savedcodeBin = await prisma.codeBin.create({
            data: {
                title: title,
                code: code,
                userId:user.id
            }
        })
        console.log(savedcodeBin)
      
    }catch(err){
        console.log(err)
        return {
            message: err.message || "something went wrong!"
        }
    }

    redirect('/')
 

}
export async function deleteBinAction(id) {
    await prisma.codeBin.delete({
        where: {
            id: parseInt(id)
        }
    })

    redirect('/')

}