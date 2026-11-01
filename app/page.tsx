import Image from "next/image";
import {Button} from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return(
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-white mb-6 text-6xl font-bold">A better way to track your job application.</h1>
            <p className="text-muted-foreground mb-10 text-xl">Capture , Organize and manage your job search in one place</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="/sign-up" passHref>
            <Button size="lg" className="text-lg font-medium">Start for free <ArrowRight/> </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Free forvever . No credit card required</p>
          </div>
        </section>
        {/*Hero Image section */}
        <section>

        </section>
      </main>
    </div>
  );
}
