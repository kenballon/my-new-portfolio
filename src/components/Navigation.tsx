import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("scroll-active", window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header className="fixed w-full top-0 z-50 flex justify-between p-[2rem]">
      <div className="logo_wrapper">
        <Link to="/" className={isActive("/")} style={{ fontSize: "1.2rem" }}>
          Kenneth Ballon
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link to="/work" className={isActive("/work")}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
