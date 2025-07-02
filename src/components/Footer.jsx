import logo from '../assets/images/logo.png';

export default function Footer() {
    return (
        <footer className="bg-[#B4D173] py-8 mt-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <img src={logo} alt="Fresh Food Logo" className="h-20 mb-2" />
                    <div className="font-bold text-3xl">Fresh Food</div>
                    <div className="text-2xl text-gray-600">www.freshfood.com</div>
                    <div className="text-2xl text-gray-600">help@freshfood.com</div>
                    <div className="text-2xl text-gray-600">+8801234567890</div>
                </div>
                <div>
                    <div className=" mb-2 text-3xl">Fresh Food Pages</div>
                    <ul className="text-2xl text-gray-700 space-y-1">
                    <a href='#'>  <li className='text-2xl '>Home</li> </a>
                    <a href='#'>   <li className='text-2xl '>Categories</li> </a>
                    <a href='#'>   <li className='text-2xl '>Blog</li> </a>
                    <a href='#'>   <li className='text-2xl '>Terms And Conditions</li> </a>
                    <a href='#'>   <li className='text-2xl '>Privacy Policy</li> </a>
                    <a href='#'>   <li className='text-2xl '>Return Policy</li> </a>
                    <a href='#'>   <li className='text-2xl '>About us</li> </a>
                    </ul>
                </div>
                <div>
                    <div className="font-bold mb-2 text-3xl">Follow us on</div>
                    <div className="flex flex-col gap-2 mb-2">
                        <div className='text-2xl flex gap-x-3'>
                            <a href="#" className=" bg-black  p-2 rounded-full">
                                <svg fill="#B4D173" viewBox="0 0 24 24" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.483v-9.294H9.692V11.01h3.116V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.099 2.798.143v3.243h-1.92c-1.506 0-1.797.716-1.797 1.765v2.317h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a> 
                                <span className='text-gray-700'>{" "}Facebook</span>
                        </div>
                        <div className='text-2xl flex gap-x-3'>

                            <a href="#" className="bg-black p-2 rounded-full ">
                                <svg fill="#B4D173" viewBox="0 0 24 24" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.204-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.631 1.953 2.445 3.376 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.17-.069 2.179 1.396 4.768 2.212 7.548 2.212 9.055 0 14-7.496 14-13.986 0-.21 0-.423-.016-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                            </svg>
                            </a>
                            <span className='text-gray-700'>{" "}Twitter</span>
                        </div>

                        <div className='text-2xl flex gap-x-3'>


                            <a href="#" className=" bg-black  p-2 rounded-full">
                                <svg fill="#B4D173" viewBox="0 0 24 24" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.72.129 4.52.443 3.533 1.43 2.546 2.417 2.232 3.617 2.173 4.948.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.059 1.331.373 2.531 1.36 3.518.987.987 2.187 1.301 3.518 1.36 1.28.059 1.689.07 4.948.07s3.668-.012 4.948-.07c1.331-.059 2.531-.373 3.518-1.36.987-.987 1.301-2.187 1.36-3.518.059-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.059-1.331-.373-2.531-1.36-3.518-.987-.987-2.187-1.301-3.518-1.36C15.668.012 15.259 0 12 0z" />
                                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                            </a>
                            <span className='text-gray-700'>{" "}Instagram</span>
                            </div>
                    </div>
                    <div className="flex gap-2">
                        <img src={require("../assets/images/appstore.png")} alt="App Store" className="h-8" />
                        <img src={require("../assets/images/Playstore.png")} alt="Play Store" className="h-8" />
                    </div>
                </div>
            </div>
            <div className="text-center text-2xl   mt-6">
                © 2002 - 2022 Fresh Food, LLC. All Rights Reserved.
            </div>
        </footer>
    );
}
