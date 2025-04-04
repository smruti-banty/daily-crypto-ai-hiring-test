import logo from '../assets/booknest.png'

const Header = () => {
    return <header className="bg-neutral-950 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={logo} className="w-20 h-20" alt="Logo"/>
            <p className="text-gray-300 text-xl">Manage your library</p>
        </div>

        <div>
            <button className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
                <i className="bx bx-log-out text-xl"></i>
                Logout
            </button>
        </div>
    </header>
}

export default Header;