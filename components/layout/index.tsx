"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { navbarService } from "../../services/navbar.service";
import { INavbar } from "../../services/types/navbar";

const Headers = () => {
  const pathname = usePathname();

  const [layoutData, setLayoutData] = useState<INavbar>();
  const getData = async () => {
    const { data } = await navbarService.getNavbar().then(({ data }) => data);
    if (data) {
      setLayoutData(data);
      localStorage.setItem("bookNowLinkTo", data.bookNowLinkTo);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Navbar maxWidth="full" style={{ background: "#BE1C2D", color: "#fff" }}>
      <NavbarBrand>
        {layoutData && layoutData.logo.mediaUrl ? (
          <Image
            width={100}
            removeWrapper
            src={layoutData.logo.mediaUrl}
            alt={layoutData.logo.alt}
          />
        ) : (
          <p className="font-UQY text-[32px]">Wine101</p>
        )}
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-10" justify="end">
        {layoutData &&
          layoutData.menu &&
          layoutData.menu.map((e) => (
            <NavbarItem key={e.id}>
              <Link
                className="text-white font-bold text-[18px] uppercase"
                href={!!e.linkTo ? e.linkTo : "#"}
              >
                {e.buttonTitle}
              </Link>
            </NavbarItem>
          ))}
        {/* <NavbarItem>
          <Link className="text-white font-bold text-[18px] " href="/">
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white font-bold text-[18px]"
            href="/service/wine-profile-workshop"
          >
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
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent className="flex lg:hidden p-2">
        <NavbarMenuToggle className="text-[#6B7E60] ml-auto" />
      </NavbarContent>
      <NavbarMenu className="w-full items-center pt-6">
        <NavbarMenuItem>
          <Button
            radius="full"
            variant="light"
            className={`${
              pathname === "/about-us" && " !text-white font-bold"
            } cursor-pointer text-primary`}
          >
            About us
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            href="/service/wine-profile-workshop"
            radius="full"
            variant="light"
            className={`${
              pathname === "/our-service" && " !text-white font-bold"
            } cursor-pointer text-primary`}
          >
            Our service
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            radius="full"
            variant="light"
            className={`${
              pathname === "/our-highlights" && " !text-white font-bold"
            } cursor-pointer text-primary`}
          >
            Our highlights
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            radius="full"
            variant="light"
            className={`${
              pathname === "/wine-cellar" && " !text-white font-bold"
            } cursor-pointer text-primary`}
          >
            Wine Cellar
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
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
