import { Image } from "@nextui-org/react";
import BagIcon from "../common/images/bag";

interface WineCardProps {
  data: {
    name: string;
    image_url: string;
    type: string;
    country: string;
    wine_type: string;
    price: number;
    color: string;
  };
}
export default function WineCard({ data }: WineCardProps) {
  const { name, image_url, type, country, wine_type, price, color } = data;
  const categories = [wine_type, country, type];
  return (
    <div className="flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[150px]" style={{ backgroundColor: color }}>
        {/* <Image width={100} height={120} src={image_url} alt="" /> */}
      </div>
      <div>{name}</div>
      <div className="flex-row flex items-center gap-2">
        {categories.map((c, index) => (
          <div key={index}>{c}</div>
        ))}
      </div>
      <div className="ml-auto">
        <div className="flex-row flex whitespace-nowrap items-center gap-2">
          <div>{price.toLocaleString()} THB</div>
          <BagIcon width={20} color="black" className="text-black" />
        </div>
      </div>
    </div>
  );
}
