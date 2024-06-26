import { Image } from "@nextui-org/react";
import BagIcon from "@/modules/common/images/bag";
import { IProduct } from "@/lib/data/models/product";

interface WineCardProps {
  data: IProduct;
  theme: {
    textColor: string;
    bgColor: string;
    type: string;
  };
}
export default function WineCard({ data, theme }: WineCardProps) {
  const categories = [
    data.type.value,
    data.tags[0].value,
    data.categories[0].name,
  ];

  return (
    <div className="min-w-[250px] w-full h-full flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div
        className="relative w-full h-[160px] flex-row flex justify-center items-center"
        style={{ backgroundColor: theme.bgColor }}
      >
        <Image
          width={100}
          height={120}
          className="max-h-[160px] object-contain p-2"
          src={data.thumbnail}
          alt=""
        />
      </div>
      <div>{data.title}</div>
      <div className="flex-row flex flex-wrap items-center gap-2">
        {categories.map((c, index) => (
          <div
            key={index}
            className="px-2 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: theme.bgColor }}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="ml-auto mt-auto">
        <div className="flex-row flex whitespace-nowrap items-center gap-2">
          <div>
            {(data.variants[0].prices[0].amount / 100).toLocaleString()}{" "}
            {data.variants[0].prices[0].currency_code.toUpperCase()}
          </div>
          <BagIcon width={20} color="black" className="text-black" />
        </div>
      </div>
    </div>
  );
}
