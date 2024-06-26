
import Calendar from '@/components/Admin/Events/Calendar'
import Link from 'next/link'
function Page() {
    return (
        <div className='flex flex-col bg-white min-h-screen w-full px-10 pt-12 mb-20 text-black'>
            <h1 className="font-semibold text-title">
                Events
            </h1>
            <div className='w-full overflow-clip mt-5'>
                <div className='flex py-5 items-center justify-between'>
                    <div>
                        <h2 className="font-semibold text-xl">
                            Current Events
                        </h2>
                        <h5 className="pt-1">
                            Events are managed here
                        </h5>
                    </div>
                    <Link href="/pages/admin/events/addevent">
                        <button className="bg-primary-green px-5 h-fit py-3 ml-4 text-white text-base font-semibold rounded-lg">
                            Add event
                        </button>
                    </Link>
                </div>
                <Calendar />
            </div>
        </div>
    )
}

export default Page
