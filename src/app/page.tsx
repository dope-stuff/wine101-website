import { Button, Link } from "@nextui-org/react";
import Banner from "../../components/home/banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Link href="https://dope-stuff.github.io/wine101-landing-page">
        <Button>next button</Button>
      </Link>
    </main>
  );
}
