function LoginModal() {
    return (
        <div className="fixed w-[376px] bg-white right-6 p-12 rounded-lg flex flex-col text-black text-sm items-start">
            <label htmlFor="" className="mb-2">Username</label>
            <input type="text" className="mb-4 p-2 border border-gray-500 rounded w-full" placeholder="Username" />

            <label htmlFor="password" className="mb-2">Password</label>
            <input type="password" className="mb-4 p-2 border border-gray-500 rounded w-full" placeholder="Password" />

            <button className="w-full bg-primary-green text-white rounded-md py-3">
                Sign in
            </button>
            <p className="mt-6 text-center w-full">
                Dont't have an account? <a href="#" className="text-primary-green font-semibold">Sign up</a>
            </p>
        </div>
    )
}

export default LoginModal
