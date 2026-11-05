import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/Layer_1.svg";

const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Career", href: "#career" },
    { label: "Blog", href: "#blog" },
    { label: "xSchool", href: "#xschool" },
];

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto mt-6 flex h-9 w-[calc(100%-3rem)] max-w-[1320px] items-center justify-between md:mt-10.5">
                <Link href="/" aria-label="Wemark">
                    <Image
                        src={logo}
                        alt="wemark"
                        width={120}
                        height={19}
                        priority
                        className="h-[19.07px] w-[119.48px]"
                    />
                </Link>

                <nav className="hidden items-center gap-12.5 lg:flex ">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="h-[36px] shrink-0 whitespace-nowrap text-[24px] font-medium text-[#E0E0E0] transition-opacity hover:opacity-70"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className="hidden text-[24px] w-[100px] font-medium h-[36px] text-[#E0E0E0] underline transition-opacity hover:opacity-70 lg:block"
                >
                    Let&apos;s Talk
                </Link>

                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                >
                    <span className="h-0.5 w-6 bg-[#E0E0E0]" />
                    <span className="h-0.5 w-6 bg-[#E0E0E0]" />
                </button>
            </div>
        </header>
    );
}