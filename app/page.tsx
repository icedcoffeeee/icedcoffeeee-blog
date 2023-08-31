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
import vid_data from "app/components/vid_data.json";

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

function Vids() {
  return (
    <div className="grid gap-3 mb-8 sm:grid-cols-2 sm:-ml-3 sm:-mr-4">
      {vid_data.map((e) => {
        return (
          <a
            href={e.video_url}
            target="_blank"
            className="flex flex-row border border-neutral-500 p-2 items-center bg-black rounded-xl gap-2 hover:bg-red-950 transition-all"
          >
            <Image
              src={e.thumbnail_url}
              width={e.thumbnail_width}
              height={e.thumbnail_height}
              alt=""
              className="w-[30%] aspect-video object-cover rounded-xl"
            />
            <h1>{e.title}</h1>
          </a>
        );
      })}
    </div>
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
        deeper concepts on my YouTube channel:{" "}
        <Badge href="https://www.google.com" src={tehais}>
          tehais
        </Badge>
        . Most, if not all, of them are in spoken malay; I aim to share the
        physics/mathematics in non-jargon to my own community.
      </p>
      <Vids />
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
        with{" "}
        <Badge href="https://nextjs.org/">
          <svg
            width="14"
            height="14"
            aria-label="Next.js logomark"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex mr-1"
          >
            <mask
              id="a"
              style={{
                maskType: 'alpha',
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={180}
              height={180}
            >
              <circle cx={90} cy={90} r={90} fill="#000" />
            </mask>
            <g mask="url(#a)">
              <circle
                cx={90}
                cy={90}
                r={87}
                fill="#000"
                stroke="#fff"
                strokeWidth={6}
              />
              <path
                d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                fill="url(#paint0_linear_408_139)"
              />
              <path
                fill="url(#paint1_linear_408_139)"
                d="M115 54H127V126H115z"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_408_139"
                x1={109}
                y1={116.5}
                x2={144.5}
                y2={160.5}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="paint1_linear_408_139"
                x1={121}
                y1={54}
                x2={120.799}
                y2={106.875}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
          NextJS
        </Badge>
        ), as well as graphic design. I also (sometimes) write blogposts. Feel
        free to share your opinions and tag me{" "}
        <Badge href="https://x.com/@hazymm_">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          @hazymm_
        </Badge>
        .
      </p>
    </section>
  );
}
