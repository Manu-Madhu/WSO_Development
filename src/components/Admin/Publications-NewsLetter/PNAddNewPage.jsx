import CancelButton from '../common/CancelButton'
import SaveButton from '../common/SaveButton'
import FileUploadField from './FileUploadField'

function PNAddNewPage({ name }) {
    return (
        <div className="flex flex-col bg-white min-h-screen w-full px-10 pt-12 text-black">
            <h1 className="font-semibold text-title">
                Add {name}
            </h1>
            <div className="flex justify-between mt-2 py-5">
                <div>
                    <h2 className="font-semibold text-xl">
                        New {name.toLowerCase()}
                    </h2>
                    <h5 className="pt-1">
                        Update your {name.toLowerCase()} here
                    </h5>
                </div>
                <div className="flex">
                    <CancelButton />
                    <SaveButton title={`Add this ${name}?`} content={<span>This blog post has been published. Team members <br /> will be able to edit this post and republish changes.</span>} />
                </div>
            </div>
            <div className="border-y py-5 flex items-start">
                <label className="text-base font-semibold w-4/12">
                    Title
                </label>
                <input type="text" className="w-6/12 border border-gray-400 mt-1 px-5 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light" placeholder="Title document" />
            </div>
            <div className=" py-5 flex items-start">
                <div className="flex flex-col w-4/12">
                    <label className="text-base font-semibold">
                        Add pdf
                    </label>
                    <p>
                        This will be diaplayed on your website
                    </p>

                </div>
                <div className="w-6/12">
                    <FileUploadField />
                </div>
            </div>
        </div>
    )
}

export default PNAddNewPage
