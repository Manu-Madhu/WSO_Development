
import NewsArea from "@/components/Admin/News/NewsArea";
import SaveButton from "@/components/Admin/common/SaveButton";
import CancelButton from "@/components/Admin/common/CancelButton";

function Page() {
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
                        Update your event here
                    </h5>
                </div>
                <div className="flex max-sm:hidden">
                    <CancelButton />
                    <SaveButton title="Add this event?" content={<span>This blog post has been published. Team members <br /> will be able to edit this post and republish changes.</span>} />
                </div>
            </div>
            <div className="border-y py-5 flex max-md:flex-col items-start">
                <label className="text-base font-semibold w-1/4 max-md:w-full">
                    Event name
                </label>
                <input type="text" className="w-7/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" placeholder="Some title here" />
            </div>
            <div className=" py-5 flex max-md:flex-col items-start">
                <label className="text-base font-semibold w-1/4 max-md:w-full">
                    Date
                </label>
                <input type="date" className="w-7/12 max-md:w-full border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" />
            </div>
            <div className="flex mt-6 sm:hidden">
                <CancelButton />
                <SaveButton title="Add this event?" content={<span>This blog post has been published. Team members <br /> will be able to edit this post and republish changes.</span>} />
            </div>
        </div>
    )
}

export default Page
