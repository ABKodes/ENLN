import {FaTelegram} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer bg-secondary p-10 text-[#e8e8e8]">
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-[#e8e8e8]">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn btn-primary absolute right-0 top-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link-hover link">Branding</a>
        <a className="link-hover link">Design</a>
        <a className="link-hover link">Marketing</a>
        <a className="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">Jobs</a>
        <a className="link-hover link">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaTelegram className="w-[24px] h-[24px]"/>
          </a>
          <a>
            <FaLinkedin className="w-[24px] h-[24px]"/>
          </a>
          <a>
            <FaFacebook className="w-[24px] h-[24px]"/>
          </a>
          <a>
            <FaTwitter className="w-[24px] h-[24px]"/>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer