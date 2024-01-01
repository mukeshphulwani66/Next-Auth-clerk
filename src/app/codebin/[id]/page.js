import { notFound } from "next/navigation"
import { prisma } from "../../../../prisma/client"
import { TrashIcon } from '@heroicons/react/24/outline'
import { deleteBinAction } from "@/app/actions"

async function CodeBinView(props) {
  const bin = await prisma.codeBin.findFirst({
    where: { id: parseInt(props.params.id) }
  })

  if (!bin) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mx-2">
        <h2 className="text-2xl font-bold mb-4">{bin.title}</h2>
        <form
        action={deleteBinAction.bind(null,bin.id)}
        >
          <button
            type="submit"
            className="hover:cursor-pointer">
            <TrashIcon
              className="h-6 w-6 text-rose-600"
            />
          </button>
        </form>
      </div>
      <pre className="bg-gray-200 p-4 rounded-md overflow-auto">{bin.code}</pre>
    </div>
  )
}

export default CodeBinView
