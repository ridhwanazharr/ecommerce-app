export const Navbar = () => {
    return ( 
        <div className="navbar flex px-8 py-4 justify-between">
            <div className="flex gap-2">
                <img src="/vercel.svg" alt="Site Logo" height={40} width={40} />
                <p className="text-2xl">RawingApp</p>
            </div>
            <div className="flex gap-4 items-center">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </div>
     );
};