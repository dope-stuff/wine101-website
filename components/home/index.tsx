"use client";
import Banner from "../../components/home/banner";
import OurHighLightsIcon from "../../components/common/icons/our-highlights";
import Carousel from "../../components/carousel";
import WineCard from "../../components/card/wine";
import OurServiceIcon from "../../components/common/icons/our-service";
import ServiceCard from "../../components/card/service";
import Footer from "../../components/footer";

export default function Home() {
  const { innerWidth } = window;

  const data = [
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
  ];
  const services = [
    { name: "wine profile workshop", background: "#ECF2CB" },
    { name: "wine event private event", background: "#F9E4C0" },
    { name: "collaboration", background: "#FFD2DE" },
    { name: "wine wedding", background: "#E3E9FF" },
    { name: "pop-up booth", background: "#F9E4C0" },
  ];
  const elements = data.map((e, i) => <WineCard key={i} data={e} />);

  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <Banner />
      <div>
        <OurHighLightsIcon height={110} />
      </div>
      <Carousel
        elements={elements}
        slidesPerView={innerWidth >= 1440 ? 7 : innerWidth > 640 ? 4 : 2}
      />
      <div>
        <OurServiceIcon width={200} height={110} />
      </div>
      <div className="w-full min-h-[300px] h-full grid grid-cols-2 md:grid-cols-5 gap-4 px-4 mb-4">
        {services.map(({ name, background }, i) => (
          <ServiceCard key={i} name={name} background={background} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
