"use client";
import { useEffect, useState } from "react";
import { homeService } from "../../services/home.service";
import dayjs from "dayjs";

import Banner from "../../components/home/banner";
import OurHighLightsIcon from "../common/images/our-highlights";
import Carousel from "../../components/carousel";
import WineCard from "../../components/card/wine";
import OurServiceIcon from "../common/images/our-service";
import ServiceCard from "../../components/card/service";
import Footer from "../../components/footer";
import { IHome } from "../../services/types/home";
import { workshopService } from "../../services/workshop.service";
import Event from "./event";
import { IWorkshop } from "../../services/types/workshop";
import { productService } from "../../services/product.service";
import { IProduct } from "../../services/types/product";
import FlasksIcon from "../common/images/flasks";

export default function Home() {
  const [wines, setWines] = useState([]);
  const [pageData, setPageData] = useState<IHome>();
  const [events, setEvents] = useState<IWorkshop>();

  const getData = async () => {
    const { data } = await homeService.get();
    if (data) {
      setPageData(data.data);
    }
  };
  const getEventData = async () => {
    const { data } = await workshopService.get(dayjs().format("YYYY-MM-DD"));
    if (data) {
      setEvents(data.data[0]);
    }
  };
  const getWineData = async () => {
    const { data } = await productService.getProduct();
    if (data) {
      setWines(
        data.products.map((e: IProduct, i: number) => {
          let theme = {
            textColor: "#B23A57",
            bgColor: "#961937",
            type: "red",
          };
          switch (e.categories[0].name) {
            case "Red Wine":
              theme = {
                textColor: "#B23A57",
                bgColor: "#961937",
                type: "red",
              };
              break;
            case "White Wine":
              theme = {
                textColor: "#AEC5A4",
                bgColor: "#90AD83",
                type: "white",
              };
              break;
            case "Sparkling Wine (Champagne)":
              theme = {
                textColor: "#ECCB7B",
                bgColor: "#D3AF61",
                type: "sparkling",
              };
              break;
            case "Rosé Wine":
              theme = {
                textColor: "#F88D97",
                bgColor: "#F16471",
                type: "rose",
              };
              break;
            case "Ice Wine":
              theme = {
                textColor: "#8AB5CD",
                bgColor: "#6690A7",
                type: "ice",
              };
              break;
            default:
              theme = {
                textColor: "#5C5C5C",
                bgColor: "#2F2F2F",
                type: "other",
              };
              break;
          }
          return <WineCard key={i} data={e} theme={theme} />;
        })
      );
    }
  };
  useEffect(() => {
    getData();
    getEventData();
    getWineData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    pageData && (
      <div className="w-screen flex flex-col items-center gap-4">
        {events && <Event data={events} />}
        <Banner data={pageData.header} />
        <div>
          <OurHighLightsIcon width={500} height={200} />
        </div>
        <div className="w-full hidden 2xl:block px-4 py-2">
          <Carousel elements={wines} slidesPerView={7} />
        </div>
        <div className="w-full hidden sm:block 2xl:hidden px-4 py-2">
          <Carousel elements={wines} slidesPerView={4} />
        </div>
        <div className="w-full sm:hidden px-4 py-2">
          <Carousel elements={wines} slidesPerView={4} />
        </div>
        <div className="flex-row flex items-center flex-nowrap gap-8 text-[50px] my-4">
          <FlasksIcon />
          {pageData.servicesTitle}
          <FlasksIcon />
        </div>
        <div className="w-full min-h-[300px] h-full grid grid-cols-2 md:grid-cols-5 gap-4 px-4 mb-4">
          {pageData.services.map((data, i) => (
            <ServiceCard key={i} data={data} />
          ))}
        </div>
        <Footer />
      </div>
    )
  );
}
