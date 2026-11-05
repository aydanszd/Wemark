import Header from "@/src/layout/header/index";
import Banner from "@/src/sections/herrobanner/index";
import About from "@/src/sections/about";
import Founder from "@/src/sections/founder/index";
import { getXSchool } from "@/src/api/index";

export default async function Home() {
  const data = await getXSchool();

  return (
    <main>
      <div className="relative">
        <Header />
        <Banner title={data.banner_title} image={data.banner_image} />
      </div>

      <About
        title={data.about_title}
        description={data.about_description}
        images={data.about_images}
      />

      <Founder founders={data.founders} />
    </main>
  );
}