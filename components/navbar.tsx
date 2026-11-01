import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto grid h-16 grid-cols-3 items-center px-4">

        {/* Logo - Left */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
        </Link>

        {/* Empty middle column */}

        {/* Buttons - Center */}
        <div className="col-start-2 flex items-center justify-center gap-4">
          <Link href="/sign-in">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-black"
            >
              Log-In
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="bg-primary hover:bg-primary/90">
              Start for Free
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}
