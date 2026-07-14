import ContactForm from "../../components/kg/ContactForm";
import ContactDetails from "../../components/kg/ContactDetails";
import Image from "next/image";
import divider from "@/public/img/kg/get-a-quote-divider.svg";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata.quote;
export const page = () => {
  return (
    <main className=" px-4 py-8">
      <section className="py-52 container mx-auto">
        <h1 className="font-heading">
          Let&apos;s talk <br /> about your project!
        </h1>
        <div className="text-black pt-20 text-5xl font-body">
          Have questions? We&apos;ve got the answers! Here, you&apos;ll find clear and
          concise information about our services, process, and what to expect
          when working with us. If you need more details, feel free to reach
          out!
        </div>
      </section>
      {/* <QuoteForm /> */}
      <section className="container mx-auto">
        <ContactForm />
      </section>
      <Image
        src={divider}
        alt="divider"
        className="w-full md:pt-52 md:pb-52 py-20"
      />
      <section className="container mx-auto">
        <ContactDetails />
      </section>
    </main>
  );
};

export default page;
