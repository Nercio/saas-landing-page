import FeaturesCard from "@/components/features-card";
import Tag from "@/components/tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/avatar";
import Key from "@/components/key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-[97px]">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-center text-6xl  font-medium mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeaturesCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center ">
              <Avatar className="z-40">
                <Image
                  src={avatar1}
                  alt="Ashwin Santiago"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image
                  src={avatar2}
                  alt="Lula Meyers"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image
                  src={avatar3}
                  alt="Florence Shaw"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-400 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="Owen Garcia"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeaturesCard>
          <FeaturesCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition text-center duration-500">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative ">
                  <span>incredible</span>
                  <video
                    src="/gif-incredible.mp4"
                    autoPlay
                    muted
                    loop
                    className="bottom-full absolute left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition pointer-events-none duration-500"
                    playsInline
                  />
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeaturesCard>
          <FeaturesCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 transition-all outline outline-offset-4 outline-transparent group-hover:outline-lime-400 outline-2 group-hover:translate-y-1 duration-500">
                shift
              </Key>
              <Key className="transition-all outline outline-offset-4 outline-transparent group-hover:outline-lime-400 outline-2 group-hover:translate-y-1 duration-500 delay-150">
                alt
              </Key>
              <Key className="transition-all outline outline-offset-4 outline-transparent group-hover:outline-lime-400 outline-2 group-hover:translate-y-1 duration-500 delay-300">
                c
              </Key>
            </div>
          </FeaturesCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2 hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-90 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
