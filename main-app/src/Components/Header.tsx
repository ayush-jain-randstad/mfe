import { Link } from "react-router-dom";

function Header() {

    const navItems = [
        {
          name: "Home",
          slug: "/",
        },
        {
          name: "Product List",
          slug: "/product-list",
        },
        {
            name: "SearchBar",
            slug: "/search-bar",
        },
      ];

    return (
        <div>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
                    <div className="flex lg:flex-1"></div>                    
                    <div className="hidden lg:flex lg:gap-x-12">
                    {navItems.map((item, index) => (
                        <Link to={item.slug} className="text-sm/6 font-semibold text-gray-900" key={index}>{item.name}</Link>
                        
                    ))}
                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">Products</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Register</a> */}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    
                    </div>
                </nav>
            </header>
        </div>
    )


}

export default Header