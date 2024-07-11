'use client';
import { baseUrl, getAllNewsletters, getAllPublications } from "@/utils/Endpoint";
import PublicationNewsletterCard from "./PublicationNewsletterCard"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import Loader from "@/app/loading";
import LoginPage from "@/components/Common/Login";
import UserLogin from "@/components/Common/UserLogin";

function PublicationNewsletterPage({ name }) {
    const { data: session, status } = useSession();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function getData(name, token) {
        try {
            setLoading(true)

            const res = await fetch(`${baseUrl}${name === "Publications" ? getAllPublications : getAllNewsletters}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            if (res.status === 200) {
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

        (
            (status === "authenticated")
                ?
                (
                    loading
                        ?
                        <div className="fixed h-screen w-screen inset-0 ">
                            <Loader />
                        </div>
                        :
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
                :
                <div className='w-full grid place-items-center my-16 '>
                    <p className="text-primaryColor px-4 text-sm sm:text-base">The content on this page is available exclusively to World Spice Organisation members.</p>
                    <UserLogin />
                </div>

        )
    )
}

export default PublicationNewsletterPage
