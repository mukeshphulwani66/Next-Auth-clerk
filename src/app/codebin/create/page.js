"use client"
import CodeEditorArea from "@/components/CodeEditorArea"
import { useState } from "react"

function CreateCodeSanp() {
    const [formData,setFormData] = useState({title:"",code:""})

   async function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
       const res = await fetch("/api/createbin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
      const result = res.json()
      console.log("RESULT:",result) 
    }

    function handleChange(e){
        setFormData(prevForm=>{
            return {
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    
    return (
        <div className="w-full max-w-screen-md mt-10 mx-auto">
            <form 
             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
             onSubmit={handleSubmit} 
             >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Title
                    </label>
                    <input
                        className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Code
                    </label>
                    <CodeEditorArea  
                       placeholder="Write code here"
                       name="code" 
                       onChange={handleChange}
                       value={formData.code}
                   />
                   
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCodeSanp