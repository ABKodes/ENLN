import Logo from '../assets/logo.png'

function Header() {
  return (
    <div className="sticky top-0 z-10 bg-[#EBE3D5]">
      <div className="st navbar mx-auto w-10/12">
        <div className="navbar-start">
          <img src={Logo} alt="logo" className="h-1/12 w-1/12" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Program</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>News and Events</summary>
                <ul className="p-2">
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Annual Forum</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <a>Publication</a>
                  </li>
                  <li>
                    <a>Training Material</a>
                  </li>
                  <li>
                    <a>Leadership Material</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Program</a>
              </li>
              <li>
                <a>News and Events</a>
                <ul className="p-2">
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Annual Forum</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Resources</a>
                <ul className="p-2">
                  <li>
                    <a>Publication</a>
                  </li>
                  <li>
                    <a>Training Material</a>
                  </li>
                  <li>
                    <a>Leadership Material</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a className="btn">Join Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
