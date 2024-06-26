import { FiEdit2, FiUploadCloud } from "react-icons/fi";
import Link from 'next/link'
import { CiImageOn } from "react-icons/ci";
import DeleteButton from "../News/DeleteButton";

function PNMainPage({ name }) {
    return (
        <div className='flex flex-col bg-white min-h-screen w-full px-10 py-12 text-black'>
            <h1 className="font-semibold text-title">
                {name}
            </h1>
            <div className='w-full border border-gray-400 rounded-xl overflow-clip mt-5'>
                <div className='flex p-6  items-center justify-between'>
                    <div>
                        <h2 className="font-semibold text-xl">
                            Uploaded {name.toLowerCase()}
                        </h2>
                    </div>
                    <Link href={`/pages/admin/${name.toLowerCase()}/add${name.toLowerCase()}`}>
                        <button className="bg-primary-green flex items-center gap-2 px-5 h-fit py-3 ml-4 text-white text-base font-semibold rounded-lg">
                            <FiUploadCloud size={23} strokeWidth={2} />
                            <h4>Upload</h4>
                        </button>
                    </Link>
                </div>
                <table className='w-full text-base table'>
                    <thead className="text-sm" c>
                        <tr>
                            <th className='w-[55%] px-6 py-3 font-normal text-start'>
                                File name
                            </th>
                            <th className='px-6 py-3 w-[15%] font-normal clamp'>
                                File size
                            </th>
                            <th className='px-8 py-3 w-[15%] font-normal'>
                                Date uploaded
                            </th>
                            <th className='px-8 py-3 w-[15%] font-normal'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: 15 }).map((_, index) => (
                                <tr className="border-t border-gray-400" key={index} style={{ backgroundColor: (index + 1) % 2 === 0 ? '#f4f6f7' : 'transparent' }}>
                                    <td className='px-6 py-4 flex items-center'>
                                        <div className="bg-[#F4EBFF] p-3 rounded-full">
                                            <CiImageOn size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base ml-4">
                                                File name
                                            </h4>
                                            <h5 className="text-sm ml-4">
                                                16 MB
                                            </h5>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-center'>
                                        1.2 MB
                                    </td>
                                    <td className='px-8 py-4 text-center'>
                                        12/12/2021
                                    </td>
                                    <td className='flex w-full justify-evenly px-8 py-6'>
                                        <DeleteButton name={name} />
                                        <button >
                                            <Link href={{ pathname: `/pages/admin/${name}/add${name}` }}>
                                                <FiEdit2 size={20} />
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PNMainPage
