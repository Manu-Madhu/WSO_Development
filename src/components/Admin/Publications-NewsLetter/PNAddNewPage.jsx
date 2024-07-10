"use client"
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import CancelButton from '../common/CancelButton'
import SaveButton from '../common/SaveButton'
import FileUploadField from "@/components/Common/FileUploadField";
import { useState } from 'react';
import { adminNewsletterRoute, adminPublicationRoute } from '@/utils/Endpoint';
import { toast } from 'react-toastify';

function PNAddNewPage({ name }) {

    const [data,setData] = useState({
        title:"",
        file: null,
    })

    const axiosPrivate = useAxiosPrivate();

    const changeHandler = (e)=>{
        setData((prev)=> ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const submitHandler = async()=>{
        try {
            const formData = new FormData();
            formData.append("title", data?.title)
            formData.append("file", data?.file);

            const postRoute = (name === "publication") ? adminPublicationRoute : adminNewsletterRoute;
           
            const response = await axiosPrivate.post(postRoute, formData,
                {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
            )

            if(response.status === 200){
                toast.success("Data Added")
                setData({
                    title:"",
                   file:null,
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to submit")
        }
    }

    console.log({data})
    return (
        <div className="flex flex-col bg-white min-h-screen w-full px-10 max-md:px-6 pt-12 max-md:pt-16 text-black">
            <h1 className="font-semibold text-title capitalize">
                Add {name}
            </h1>
            <div className="flex justify-between mt-2 py-5">
                <div>
                    <h2 className="font-semibold text-xl">
                        New {name}
                    </h2>
                    <h5 className="pt-1">
                        Update your {name} here
                    </h5>
                </div>
                <div className="flex max-sm:hidden">
                    <CancelButton />
                    <SaveButton 
                    submitHandler={submitHandler}
                    title={`Add this ${name}?`} content={<span>This post has been published. Team members <br /> will be able to edit this post and republish changes.</span>} />
                </div>
            </div>
            <div className="border-y py-5 flex items-start max-md:flex-col">
                <label className="text-base font-semibold w-4/12 max-md:w-full">
                    Title
                </label>
                <input 
                 name="title"
                 value={data?.title}
                 onChange={changeHandler}
                type="text" 
                className="w-6/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" placeholder="Title document" />
            </div>
            <div className=" py-5 flex items-start max-md:flex-col max-md:gap-y-2">
                <div className="flex flex-col w-4/12 max-md:w-full">
                    <label className="text-base font-semibold">
                        Add pdf
                    </label>
                    <p>
                        This will be diaplayed on your website
                    </p>

                </div>
                <div className="w-6/12 max-md:w-full">
                    <FileUploadField file={data?.file} setFile={(el)=> setData((prev)=> ({...prev, file: el}))} />
                </div>
            </div>
            <div className="flex sm:hidden mt-3">
                <CancelButton />
                <SaveButton 
                submitHandler={submitHandler}
                title={`Add this ${name}?`} content={<span>This post has been published. Team members <br /> will be able to edit this post and republish changes.</span>} />
            </div>
        </div>
    )
}

export default PNAddNewPage
