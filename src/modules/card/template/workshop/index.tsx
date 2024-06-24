import { Image } from "@nextui-org/react";

interface WorkShopCardProps {
  data: {
    title: string;
    subtitle: string;
    createdAt: string;
  };
}
export default function WorkShopCard({ data }: WorkShopCardProps) {
  const { title, subtitle, createdAt } = data;
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[150px] bg-primary" />
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{createdAt}</div>
      </div>
      <div className="flex-row flex flex-nowrap gap-2 justify-end mt-4">
        <div className="text-[12px]">see more photos</div>
        <a href="https://imgbb.com/">
          <Image
            src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp"
            alt="wine-101-camera"
          />
        </a>
      </div>
    </div>
  );
}
