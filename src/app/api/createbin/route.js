import { prisma } from "../../../../prisma/client"


export async function POST(req,res){
    try{
        const body = await req.json()
        if(!body.title || !body.code){
           return Response.json({message:"please add title and code"},{status:422})
        }
        const savedcodeBin = await prisma.codeBin.create({
            data: {
                title:body.title,
                code:body.code
            }
        })
      return Response.json({message:savedcodeBin},{status:201})
    }catch(err){
        console.log("ERROR:",err)
        return Response.json({error:"Internal server error"},{status:500})
    }

}