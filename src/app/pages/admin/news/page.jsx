import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Link from 'next/link'
import DeleteButton from "@/components/Admin/News/DeleteButton";

function Page() {
    return (
        <div className='flex flex-col bg-white min-h-screen w-full px-10 pt-12 text-black'>
            <h1 className="font-semibold text-title">
                News
            </h1>
            <div className='w-full border border-gray-400 rounded-xl overflow-clip mt-5'>
                <div className='flex p-5 items-center justify-between'>
                    <div>
                        <h2 className="font-semibold text-xl">
                            Current news
                        </h2>
                        <h5 className="pt-1">
                            News are managed here
                        </h5>
                    </div>
                    <Link href="/pages/admin/news/addnews">
                        <button className="bg-primary-green px-5 h-fit py-3 ml-4 text-white text-base font-semibold rounded-lg">
                            Add news
                        </button>
                    </Link>
                </div>
                <table className='w-full text-base table'>
                    <thead className="bg-[#f4f6f7]" c>
                        <tr>
                            <th className='px-5 py-3 font-normal'>
                                No
                            </th>
                            <th className='w-full px-5 py-3 font-normal text-start'>
                                News
                            </th>
                            <th className='px-8 py-3 font-normal'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-5 py-6'>
                                1
                            </td>
                            <td className='px-5 py-6'>
                                News 1
                            </td>
                            <td className='flex w-full justify-around px-5 py-6'>
                                <DeleteButton />
                                <button >
                                    <Link href={{ pathname: '/pages/admin/news/addnews' }}>
                                        <FiEdit2 size={20} />
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
