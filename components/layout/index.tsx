import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

const Headers = () => {
  return (
    <Navbar maxWidth="full" style={{ background: "#BE1C2D", color: "#fff" }}>
      <NavbarBrand>
        <p className="font-UQY text-[32px]">Wine101</p>
      </NavbarBrand>
      <NavbarContent className="gap-10" justify="end">
        <NavbarItem>
          <Link className="text-white font-bold text-[18px] " href="#">
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-bold text-[18px]" href="#">
            OUR SERVICE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white font-bold text-[18px] flex-col flex"
            href="#"
          >
            <div>OUR</div>
            <div>HIGHLIGHTS</div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <div className="flex-row flex items-center gap-4">
            <Link className="text-white font-bold text-[18px]" href="#">
              WINE CELLAR
            </Link>
            <div className="h-[25px] w-[1px] bg-white" />
            <Image
              width={20}
              height={20}
              removeWrapper
              className="m-auto"
              src="/images/layout/bag.png"
              alt="Shopping bag"
            />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Headers />
      {children}
    </div>
  );
}
