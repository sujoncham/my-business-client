import { Link } from "react-router-dom";

const Header = () => {
  {
    /* #d7e23c  #ff9a1f #ff8521 #a4df56  #00954a*/
  }
  return (
    <header className="bg-[#00954a] py-5 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="logo">
          <img src={""} alt="My Business" />
        </div>
        <nav>
          <ul className="flex justify-start flex-wrap gap-5 text-[#d7e23c] uppercase font-bold">
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
              <Link to="/galleries">Galleries</Link>
            </li>
            <li>
              <Link to="/applicantList">ApplicantList</Link>
            </li>
            <li>
              <Link to="/careerJob" target="__blank">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
