import RevealText from "../animation/RevealText";
import Image from "next/image";
import juzer from "@/public/img/kg/teams/juzer.png";
import murtaza from "@/public/img/kg/teams/murtuza.png";
import courtney from "@/public/img/kg/teams/courtney.png";
import darwin from "@/public/img/kg/teams/darwin.png";
import tasneem from "@/public/img/kg/teams/tasneem.png";
import ana from "@/public/img/kg/teams/ana.png";
import narisara from "@/public/img/kg/teams/narisara.png";
import nafisa from "@/public/img/kg/teams/nafisa.png";
import fatema from "@/public/img/kg/teams/fatema.png";
import erick from "@/public/img/kg/teams/Erick.png";
import jose from "@/public/img/kg/teams/Jose.png";
import carlos from "@/public/img/kg/teams/Carlos.png";
import mario from "@/public/img/kg/teams/Mario.png";

const team = [
  {
    image: juzer,
    name: "Juzer Saifee",
    position: "Co-founder",
  },
  {
    image: murtaza,
    name: "Murtaza Mansoor",
    position: "Co-founder",
  },
  {
    image: courtney,
    name: "Courtney Meherin",
    position: "Office Manager",
  },
  {
    image: darwin,
    name: "Darwin Devitis",
    position: "Head of Design",
  },
  {
    image: tasneem,
    name: "Tasneem Mansoor",
    position: "Accountant",
  },
  {
    image: ana,
    name: "Ana Estrada",
    position: "DTF Specialist",
  },
  {
    image: narisara,
    name: "Narisara Fungladda",
    position: "Embroidery Specialist",
  },
  {
    image: nafisa,
    name: "Nafisa Zakir",
    position: "Human Resources",
  },
  {
    image: fatema,
    name: "Fatema Lakdawala",
    position: "Brand & Marketing Manager",
  },
  {
    image: erick,
    name: "Eric Morales",
    position: "Pressman",
  },
  {
    image: jose,
    name: "Jose Perez",
    position: "Pressman",
  },
  {
    image: carlos,
    name: "Carlos Carrillo",
    position: "Screen Printing Manager",
  },
  {
    image: mario,
    name: "Mario Ascon",
    position: "Delivery Executive",
  },
];

const Teams = () => {
  return (
    <section className="container mx-auto pt-20 lg:pb-52">
      <div className="mxd-section-title__hrtitle anim-uni-in-up">
        <RevealText
          as="h2"
          className="font-light reveal-type font-heading text-9xl mb-20"
        >
          Meet the team
        </RevealText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-20 pb-24">
        {team.map((member, i) => (
          <div key={i} className="mb-20 relative">
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-auto"
            />
            <div className="absolute bottom-10 left-8 p-4">
              <h3 className="font-heading text-5xl leading-none text-white w-2/4 mb-4">
                {member.name}
              </h3>
              <p className="font-heading  text-3xl font-light text-[#febb12]">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
