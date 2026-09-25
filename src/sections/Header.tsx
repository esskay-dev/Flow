import flowImage from "@/assets/images/Flow.svg";
import Image from "next/image";
import Button from "@/components/Button";

const navLinks = [
  { label: "Documentation", href: "#" },
  { label: "Features", href: "features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#faqs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 backdrop-blur-3xl z-50 py-4 lg:py-8">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 bg-[#006038]/95 rounded-full p-2 px-4 md:pr-2 items-center">
          <div className="flex items-center gap-1">
            <Image src={flowImage} alt="Flow logo" className="h-9 w-auto" />
            <div className="text-2xl font-bold text-[#00ef8b]">FLOW</div>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium text-white">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12" stroke="#00ef8b"></line>
              <line x1="3" y1="6" x2="21" y2="6" stroke="#00ef8b"></line>
              <line x1="3" y1="18" x2="21" y2="18" stroke="#00ef8b"></line>
            </svg>
            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center gap-5"
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
