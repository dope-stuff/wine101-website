"use client";
import { useEffect, useState } from "react";

export default function BookNowButton() {
  const [bookNowLinkTo, setBookNowLinkTo] = useState("");

  const onBookNow = () => {
    window.open(bookNowLinkTo, "_blank");
  };

  useEffect(() => {
    const linkto = localStorage.getItem("bookNowLinkTo");
    if (linkto) {
      setBookNowLinkTo(linkto);
    }
  }, []);
  return (
    <button
      className="bg-primary max-h-[50px] rounded-full pt-2 pb-3 px-4 text-3xl leading-8 text-white border border-black"
      onClick={onBookNow}
    >
      Book Now!
    </button>
  );
}
