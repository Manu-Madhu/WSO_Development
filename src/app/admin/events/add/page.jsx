'use client'
import SaveButton from "@/components/Admin/common/SaveButton";
import CancelButton from "@/components/Admin/common/CancelButton";
import FileUploadField from "@/components/Common/FileUploadField";
import { useState } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { adminEventRoute } from "@/utils/Endpoint";
import { toast } from "react-toastify";

function Page() {

    const [data, setData] = useState({
        title: "",
        date: '',
        description: "",
        thumbnail: null,
        document: null,
    })

    const axiosPrivate = useAxiosPrivate();

    const changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async () => {
        try {
            const formData = new FormData();
            formData.append("title", data?.title)
            formData.append("date", data?.date)
            formData.append("description", data?.description);
            formData.append("thumbnail", data?.thumbnail);
            formData.append("document", data?.document);

            const response = await axiosPrivate.post(adminEventRoute, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            if (response.status === 200) {
                toast.success("Data Added")
                setData({
                    title: "",
                    date: '',
                    description: "",
                    thumbnail: null,
                    document: null,
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to submit")
        }
    }

    console.log({ data })


    return (
        <div className="flex flex-col bg-white min-h-screen w-full px-10 max-md:px-5 pt-12 max-md:pt-20 text-black">
            <h1 className="font-semibold text-title">
                Add event
            </h1>
            <div className="flex  justify-between mt-2 py-5 max-md:py-3">
                <div>
                    <h2 className="font-semibold text-xl">
                        New Event
                    </h2>
                    <h5 className="pt-1">
                        Add your event here
                    </h5>
                </div>
                <div className="flex max-sm:hidden">
                    <CancelButton />
                    <SaveButton 
                    submitHandler={submitHandler}
                    title="Add this event?" content={`Click Confirm to save this event`} />
                </div>
            </div>
            <div className="border-y py-5 flex max-md:flex-col items-start">
                <label className="text-base font-semibold w-1/4 max-md:w-full">
                    Event title
                </label>
                <input type="text" name="title"
                value={data?.title}
                onChange={changeHandler}
                    className="w-7/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" placeholder="Some title here" />
            </div>
            <div className=" py-5 flex max-md:flex-col items-start">
                <label className="text-base font-semibold w-1/4 max-md:w-full">
                    Event date
                </label>
                <input type="date" name="date"
                value={data?.date}
                onChange={changeHandler}
                    className="w-7/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" />
            </div>

            <div className="border-b py-5 flex max-md:flex-col items-start">
                <div className="flex flex-col  w-1/4 max-md:w-full max-md:pb-3">
                    <label className="text-base font-semibold">
                        Description
                    </label>
                    <p>
                        Write the description
                    </p>
                </div>
                <textarea
                    name='description'
                    value={data?.description}
                    onChange={changeHandler}
                    className="w-7/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light"
                    placeholder='Enter description'
                    rows="4"
                />
            </div>

            <div className=" py-5 flex items-start max-md:flex-col max-md:gap-y-2">
                <div className="flex flex-col w-4/12 max-md:w-full">
                    <label className="text-base font-semibold">
                        Add thumbnail
                    </label>
                    <p>
                        This will be diaplayed on your website
                    </p>

                </div>
                <div className="w-6/12 max-md:w-full">
                    <FileUploadField file={data?.thumbnail} setFile={(elem) => setData((prev) => ({ ...prev, thumbnail: elem }))} />
                </div>
            </div>

            <div className=" py-5 flex items-start max-md:flex-col max-md:gap-y-2">
                <div className="flex flex-col w-4/12 max-md:w-full">
                    <label className="text-base font-semibold">
                        Add document
                    </label>
                    <p>
                        This will be diaplayed on your website
                    </p>

                </div>
                <div className="w-6/12 max-md:w-full">
                    <FileUploadField file={data?.document} setFile={(elem) => setData((prev) => ({ ...prev, document: elem }))} />
                </div>
            </div>

            <div className="flex mt-6 sm:hidden">
                <CancelButton />
                <SaveButton 
                submitHandler={submitHandler}
                title="Add this event?" content={`Click Confirm to save this event`} />
            </div>
        </div>
    )
}

export default Page
