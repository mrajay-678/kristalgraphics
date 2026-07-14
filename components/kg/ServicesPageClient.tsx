"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/kg/ServiceHero";
import { services } from "@/data/kg/services";

const ServicesPageClient = () => {
  return (
    <main className="pt-60">
      <div className="w-11/12 mx-auto">
        <ServiceHero />
        <div className="relative font-inter antialiased">
          <div className="relative min-h-screen overflow-hidde">
            <div className="mxd-block">
              <div className="p-0 container-fluid">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item no-margin">
                    <div className="mxd-cpb-list">
                      {services.map((item, idx: number) => {
                        return (
                          <div
                            className="mxd-cpb-list__item hover-reveal__item"
                            key={idx}
                          >
                            <Link href={`/service/${item.slug}`}>
                              <div className="mxd-cpb-list__divider" />

                              <div className="flex lg:flex-row flex-col lg:items-center gap-20 anim-uni-in-up py-20 justify-between">
                                <h6 className="m-0 md:w-1/4 mxd-cpb-list__title text-7xl font-heading">
                                  {item.question}
                                </h6>
                                <div className="mxd-cpb-list__num lg:w-2/4 font-heading">
                                  <p className="text-5xl font-body font-light">
                                    {item.description}
                                  </p>
                                </div>
                                <div className=" ">
                                  <Image
                                    className="w-full h-full"
                                    alt="Project Preview"
                                    src={item.hoverImage}
                                    width={300}
                                    height={430}
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPageClient;
