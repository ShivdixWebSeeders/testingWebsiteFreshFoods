import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';
export default function Header() {
    const colorGreen = '#B4D173';
  return (
    <header className="Header flex ">
      <div className="flex items-center gap-x-20 header-container">
        <img src={logo} alt="Fresh Food Logo" className="h-1 Logo" />
        <nav className="ml-8 space-x-6 ">
          <a href="#" className={`text-[${colorGreen}] font-extrabold`}>Home</a>
          <a href="#">Categories</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
        </nav>      
      <div className="flex items-center space-x-4">
      <input 
    type="text" 
    placeholder="Search for product..." 
    class="flex-1 input-search px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
  />

  <button class="bg-[#7a9c19] px-4 searchButton flex items-center justify-center text-white">
    {/* <!-- Search Icon (Heroicons or any) --> */}
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

      </div></div>
      
    </header>
  );
}
