import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-gray-100 text-sky-900 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          1st choice for companies
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-zinc-800 mb-6">
          Agile made simple with
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-sky-900 to-sky-700 text-white px-4 p-2 rounded-md pb-4 w-fit">
          SprintEase.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-zinc-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        &quot;SprintEase: Redefining Agile project management. Seamlessly
        streamline sprints, foster collaboration, and boost productivity. With
        its intuitive interface and powerful tools, it&apos;s the key to agile
        success.&quot;
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Start free plan</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
