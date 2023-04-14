import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto text-white bg-[#101010] pb-10">
      <section className="">
        <Hero />
      </section>
      {/* <section className=" py-10">
        <Skills />
      </section> */}
      {/* <section className=" w-full  py-10">
        <RecentProjects />
      </section> */}
      <section className="bg-[#101010]">
        <CallToContact />
      </section>
    </div>
  );
}
