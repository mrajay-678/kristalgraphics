"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";
import logo from "@/public/img/kg/Vector.svg";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Header1() {
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsSticky(currentScrollY > 100);

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    {
      name: "About us",
      path: "/about-us",
      dropdown: [{ name: "Equipment", path: "/equipment" }],
    },
    {
      name: "Promo Products",
      path: "https://www.promoplace.com/kristalgraphics",
    },
  ];
  const MobileLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    {
      name: "About us",
      path: "/about-us",
      dropdown: [{ name: "Equipment", path: "/equipment" }],
    },
    {
      name: "Promo Products",
      path: "https://www.promoplace.com/kristalgraphics",
    },
    { name: "Get a quote", path: "/get-a-quote" },
  ];

  return (
    <header
      id="header"
      className={`
        left-0
        right-0
        z-50
        !pt-5
        w-full
        transition-all
        duration-500
        ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          isSticky
            ? "fixed top-0 bg-white/40 backdrop-blur-md"
            : "absolute top-0 bg-transparent"
        }
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${isSticky ? "py-10" : "py-5"}
      `}
    >
      <div className="flex items-center justify-between max-w-[1920px] mxd-container grid-container !pt-10 mxd-hero-03__header mx-auto px-[1.5rem]">
        {/* Logo */}
        <div className="mxd-header__logo loading__fade">
          <Link href="/" className="mxd-logo">
            <Image
              src={logo}
              alt="Logo"
              width={180}
              height={80}
              className="h-auto w-[130px] sm:w-[160px] lg:w-[180px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center text-center justify-evenly gap-20 xl:flex">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group">
              <Link
                href={link.path}
                className={`mxd-header__nav-link relative pb-1 text-3xl transition-all duration-300 inline-flex items-center gap-2 ${
                  pathname === link.path ||
                  link.dropdown?.some((item) => pathname === item.path)
                    ? "border-b-2 border-[#FEBB12] font-bold"
                    : ""
                }`}
              >
                {link.name}

                {link.dropdown && (
                  <ChevronDown
                    size={24}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div
                  className="
            absolute left-1/2 top-full z-50
            mt-4 min-w-[150px]
            -translate-x-1/2
            rounded-xl
            p-3
            opacity-0
            invisible
            translate-y-2
            transition-all
            duration-300
            group-hover:visible
            group-hover:opacity-100
            group-hover:translate-y-0
          "
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`
                block rounded-lg px-5 py-3
                text-left text-3xl
                transition-all duration-300
                hover:text-black
                hover:font-bold
                ${pathname === item.path ? "font-bold text-black" : "text-black"}
              `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center justify-end gap-4 xl:flex">
          <AnimatedButton
            text="Get a Quote!"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right !text-3xl !font-heading px-20"
            href="/get-a-quote"
          >
            <ArrowUpRight />
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center xl:hidden"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-[2px] w-6 bg-black" />
            <span className="block h-[2px] w-6 bg-black" />
            <span className="block h-[2px] w-6 bg-black" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          mobileMenu ? "max-h-[500px] opacity-100 mt-10" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black px-5 py-6">
          <ul className="flex flex-col gap-5">
            {MobileLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block text-3xl text-light text-white transition-all duration-300 ${
                    pathname === link.path ? "font-bold text-[#FEBB12]" : ""
                  }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="mt-3 ml-5 border-l-2 border-[#FEBB12] pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenu(false)}
                        className={`
                block py-2 text-2xl text-white
                transition-all duration-300
                hover:text-[#FEBB12]
                ${pathname === item.path ? "font-bold text-[#FEBB12]" : ""}
              `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between gap-4">
            <ThemeSwitcherButton />
          </div>
        </div>
      </div>
    </header>
  );
}
