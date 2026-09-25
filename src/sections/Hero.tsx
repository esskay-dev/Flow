import Button from "@/components/Button";
import { siApple, siGoogleplay } from "simple-icons";
import aiSlop from "@/assets/images/ai.svg";
import flowImage from "@/assets/images/Flow.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col justify center items-center">
        <div className="inline-flex py-1 px-3 gap-2 font-medium items-center">
          <div className="flex items-center justify-center gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
            >
              <path d={siApple.path} />
            </svg>
          </div>

          <span className="font-bold">4.8 ★ on Apple Store </span>

          <span className="text-black/50">152k reviews</span>

          <div className="flex items-center justify-center gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
            >
              <path d={siGoogleplay.path} />
            </svg>
          </div>
          <span className="font-bold">4.8 ★ on Google Play </span>
          <span className="text-black/50">1.3m reviews</span>
        </div>

        <h1 className="text-6xl font-bold text-center tracking-tighter max-w-2xl mt-6">
          Your data. Production-ready APIs. In seconds.
        </h1>
        <p className="text-center text-xl text-black/60 max-w-2xl mt-6">
          Upload any dataset and instantly get a fully-featured REST API. No
          backend code, no infrastructure. Just data that works.
        </p>
        <div className="flex justify-center items-center gap-10 mt-8">
          <Button variant="primary">Start building free</Button>
          <Button variant="secondary" className="text-black">
            Watch demo
          </Button>
        </div>
        <div className="mt-8">
          {/* <Image src={flowImage} alt="Flow logo" className="" /> */}
          {/* <Image src={aiSlop} alt="AI Image" /> */}
        </div>
      </div>
    </section>
  );
}
