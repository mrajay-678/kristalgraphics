import Link from "next/link";
import Image from "next/image";

import AnimateRotation from "../animation/AnimateRotation";
import MasonryGrid from "../animation/MasonryGrid";
import { projects1 } from "@/data/projects.json";
import BackgroundParallax from "../animation/BackgroundParallax";
export default function PortfolioMasonry() {
  return (
    <div className="mxd-section mxd-section-inner-headline grid-headline padding-default main-width">
      <div className=" ">
        {/* Block - Projects Masonry #01 with Section Title Start */}
        <div className="mxd-block loading-wrap">
          <div className="mxd-projects-masonry loading__item">
            <div className="max-w-[1920px] mxd-hero-03__header mx-auto !px-[0rem]">
              {/* Portfolio Gallery Start */}
              <MasonryGrid
                className="row g-0 mxd-projects-masonry__gallery"
                data-masonry='{"percentPosition": true }'
                itemSelector=".mxd-projects-masonry__item"
              >
                {/* portfolio gallery title */}
                <div className="w-full md:w-2/4 mxd-projects-masonry__item mxd-projects-masonry__title headline-title translate-y-[-10%] !px-0">
                  <div className="mxd-block__inner-headline">
                    <h1 className="inner-headline__title font-heading headline-img-before headline-img-07 leading-[1]">
                      From signs to swag
                    </h1>
                    <p className="font-body text-5xl pt-20">
                      Proudly Printed by Union Workers for your Campaign
                    </p>
                  </div>
                </div>
                {/* portfolio gallery single item */}
                {projects1.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-100px)] mxd-project-item mxd-projects-masonry__item [&:nth-child(even)]:!left-auto [&:nth-child(even)]:!right-0  !p-0"
                  >
                    <BackgroundParallax
                      className={`mxd-project-item__preview masonry-preview rounded-xl ${item.previewClass} parallax-img-small`}
                    />
                    <div className="mxd-project-item__promo masonry-promo !px-0">
                      <div className="mxd-project-item__name pt-10 text-4xl ">
                        <strong className="text-7xl">{item.title}</strong>{" "}
                        <br />
                        <br />
                        <p className="font-body text-5xl">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* portfolio gallery single item */}
              </MasonryGrid>
              {/* Portfolio Gallery End */}
            </div>
          </div>
        </div>
        {/* Block - Projects Masonry #01 with Section Title Start */}
      </div>
    </div>
  );
}
