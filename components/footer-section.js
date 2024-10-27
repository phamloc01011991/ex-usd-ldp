import Image from "next/image";
import ScrollToButtonButton from "./scroll-to-top-button";
import Link from "next/link";

import logo from "../public/logoFooter.png";
export default function FooterSection({ mainMenu }) {
  const links = mainMenu.map((link) => ({
    ...link,
  }));
  const showChat = () => {
    _MEIQIA("showPanel");
  };
  return (
    <>
      <footer className="footer pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
              <div className="footer-widget">
                <div className="logo">
                  <Link
                    href="/"
                    className="navbar-brand"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={logo}
                      alt="logo"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
                <p className="desc">
                Embark on your crypto journey today.
                </p>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 offset-xl-1">
              <div className="footer-widget">
                <h3>About us</h3>
                <ul className="links">
                  {links.map((navLink) => (
                    <li key={navLink.url}>
                      <Link href={navLink.url}>{navLink.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 offset-xl-1">
              <div className="footer-widget">
                <h3>Support</h3>
                <ul className="links">
                  {[
                    { onClick: showChat, label: "Customer support" },
                    { url: "/policy", label: "Privacy policy" },
                    { url: "/policy", label: "Terms of use" },
                  ].map((navLink) => (
                    <li key={navLink.url}>
                      {navLink?.onClick ? (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={navLink.onClick}
                        >
                          {navLink.label}
                        </div>
                      ) : (
                        <Link href={navLink.url}>{navLink.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3>Connect</h3>
                <div class="text-block-14">
                  <strong class="bold-text-3">
                  JOINT STOCK COMPANY <br />
                    EXNESS
                  </strong>
                </div>
                <p href="#" class="footer-link hotline">
                Phone number: <strong> 08 9991 9928</strong>
                </p>
                <p href="#" class="footer-link hotline">
                  Email: <strong> finance.exness.trade@gmail.com</strong>
                </p>
                <p href="#" class="footer-link hotline_w">
                  Mã số doanh nghiệp: 0316552631 do Sở Kế Hoạch &amp; Đầu tư TP.
                  Hồ Chí Minh cấp ngày 23/10/2020.
                </p>
                <p href="#" class="footer-link hotline_w">
                  Địa chỉ văn phòng: <br />
                  308 Điện Biên Phủ, Phường 04, Q.3, TP. Hồ Chí Minh, Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToButtonButton />
    </>
  );
}
