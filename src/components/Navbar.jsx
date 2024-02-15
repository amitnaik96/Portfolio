import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar p-4 flex justify-center space-x-6 w-1/2 mx-auto color-white">
            <h1 className="font-bold hover:text-gray-200 color-yellow">AN</h1>
            <div className="links flex space-x-4">
                <Link to='/' className="hover:text-yellow-200">Home</Link>
                <Link to='/projects' className="hover:text-yellow-200">Projects</Link>
                <Link to='/contact' className="hover:text-yellow-200">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;