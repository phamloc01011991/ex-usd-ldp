import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { NAME_APP } from "@/lib/general";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "../public/font/open-san/OpenSans-VariableFont_wdth,wght.ttf",
});
export default function Android() {
  const [emblaRef] = useEmblaCarousel();
  const [emblaRefOther] = useEmblaCarousel();
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
    <main id="site-main" className={myFont.className}>
      <div className="pop-up-down">
        <div className="container">
          <p>
          Please return to the home screen to check the application download progress.
          </p>
          <span>Close</span>
        </div>
      </div>
      <div className="head-app">
        <div className="app-inf">
          <div className="left">
            <div className="logo">
              <img src="/111.png" alt="logo" />
            </div>
          </div>
          <div className="if">
            <h3>{NAME_APP} - Diverse trading products</h3>
            <span className="desc">{NAME_APP} company limited</span>
            <span className="buy">In-app purchases</span>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="wrapper">
          <ul className="items">
            <li className="item">
              <div className="icon">
                <span>4,3</span>
                <i className="fas fa-star"></i>
              </div>
              <div className="desc">
                <span>3 N reviews</span>
                {/* <img src="/images/android/warning.svg" alt="photo"/> */}
              </div>
            </li>
            <li className="item">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-download"></i>
              </div>
              <span className="desc"> 80 MB </span>
            </li>
            <li className="item">
              <div className="icon">
                <span className="age">3+</span>
              </div>
              <div className="desc">
                <span>Suitable for 3 years old and up</span>
                {/* <img src="/images/android/warning.svg" alt="photo"/> */}
              </div>
            </li>
            <li className="item">
              <div className="icon">Than 100 N</div>
              <span className="desc"> Downloads </span>
            </li>
          </ul>
        </div>
        <div className="download">
          <Link
            className="btn-download download-btn"
            href="https://exnessfinance.app/app.apk"
          >
            Install
          </Link>
        </div>
      </div>
      <div className="slider-intro">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container_android">
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
            {/* <div className="embla__slide_android item">
              <img src="/6.webp" alt="photo" />
            </div>
            <div className="embla__slide_android item">
              <img src="/7.webp" alt="photo" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-app">
        <div className="heading">
          <h4>About this app</h4>
          <img src="/images/android/arrowright.svg" alt="photo" />
        </div>
        <p className="desc">
        Buy and sell stocks and fund certificates from 10 USD. Invest and accumulate easily.
        </p>
        <span className="bra"> Finance </span>
      </div>
      <div className="data-secury">
        <div className="heading">
          <h4>Data safety</h4>
          <img src="/images/android/arrowright.svg" alt="photo" />
        </div>
        <p className="desc">
        Safety starts with understanding how developers collect and share your data. Privacy and data security practices may vary by usage, region, and age. The developer has provided this information and may update it from time to time.
        </p>
        <div className="not">
          <ul className="list">
            <li>
              <img src="/images/android/share.svg" alt="photo" />
              <div className="des">
                <p>Do not share data with third parties</p>
                <p>
                  <span className="underline">Learn more</span> about how developers declare information about data collection and sharing activities
                </p>
              </div>
            </li>
            <li>
              <img src="/images/android/cloud.svg" alt="photo" />
              <div className="des">
                <p>No data collected</p>
                <p>
                  <span className="underline">Learn more</span> about how developers declare information about data collection and sharing activities
                </p>
              </div>
            </li>
            <li>
              <img src="/images/android/cloud.svg" alt="photo" />
              <div className="des">
                <p>Data is encrypted during transfer</p>
              </div>
            </li>
            <li>
              <img src="/images/android/trash.svg" alt="photo" />
              <div className="des">You can request data deletion</div>
            </li>
            <Link href="#" className="detail">
            See details
            </Link>
          </ul>
        </div>
      </div>
      <div className="rating">
        <div className="heading">
          <h4>Rate this app</h4>
          <span>Let others know what you think</span>
        </div>
        <div className="star">
          <img src="/images/android/star.svg" alt="photo" />
          <img src="/images/android/star.svg" alt="photo" />
          <img src="/images/android/star.svg" alt="photo" />
          <img src="/images/android/star.svg" alt="photo" />
          <img src="/images/android/star.svg" alt="photo" />
        </div>
        <Link href="#" className="detail">
          {" "}
          Write a review{" "}
        </Link>
      </div>
      <div className="evalute">
        <div className="heading">
          <h4>Ratings and reviews</h4>
          <img src="/images/android/arrowright.svg" alt="photo" />
        </div>
        <p className="desc">
        Ratings and reviews are verified and come from people using the same devices as you
        </p>
        <div className="vote">
          <div className="val">
            <span className="point"> 4,5 </span>
            <div className="star">
              <img src="/images/android/stars.svg" alt="photo" />
              <img src="/images/android/stars.svg" alt="photo" />
              <img src="/images/android/stars.svg" alt="photo" />
              <img src="/images/android/stars.svg" alt="photo" />
              <i className="fas fa-star-half"></i>
            </div>
            <div className="count">3.358</div>
          </div>
          <div className="list-val">
            <div className="five">
              <span>5</span>
              <span></span>
            </div>
            <div className="four">
              <span>4</span>
              <span></span>
            </div>
            <div className="three">
              <span>3</span>
              <span></span>
            </div>
            <div className="two">
              <span>2</span>
              <span></span>
            </div>
            <div className="one">
              <span>1</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="app-similar">
        <div className="heading">
          <h4>Similar applications</h4>
          <img src="/images/android/arrowright.svg" alt="photo" />
        </div>
        <div className="slider">
          <div className="embla_other" ref={emblaRefOther}>
            <div className="embla__container_other">
              <div className="embla__slide_other_android item">
                <img src="/images/android/a1.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">MBS Mobile</p>
                  <div className="rating">
                    <span className="rating-value">4,4</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="embla__slide_other_android item">
                <img src="/images/android/a2.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">SSI iBoard</p>
                  <div className="rating">
                    <span className="rating-value">4,2</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="embla__slide_other_android item">
                <img src="/images/android/a3.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">VPS SmartOne</p>
                  <div className="rating">
                    <span className="rating-value">4,5</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="embla__slide_other_android item">
                <img src="/images/android/a4.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">ONUS</p>
                  <div className="rating">
                    <span className="rating-value">4,7</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="embla__slide_other_android item">
                <img src="/images/android/a5.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">Followin</p>
                  <div className="rating">
                    <span className="rating-value">4,4</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="embla__slide_other_android item">
                <img src="/images/android/a6.webp" alt="photo" />
                <div className="item-info">
                  <p className="app-name">Spiderum</p>
                  <div className="rating">
                    <span className="rating-value">4,3</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
