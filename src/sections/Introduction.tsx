import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unneccasry complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto px-2">
        <div className="flex justify-center">
          <Tag>Introducing Flow</Tag>
        </div>
        <div className="text-3xl md:6xl lg:text-7xl text-center font-medium mt-10 tracking-tighter">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-black/50">{text}</span>{" "}
          <span className="text-[#006038]/95 block">
            That's why we built FLOW.
          </span>
        </div>
      </div>
    </section>
  );
}
