
import NewsArea from "@/components/Admin/News/NewsArea";

function Page() {
    return (
        <div className="flex flex-col bg-white min-h-screen w-full px-10 pt-12 text-black">
            <h1 className="font-semibold text-title">
                Add news
            </h1>
            <div className="flex justify-between mt-2 py-5">
                <div>
                    <h2 className="font-semibold text-xl">
                        New news
                    </h2>
                    <h5 className="pt-1">
                        Update your news here
                    </h5>
                </div>
                <div className="flex">
                    <button className="border border-gray-500 px-5 h-fit py-3 text-base font-semibold rounded-lg">
                        Cancel
                    </button>
                    <button className="bg-primary-green px-5 h-fit py-3 ml-4 text-white text-base font-semibold rounded-lg">
                        Save
                    </button>
                </div>
            </div>
            <div className="border-y py-5 flex items-start">
                <label className="text-base font-semibold w-1/4">
                    Title
                </label>
                <input type="text" className="w-1/2 border border-gray-500 mt-1 px-3 py-2 rounded-lg placeholder:text-gray-900" placeholder="Some title here" />
            </div>
            <div className=" py-5 flex items-start">
                <div className="flex flex-col  w-1/4">
                    <label className="text-base font-semibold">
                        News
                    </label>
                    <p>
                        Write the news
                    </p>
                </div>
                <NewsArea />
            </div>
        </div>
    )
}

export default Page
