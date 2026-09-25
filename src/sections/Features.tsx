import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guide",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-center">
          <Tag>FEATURES</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6">
          A complete platform for serving{" "}
          <span className="text-[#006038]/95">datasets</span> at scale.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8">
          <FeatureCard
            title="Effortless ingestion"
            description="Drag-and-drop CSV, JSON, or Parquet. Connect databases directly.
                Schema detection runs automatically."
          >
            <div className="aspect-video flex flex-row items-center  justify-center gap-2">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Instant REST APIs"
            description="Every dataset becomes a production-ready endpoint with
                filtering, pagination, sorting, and full-text search."
          >
            <div className=" aspect-video flex items-center justify-center">
              <p className="text-4xl text-white/90 text-center font-extrabold">
                We've achieved{" "}
                <span className="bg-gradient-to-r from-[#00482a] to-[#99f9d1]">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Real-time analytics"
            description="Monitor usage, track latency, and visualize trends. Understand
                exactly how your data is being consumed."
          ></FeatureCard>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
