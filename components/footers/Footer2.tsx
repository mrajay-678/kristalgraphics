import Link from "next/link";
import Image from "next/image";
import unionFooter from "@/public/img/kg/union-footer.svg";
import sageFooter from "@/public/img/kg/sage-footer.svg";
import whitenimonics from "@/public/img/kg/footer-whitenimonics.svg";
import blacknimonics from "@/public/img/kg/footer-blacknimonics.svg";
import FooterMobile from "./FooterMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer2({ text = "rayosttudio" }: { text?: string }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="mxd-footer"
      className="mt-24 md:mt-32 lg:mt-52 lg:min-h-screen flex flex-col justify-end gap-2 md:gap-10"
    >
      <FooterMobile />

      <div className="hidden md:block">
        <div className="max-w-[1920px] mxd-hero-03__header mx-auto px-[1.5rem]">
          <div className="md:w-2/4 ms-auto pb-6">
            <Image
              src={blacknimonics}
              alt="Black Monics"
              className="w-5/12 ms-auto"
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="relative mx-auto grid-container pt-10 px-8 md:px-32 gap-16 pb-20  lg:flex-row lg:items-end lg:gap-10 bg-[#181818]">
          {/* Left Content */}
          <div className="flex max-w-[1920px] mxd-hero-03__header mx-auto mb-40 px-[1.5rem] justify-between items-end">
            <h2 className="font-heading text-4xl font-light leading-normal text-white w-6/12 sm:text-5xl md:text-6xl lg:text-[5vw]">
              Ready to print merch at scale?
            </h2>
            <div className="w-6/12">
              <Image
                src={whitenimonics}
                alt="White Monics"
                className="w-8/12 ms-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex max-w-[1920px] mxd-hero-03__header mx-auto px-[1.5rem] items-start lg:items-end flex-col gap-6 lg:flex-row lg:justify-between pt-20 lg:pt-72">
            <Link href={"/get-a-quote"}>
              <h3 className="font-heading font-medium text-white sm:text-7xl md:text-7xl lg:text-[5vw] hover:text-[#FEBB12]">
                Get a <span className="">quote!</span>
              </h3>
            </Link>
            {/* Address */}
            <div className="flex md:flex-wrap flex-col lg:flex-row gap-5 md:w-6/12 justify-between md:items-end">
              <div className="flex md:w-3/12 flex-col items-center gap-2">
                <Image
                  className="footer-logo-1"
                  src={unionFooter}
                  alt="Union Footer"
                />
                <Image
                  className="footer-logo-2"
                  src={sageFooter}
                  alt="Sage Footer"
                />
              </div>
              <div className="md:w-3/12">
                <h4 className="mb-10 font-body font-bold text-5xl text-white sm:text-2xl lg:text-3xl">
                  Address:
                </h4>

                <Link href={"https://maps.app.goo.gl/yHy8f9wtxefpsKcH8"}>
                  <p className="font-body text-2xl leading-relaxed text-white/90 sm:text-lg lg:text-3xl">
                    9607 Canoga Ave,
                    <br />
                    Chatsworth,
                    <br />
                    CA 91311
                  </p>
                </Link>
              </div>

              {/* Contact */}
              <div className="md:w-3/12">
                <h4 className="mb-10 font-body font-bold text-5xl text-white sm:text-2xl lg:text-3xl">
                  We got you!
                </h4>

                <div className="space-y-2">
                  <Link
                    href="mailto:info@kristalgraphics.net"
                    className="block font-body text-3xl text-white/90 transition hover:text-[#FEBB12] sm:text-lg lg:text-3xl underline pb-8"
                  >
                    info@kristalgraphics.net
                  </Link>
                  <Link
                    href="tel:+18183427822"
                    className="block font-body text-3xl text-white/90 transition hover:text-[#FEBB12]"
                  >
                    +1 (818) 342-7822
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1920px] mxd-hero-03__header mx-auto px-[1.5rem] mt-20">
            <div className="flex flex-col gap-6 border-t border-white/30 pt-8 md:flex-row md:items-end md:justify-between">
              <div className="font-body text-sm text-white sm:text-2xl lg:text-xl">
                <div className="w-6/12 flex flex-row justify-start items-center gap-4 pb-5">
                  <Link
                    href="https://www.instagram.com/kristal.graphics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FEBB12] transition"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      className="w-4/4"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/kristal-graphics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FEBB12] transition"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="w-4/4"
                    />
                  </Link>
                  <Link
                    href="https://www.yelp.com/biz/kristal-graphics-chatsworth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FEBB12] transition"
                  >
                    <FontAwesomeIcon
                      icon={faYelp}
                      size="2x"
                      className="w-4/4"
                    />
                  </Link>
                </div>
                <p className="text-white text-3xl">
                  © {currentYear} Kristal Graphics. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-row gap-5 max-w-6/12 md:w-6/12 justify-between items-end">
                <div className="w-3/12"></div>
                <div className="w-3/12">
                  <ul>
                    <li className="pb-2 text-3xl">
                      <Link href="/" className="text-white hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="pb-2 text-3xl">
                      <Link
                        href="/service"
                        className="text-white hover:underline"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="w-3/12">
                  <ul>
                    <li className="pb-2 text-3xl">
                      <Link
                        href="/about-us"
                        className="text-white hover:underline"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="pb-2 text-3xl">
                      <Link
                        href="https://www.promoplace.com/kristalgraphics"
                        className="text-white hover:underline"
                      >
                        Promo Products
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
    </footer>
  );
}
