import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';
import useWindowSize from '../hooks/useWindowSize';
import { useState, useEffect, useRef } from 'react';

export default function Header() {

    const { width } = useWindowSize();
    const [searchClicked, setSearchClicked] = useState(0)
    const [searchInput, setSearchInput] = useState("")
    const [showMenu, setShowMenu] = useState(true);

    const handleClick = () => {
        setSearchClicked(prev => {
            const newClick = prev + 1;

            if (newClick === 1) setSearchClicked(1);
            else if (newClick === 2) setSearchClicked(2);
            else if (newClick === 3) {
                setSearchClicked(0);
            }

            return newClick;
        });
    };
    const inputRef = useRef(null);
    useEffect(() => {
        if (searchClicked == 1 && inputRef.current) {
            inputRef.current.click();
        }
        else if (searchClicked == 2 && searchInput.length > 0)
            alert(searchInput);
    }, [searchClicked]);

    const colorGreen = '#B4D173';
    return (
        <header className="Header flex ">
            <div onClick={handleClick} className={`${width > 783 || searchClicked == 0 ? "hidden" : ""} z-2 w-full h-full absolute top-0 left-0`} />

            <div className="navbar-container flex items-center gap-x-20 header-container ">
                <img src={logo} alt="Fresh Food Logo" className={`${width < 768 ? 'h-50' : 'h-1'} Logo`} />


                <nav className={`${showMenu?"flex":"hidden"} navs ml-8 space-x-6 `}>
                    <a href="#" className={`text-[${colorGreen}] font-extrabold`}>Home</a>
                    <a href="#">Categories</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <input
                        ref={inputRef}
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);

                        }} type="text"
                        placeholder="Search for product..."
                        className={`${searchClicked == 0 && width < 768 ? "hidden" : ""} z-3 flex-1 input-search px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none`}
                    />

                    <button onClick={handleClick} className={`bg-[#7a9c19] z-3 px-4 ${width < 768 && searchClicked == 0 ? 'searchButtonMobile' : 'searchButton'}  flex items-center justify-center text-white`} >

                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* Shopping cart svg */}
                    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-700">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                            <circle cx="9" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                        </svg>
                    </div>

                    {/* The person SVG */}
                    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-700">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                    </div>
                    <button onClick={()=>setShowMenu((prev)=>!prev)} className="text-gray-800 md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="black"
                            viewBox="0 0 24 24"
                        >
                            <rect x="3" y="6" width="18" height="2" rx="1" />
                            <rect x="3" y="11" width="18" height="2" rx="1" />
                            <rect x="3" y="16" width="18" height="2" rx="1" />
                        </svg>
                    </button>

                </div>
            </div>

        </header>
    );
}
