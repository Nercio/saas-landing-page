import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <nav className="flex  gap-6">
              {footerLinks.map((link) => (
                <a href={link.href} className="text-white/15 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
