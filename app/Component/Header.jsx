import {   useContext, useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { UserSearch } from "../UseContext/UserSearch";
import { UseCart } from "../UseContext/cartCount";



export function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const context=useContext(UseCart);
    const {search,setSearch}=useContext(UserSearch)
    const {carts,setCarts}=context;
    // console.log(context)
    console.log(search)
    const toggleMenu = () => setIsOpen(!isOpen);
    return(
        <>
        <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={'/'} className="text-xl font-bold text-blue-600">🎬 MovieZone</Link>
        <input type="text"
  placeholder="Search..."
  className="placeholder-slate-950 border-black"  value={search} onChange={e=>setSearch(e.target.value)}/>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart<sup>{carts.length}</sup></Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/genre" className="hover:text-blue-600">Genres</Link>
          <Link to="/feedback" className="hover:text-blue-600">FeedBack</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/cart" className="block hover:text-blue-600">Cart <sup>{carts.length}</sup></Link>
          <Link to="/about" className="block hover:text-blue-600">About</Link>
          <Link to="/genre" className="block hover:text-blue-600">Genres</Link>
          <Link to="/feedback" className="block hover:text-blue-600">FeedBack</Link>
        </div>
      )}
    </header>
   
        </>
    )
}