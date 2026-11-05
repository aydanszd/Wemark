import Header from "@/src/layout/header/index";
import Banner from "@/src/sections/herrobanner/index";
import { getXSchool } from "@/src/api/index";

export default async function Home() {
  const data = await getXSchool();

  return (
    <main>
      <div className="relative">
        <Header />
        <Banner title={data.banner_title} image={data.banner_image} />
      </div>
    </main>
  );
}