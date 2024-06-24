import { Image } from "@nextui-org/react";

interface ClientCardProps {
  data: {
    title: string;
    image: string;
  };
}
export default function ClientCard({ data }: ClientCardProps) {
  const { title, image } = data;
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[150px] bg-primary" />
      <div>
        <div>{title}</div>
      </div>
    </div>
  );
}
