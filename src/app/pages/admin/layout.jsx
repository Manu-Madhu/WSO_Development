import SideBar from '@/components/Admin/SideBar/SideBar'

function Layout({ children }) {
    return (
        <div className='flex fixed w-full h-screen bg-white'>
            <SideBar />
            <div className='w-full overflow-y-scroll'>
                <div className='h-fit'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
