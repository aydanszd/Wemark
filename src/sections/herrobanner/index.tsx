import Image from "next/image";

type BannerProps = {
    title: string;
    image: string;
};

export default function Banner({ title, image }: BannerProps) {
    const lines = title
        .split(/\r?\n/)
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean);
    const offsets = ["md:ml-[4.31%]", "md:ml-[24.1%]", "md:ml-[39.24%]"];
    return (
        <section className="relative h-175 w-full overflow-hidden md:h-225">
            <Image
                src={image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="relative z-10 mx-auto h-full w-[calc(100%-3rem)] max-w-[1320px] pt-50 md:pt-75">
                <h1 className="text-[clamp(2.5rem,8.056vw,116px)] font-normal uppercase leading-[1.0517] tracking-[-0.02em] text-[#E0E0E0] md:whitespace-nowrap">
                    {lines.map((line, i) => (
                        <span key={i} className={`block ${offsets[i] ?? ""}`}>
                            {line}
                        </span>
                    ))}
                </h1>
            </div>
        </section>
    );
}