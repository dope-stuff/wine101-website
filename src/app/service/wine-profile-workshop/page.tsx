import { Image } from "@nextui-org/react";
import Carousel from "../../../../components/carousel";
import Way1O1Icon from "../../../../components/common/images/way-1o1";
import BeginnerFriendlyIcon from "../../../../components/common/images/101-way/beginner-friendly";
import ExploreTastebudsIcon from "../../../../components/common/images/101-way/explore-tastebuds";
import CreateWineProfileIcon from "../../../../components/common/images/101-way/create-wine-profile";
import EnjoyBeingYourselfIcon from "../../../../components/common/images/101-way/enjoy-being-yourself";
import WorkShopCard from "../../../../components/card/workshop";
import WineProfileWorkshopHeader from "../../../../components/services/wine-profile-workshop/header";
import Comments from "../../../../components/services/wine-profile-workshop/comments";
import Footer from "../../../../components/footer";

export default function WineProfileWorkshop() {
  const banners = [
    <Image
      key="1"
      removeWrapper
      className="max-h-[40vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
    <Image
      key="2"
      removeWrapper
      className="max-h-[40vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
  ];
  const data = [
    {
      name: "101 beginner friendly",
      image: <BeginnerFriendlyIcon />,
      maxWidth: 440,
      description:
        "เหมาะสำหรับมือใหม่ Beginner Friendly ไม่เป็นก็เริ่มได้ เรียนรู้พื้นฐานไวน์ เริ่มจาก 0 ง่ายกว่านี้ไม่มีแล้ว",
    },
    {
      name: "explore your tastebuds",
      image: <ExploreTastebudsIcon />,
      maxWidth: 600,
      description:
        "เพราะอร่อยแต่ละคนไม่เหมือนกัน เราจัดมาให้กับ ไวน์ 4 ประเภท 7 ขวด ต่างรส ต่างองุ่น จากหลากหลายประเทศ ให้ทุกคนได้ลองและค้นหาไวน์ที่ตัวเองชอบ",
    },
    {
      name: "create your wine profile",
      image: <CreateWineProfileIcon />,
      maxWidth: 460,
      description:
        "เลิกงงเวลาเลือกซื้อไวน์ ทำ wine profile ของตัวเอง ครั้งหน้ารู้เลยต้องสั่งยังไง",
    },
    {
      name: "enjoy being yourself",
      image: <EnjoyBeingYourselfIcon />,
      maxWidth: 450,
      description:
        "บรรยากาศเหมือนนั่งชิมกับเพื่อน ปิดมู้ดการชิมไวน์แบบซีเรียส Workshop บรรยากาศ สนุก เป็นกันเอง",
    },
  ];

  const workshops = [
    {
      title: "workshop 1 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 1 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 2 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 3 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 4 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 5 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 6 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 7 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
    {
      title: "workshop 8 ",
      subtitle: "halloween night",
      createdAt: "29 october 2023",
    },
  ];

  const comments = [
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
    "คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที",
  ];

  const splitArray = (arr: string[]): string[][] => {
    return arr.reduce((acc, curr, index) => {
      if (index % 4 === 0) {
        acc.push(arr.slice(index, index + 4));
      }
      return acc;
    }, [] as string[][]);
  };

  return (
    <>
      <div className="w-full max-w-screen-2xl justify-center flex-col flex items-center mx-auto">
        <Carousel
          elements={banners}
          slidesPerView={1}
          arrowColor="white"
          gap="0"
        />
        <WineProfileWorkshopHeader />
        <div className="w-[90%] flex-col flex mt-4">
          <Way1O1Icon />
          {data.map((e, i) => (
            <div
              key={i}
              className={`flex-row flex items-center gap-4 ${
                i % 2 !== 0 ? "justify-end" : ""
              }`}
            >
              <div className="max-h-[280px]">{e.image}</div>
              <div className="flex-col flex">
                <div className="text-[44px]">{e.name}</div>
                <div
                  className="font-doggy text-[27px]"
                  style={{ maxWidth: e.maxWidth }}
                >
                  {e.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full pl-10">
          <div className="uppercase text-[36px] my-2">our workshop</div>
          <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
            {workshops.map((ws, i) => (
              <WorkShopCard key={i} data={ws} />
            ))}
          </div>
        </div>
        <div className="uppercase text-[60px] my-4">
          how people talk about us
        </div>
        <Carousel
          elements={splitArray(comments).map((e, i) => (
            <Comments key={i} comments={e} />
          ))}
          slidesPerView={1}
          gap="0"
        />
        <div className="mb-10" />
      </div>
      <Footer />
    </>
  );
}
