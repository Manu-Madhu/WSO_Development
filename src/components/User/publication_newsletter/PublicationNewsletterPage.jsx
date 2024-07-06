import { baseUrl, getAllNewsletters, getAllPublications } from "@/utils/Endpoint";
import PublicationNewsletterCard from "./PublicationNewsletterCard"

async function getData(name) {
    try {
        const res = await fetch(`${baseUrl}${name === "Publications" ? getAllPublications : getAllNewsletters}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(res);
        if (!res.ok) {
            const data = await res.json();
            if (name === "Publications") {
                return data.publications;
            } else {
                return data.newsletters;
            }
        }
        return []
    } catch {
        console.error("Error in fetching data");
        return []
    }
}

async function PublicationNewsletterPage({ name }) {
    const data = await getData(name);
    console.log(data);
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <h1 className='text-title max-sm:text-2xl font-semibold my-8'>
                {data}
            </h1>
            <div className='w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-x-4 gap-y-8 max-sm:gap-y-5'>
                {
                    data.map((item, index) => {
                        return (
                            <PublicationNewsletterCard
                                title={item?.title}
                                location={item?.file?.location}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PublicationNewsletterPage
