import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#00954a] py-5">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="logo">
          <img src={""} alt="My Business" />
        </div>
        <nav>
          {/* #d7e23c  #ff9a1f #ff8521 #a4df56  #00954a*/}
          <ul className="flex justify-start gap-5 text-[#d7e23c] uppercase font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
