import { IHeader } from "@/lib/data/models/home";
import { Link } from "@nextui-org/react";

type BannerProps = {
  data: IHeader;
};
export default function Banner({ data }: BannerProps) {
  return (
    data && (
      <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
        <div className="text-[56px] font-bold uppercase">{data.heading}</div>
        <div className="text-[20px] font-medium max-w-[60%] font-doggy">
          {data.subheading}
        </div>
        <Link className="bg-primary rounded-full px-4 text-[30px] text-white border border-black">
          {data.buttonTitle}
        </Link>
      </div>
    )
  );
}
