import { Blog } from "@/components/blog";
import { Projects } from "@/components/projects";
import { B } from "@/components/ui/typography";
import { generateRSS } from "@/lib/rss.xml";
import Image from "next/image";

export default function Home() {
  generateRSS();
  return (
    <main>
      <p>
        Hi, my name is <B>Hazim Saharuddin</B>. I&apos;m a third-year Physics
        undergrad at <B>Universiti Malaya</B>.
      </p>
      <div className="flex flex-col items-center justify-center my-3 gap-2 md:flex-row">
        <Image
          src={"/me.jpg"}
          alt={"hazim saharuddin"}
          width={150}
          height={150}
          className="object-cover rounded-md shadow-md md:w-auto"
        />
        <Image
          src={"/experiment.png"}
          alt={"experiment"}
          width={300}
          height={300}
          className="object-cover rounded-md shadow-md md:w-auto"
        />
      </div>
      <p>
        I&apos;ve always been interested in <B>physics</B> especially in{" "}
        <B>computational physics</B> and <B>quantum optics</B>. I&apos;ve also
        taught <B>mathematical methods</B> as coursework.
      </p>
      <div className="flex justify-center my-3 gap-2">
        <Image
          src={"/blackboard.jpg"}
          alt={"blackboard"}
          width={150}
          height={150}
          className="object-cover rounded-md aspect-square shadow-md md:w-auto"
        />
        <Image
          src={"/tutor.jpg"}
          alt={"tutor"}
          width={150}
          height={150}
          className="object-cover rounded-md aspect-square shadow-md md:w-auto"
        />
      </div>
      <Projects />
      <Blog />
    </main>
  );
}
