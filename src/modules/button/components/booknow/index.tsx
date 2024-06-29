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
      className="h-[50px] rounded-full pt-2 pb-2 px-6 text-2xl leading-8 text-white bg-primary-1"
      onClick={onBookNow}
    >
      Book Now!
    </button>
  );
}
