import Image from "next/image";
import me from "public/Hazim.jpg";
import teach1 from "public/IMG_20230210_014810_223.jpg";
import teach2 from "public/PXL_20221202_022800019.MP.jpg";
import whiteboard1 from "public/whiteboard.jpg";
import whiteboard2 from "public/PXL_20230411_074533691.MP.jpg";
import experiment from "public/Screenshot_20230831-022445.png";
import UMlogo from "public/UM logo.png";
import tehais from "public/tehais.svg";
import manim from "public/manim.svg";

function Badge(props: any) {
  return (
    <span className="not-prose">
      <a
        {...props}
        target="_blank"
        className="bg-red-900 rounded p-1 text-sm inline-flex gap-x-1 leading-4 text-neutral-100 no-underline inline-block align-middle"
      >
        {props.src && (
          <Image src={props.src} alt={props.alt || ""} className="w-4 h-4" />
        )}
        {props.children}
      </a>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-3"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Hello! My name is Hazim Saharuddin.
      </h1>
      <p>
        I'm a third-year Physics undergrad at{" "}
        <Badge href="https://www.google.com" src={UMlogo}>
          Universiti Malaya
        </Badge>
        . I'm passionate to know more and share all about our universe, through
        the fine-art of Mathematics.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <Image src={me} alt="" className="mb-4 rounded-lg object-cover" />
        <Image
          src={teach2}
          alt=""
          className="mb-4 rounded-lg object-cover object-center"
        />
        <Image src={teach1} alt="" className="mb-4 rounded-lg object-cover" />
        <Image
          src={whiteboard1}
          alt=""
          className="aspect-[9/15] sm:aspect-square mb-4 col-span-2 rounded-lg object-cover object-top"
        />
        <Image
          src={experiment}
          alt=""
          className="aspect-square mb-4 col-span-2 rounded-lg object-cover object-top"
        />
        <Image
          src={whiteboard2}
          alt=""
          className="aspect-square sm:aspect-auto mb-4 col-span-2 rounded-lg object-cover object-top"
        />
      </div>
      <p>
        I often teach physical mathematics to my peers and sometimes share more
        deeper concepts on my{" "}
        <Badge href="https://www.google.com" src={tehais}>
          YouTube channel
        </Badge>
        . Most, if not all, of them are in spoken malay; I aim to share the
        physics/mathematics in non-jargon to my own community.
      </p>
      <p>
        The animations of the videos are made with an open-source Python
        library:{" "}
        <Badge href="https://www.google.com" src={manim}>
          manim
        </Badge>
        , for which I am a member of the core development team.
      </p>
      <p>
        My other interests include: web development (I made this site myself
        with <Badge href="">NextJS</Badge>), as well as graphic design. I also
        (sometimes) write blogposts. Feel free to share your opinions and tag me{" "}
        <Badge>@hazymm_</Badge>.
      </p>
    </section>
  );
}
