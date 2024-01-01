"use client"
import { useFormStatus } from "react-dom";

function SubmitBtn() {
    const { pending,data} = useFormStatus()
    return (
        <div>
            {data && <p className="text-orange-500 text-xl mb-2">Creting bin {data.get("title")}</p>}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={pending}
            >
                {pending ? "submitting..." : "Submit Bin"}
            </button>
        </div>
    )
}

export default SubmitBtn