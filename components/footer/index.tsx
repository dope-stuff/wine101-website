"use client";

import SocialGroupIcon from "../common/images/social-group";

const List = ({
  title,
  list,
}: {
  title: string;
  list: { label: string; value: string }[];
}) => {
  const handleClick = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <div className="text-[24px]">{title.toUpperCase()}</div>
      <div className="flex-col flex">
        {list.map((e, i) => (
          <a key={i} href="#" onClick={() => handleClick(e.value)}>
            {e.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const data = [
    {
      title: "About you",
      list: [
        { label: "Favorite wine", value: "Favorite wine" },
        { label: "Orders", value: "Orders" },
        { label: "Your history", value: "Your history" },
      ],
    },
    {
      title: "our service",
      list: [
        { label: "Wine Workshop", value: "Wine Workshop" },
        { label: "Event ", value: "Event " },
        { label: "Collaboration", value: "Collaboration" },
        { label: "Pop-up", value: "Pop-up" },
        { label: "Wedding ", value: "Wedding " },
      ],
    },
    {
      title: "our wines",
      list: [
        { label: "All wines", value: "All wines" },
        { label: "Best Seller", value: "Best Seller" },
        { label: "Sparkling Wine", value: "Sparkling Wine" },
        { label: "Rose  Wine", value: "Rose  Wine" },
        { label: "White  Wine", value: "White  Wine" },
        { label: "Red  Wine", value: "Red  Wine" },
      ],
    },
  ];
  return (
    <div className="bg-[#BE1C2D] text-white w-full flex-row flex items-center justify-evenly gap-4 flex-wrap p-4">
      <p className="font-UQY text-[32px]">Wine101</p>
      {data.map((e, i) => (
        <List key={i} title={e.title} list={e.list} />
      ))}
      <div className="flex-col flex items-center">
        <div>101 talk</div>
        <div>wine101.wine@gmail.com</div>
        <div>Bangkok, Thailand</div>
        <SocialGroupIcon />
      </div>
    </div>
  );
};

export default Footer;
