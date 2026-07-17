import Link from "next/link";
import Image from "next/image";

import unionFooter from "@/public/img/kg/union-footer.svg";
import sageFooter from "@/public/img/kg/sage-footer.svg";
import blacknimonics from "@/public/img/kg/footer-blacknimonics.svg";
import whitenimonics from "@/public/img/kg/footer-whitenimonics.svg";

export default function FooterMobile() {
  return (
    <footer className="md:hidden">
      {/* Pattern */}
      <div className="flex justify-end px-5 pt-5">
        <Image src={blacknimonics} alt="Pattern" className="w-1/4 mb-2" />
      </div>

      <div className="px-5 pb-8 bg-[#181818] pt-5">
        <div className="ms-auto w-8/12">
          <Image
            src={whitenimonics}
            alt="White Monics"
            className="w-8/12 ms-auto"
          />
        </div>
        {/* Heading */}
        <h2 className="mt-8 font-heading text-[40px] leading-[1.05] font-light text-white">
          Ready to print merch at scale?
        </h2>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-16 inline-block font-heading text-[42px] font-semibold leading-none text-white"
        >
          Get a <span className="text-[#FEBB12]">quote!</span>
        </Link>

        {/* Info */}
        <div className="mt-16">
          {/* Address */}

          <div className="w-4/4 ">
            <div className="flex">
              <div className="w-2/4">
                <h4 className="mb-4 font-body font-bold text-3xl text-white sm:text-2xl lg:text-3xl">
                  Address:
                </h4>

                <Link href={"https://maps.app.goo.gl/yHy8f9wtxefpsKcH8"}>
                  <p className="font-body text-2xl leading-relaxed text-white/90 sm:text-lg lg:text-3xl">
                    9607 Canoga Ave,
                    <br />
                    Woodland Hills,
                    <br />
                    CA 91367
                  </p>
                </Link>
              </div>
              {/* Contact */}
              <div className="w-2/4">
                <h4 className="mb-4 text-[13px] font-bold text-white">
                  We got you!
                </h4>
                <Link
                  href="mailto:info@kristalgraphics.com"
                  className="block font-body text-2xl text-white/90 transition hover:text-[#FEBB12] sm:text-lg lg:text-3xl underline pb-8"
                >
                  info@kristalgraphics.com
                </Link>
                <Link
                  href="tel:+18183427822"
                  className="mt-3 block text-2xl text-white"
                >
                  +1 (818) 342-7822
                </Link>
              </div>
            </div>
            {/* Logos */}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center justify-start w-full">
              <Image src={unionFooter} alt="Union" className="w-2/4 pr-10" />

              <Image src={sageFooter} alt="Sage" className="w-1/4" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/20 pt-5">
          <p className="text-center text-[10px] text-white/70">
            Privacy Policy | Terms of Service
          </p>

          <p className="mt-2 text-center text-[10px] text-white/70">
            © 1977 Kristal Graphics. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
