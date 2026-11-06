import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default async function Navbar() {
  const session = await getSession()

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
          {session?.user ?(<>
          <Link href="/dashboard">
          <Button variant="ghost" className="text-gray-700 hover:text-black">Dashboard</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
              <Avatar>
                <AvatarFallback className="bg-primary text-white">{session.user.name[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div><p>{session.user.name}</p></div>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          

          </>):(<>  
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
          </>)}
        </div>

      </div>
    </nav>
  );
}
