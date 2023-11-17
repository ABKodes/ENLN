import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/program",
      label: "Program",
    },
    {
      path: "/news-and-events",
      label: "News and Events",
      subRoutes: [
        {
          path: "/news",
          label: "News",
        },
        {
          path: "/events",
          label: "Events",
        },
        {
          path: "/annual-forum",
          label: "Annual Forum",
        },
      ],
    },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/resources",
      label: "Resources",
      subRoutes: [
        {
          path: "/publication",
          label: "Publication",
        },
        {
          path: "/training-material",
          label: "Training Material",
        },
        {
          path: "/leadership-material",
          label: "Leadership Material",
        },
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-10 z-20 bg-[#e8e8e8]">
      <div className="navbar mx-auto w-10/12">
        <div className="navbar-start">
          <img src={Logo} alt="logo" className="h-[23%] w-[23%]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((item, index) => (
              <li key={index}>
                {item.subRoutes ? (
                  <details>
                    <summary>
                      <Link to={item.path}>{item.label}</Link>
                    </summary>
                    <ul className="p-2">
                      {item.subRoutes.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.path}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="#" className="btn btn-primary btn-md text-center">
            Join Us
          </Link>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
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
              {routes.map((item, index) => (
                <li key={index}>
                  {item.subRoutes ? (
                    <details>
                      <summary>
                        <Link to={item.path}>{item.label}</Link>
                      </summary>
                      <ul className="p-2">
                        {item.subRoutes.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
