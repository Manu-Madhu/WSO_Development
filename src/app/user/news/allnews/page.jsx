import NewsCard from '@/components/User/News/NewsCard'
import { baseUrl, getAllNews } from '@/utils/Endpoint'
import { toast } from 'react-toastify'
const getNews = async () => {
    try {
        const res = await fetch(`${baseUrl}${getAllNews}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (res.ok) {
            const data = await res.json()
            return data.news
        } else {
            return []
        }

    } catch (error) {
        return []
    }
}

async function Page() {
    const Newses = await getNews()
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-title py-8 font-semibold'>
                News
            </h1>
            <div className='w-full grid grid-cols-4 gap-x-4 gap-y-6'>
                {
                    Newses.map((news) => (<NewsCard News={news} />))
                }
            </div>
        </div>
    )
}

export default Page
