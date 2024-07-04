import PublicationNewsletterCard from "./PublicationNewsletterCard"

function PublicationNewsletterPage({ name }) {
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <h1 className='text-title max-sm:text-2xl font-semibold my-8'>
                {name}
            </h1>
            <div className='w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-x-4 gap-y-8 max-sm:gap-y-5'>
                <PublicationNewsletterCard title={`${name} file name here`} />
            </div>
        </div>
    )
}

export default PublicationNewsletterPage
