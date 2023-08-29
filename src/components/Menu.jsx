const Menu = () => {
  return (
    <div className="bg-[#2a9b39] px-2 md:px-0 py-3 w-full space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 absolute top-16 z-30 left-0">
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-[#a4df56] focus:outline-none focus:text-white focus:bg-[#ff8521]"
      >
        Home
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#ff8521] focus:outline-none focus:text-white focus:bg-[#ff8521]"
      >
        Features
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#ff8521] focus:outline-none focus:text-white focus:bg-[#ff8521]"
      >
        Pricing
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#ff8521] focus:outline-none focus:text-white focus:bg-[#ff8521]"
      >
        Contact
      </a>
    </div>
  );
};

export default Menu;
