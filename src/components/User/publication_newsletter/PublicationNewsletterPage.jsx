'use client';
import { baseUrl, getAllNewsletters, getAllPublications } from "@/utils/Endpoint";
import PublicationNewsletterCard from "./PublicationNewsletterCard"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import Loader from "@/app/loading";

function PublicationNewsletterPage({ name }) {
    const { data: session, status } = useSession();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData(name, token) {
        try {
            const res = await fetch(`${baseUrl}${name === "Publications" ? getAllPublications : getAllNewsletters}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            if (res.ok) {
                const data = await res.json();
                if (name === "Publications") {
                    setData(data.publication);
                } else {
                    setData(data.newsletter);
                }
            }

        } catch {
            console.error("Error in fetching data");
        }
        setLoading(false)
    }

    useEffect(() => {
        if (status === "authenticated") {
            getData(name, session?.user?.accessToken);
        }
    }, [status])

    return (
        loading ?
            <div className="fixed h-screen w-screen inset-0 ">
                <Loader />
            </div> :
            <div className='w-11/12 mx-auto mb-16'>
                <h1 className='text-title max-sm:text-2xl font-semibold my-8'>
                    {name}
                </h1>
                <div className='w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-x-4 gap-y-8 max-sm:gap-y-5'>
                    {
                        data?.map((item, index) => {
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
