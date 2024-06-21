import Home from "../../components/home";

import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Wine1O1 Website",
// };

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Home />
    </main>
  );
}
