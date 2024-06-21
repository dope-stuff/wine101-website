import { Image } from "@nextui-org/react";
import BagIcon from "../common/images/bag";
import { IProduct } from "../../services/types/product";

interface WineCardProps {
  data: IProduct;
}
export default function WineCard({ data }: WineCardProps) {
  // const { name, image_url, type, country, wine_type, price, color } = data;
  const categories = [data.type.value, data.tags[0].value];
  data.collection;
  return (
    <div className="h-full flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div
        className="relative w-full h-[160px] flex-row flex justify-center items-center"
        // style={{ backgroundColor: color }}
      >
        <Image
          width={100}
          height={120}
          className="max-h-[160px] object-contain"
          src={data.thumbnail}
          alt=""
        />
      </div>
      <div>{data.title}</div>
      <div className="flex-row flex items-center gap-2">
        {categories.map((c, index) => (
          <div key={index} className="p-2 rounded-full">{c}</div>
        ))}
      </div>
      <div className="ml-auto mt-auto">
        <div className="flex-row flex whitespace-nowrap items-center gap-2">
          <div>
            {(data.variants[0].prices[0].amount/100).toLocaleString()}{" "}
            {data.variants[0].prices[0].currency_code.toUpperCase()}
          </div>
          <BagIcon width={20} color="black" className="text-black" />
        </div>
      </div>
    </div>
  );
}
