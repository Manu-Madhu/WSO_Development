import SideBar from '@/components/Admin/SideBar/SideBar'

function Layout({ children }) {
    return (
        <div className='flex'>
            <SideBar />
            <div className='w-full h-fit'>
                {children}
            </div>
        </div>
    )
}

export default Layout
