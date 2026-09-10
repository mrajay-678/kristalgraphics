import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden main-width">
      <div className="max-w-[1920px] mxd-hero-03__header mx-auto !px-[0rem]">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg" />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className=" anim-uni-in-up">
                  <RevealText
                    as="span"
                    className="mxd-promo__caption !text-white font-heading reveal-type "
                  >
                    Avail 20% off on <br /> bulk orders!
                  </RevealText>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    text="Get a free consultation"
                    className="btn btn-anim btn-default btn-large !bg-[#FEBB12] slide-right-up"
                    href={`tel:+18183427822`}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                    <ArrowUpRight />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
