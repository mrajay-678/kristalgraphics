import Link from "next/link";

export const ContactDetails = () => {
  return (
    <section>
      <div className="text-5xl font-body text-start">
        <h2 className="font-heading">What Happens Next?</h2>
        <p className="pt-10 text-3xl">
          After reviewing your requirements, we will send you an accurate quote
          with pricing, timeline, and next steps. We usually reply within 24-48
          hours on a weekday. If we need clarification, we'll reach out via
          email or phone to discuss your project in more detail.
        </p>
        <p className="pt-10 text-3xl">
          Design files not ready? No problem. We'll guide you through the
          artwork preparation process or offer our design services.
        </p>
      </div>
      <div className="text-5xl font-body text-start pt-32">
        <h2 className="font-heading">Prefer to talk directly?</h2>
        <div className="pt-20 flex flex-col md:flex-row gap-20 text-3xl">
          <div className="md:w-1/2">
            <b>Call us: &nbsp;</b> <br />
            <Link
              href="tel:+18183427822"
              className="block font-body text-3xl  transition hover:text-[#FEBB12]"
            >
              +1 (818) 342-7822
            </Link>{" "}
            Monday – Friday, 9am – 5pm PST
          </div>
          <div className="md:w-1/2">
            <b>Visit us:</b> <br />{" "}
            <Link href={"https://maps.app.goo.gl/yHy8f9wtxefpsKcH8"}>
              <p className="font-body text-2xl leading-relaxed sm:text-lg lg:text-3xl">
                9607 Canoga Ave,
                <br />
                Woodland Hills,
                <br />
                CA 91367
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-20 text-3xl">
          <b> Email Us: </b>
          <br />
        </p>
      </div>
      <h1 className="text-5xl md:text-8xl">
        <Link
          href="mailto:info@kristalgraphics.net"
          className="text-[#B3B3B3] hover:text-[#FEBB12] font-heading flex group"
        >
          info@kristalgraphics.net
          <div className="hidden md:block">
            <svg
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0H42V18H36.333L25 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M0 0H18V18H11.9996L0 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 26H68V43H61.9996L50 31.6671V26Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 52H68V69H61.9996L50 57.6671V52Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 0H68V18H61.9996L50 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
            </svg>
          </div>
        </Link>
      </h1>
    </section>
  );
};

export default ContactDetails;
