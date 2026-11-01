"use client"
import Navbar from "@/components/navbar";
import {Button} from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";



export default function Home() {
  const [activeTab,setActiveTab] = useState("organize")
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
        <section className="border t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex gap-2 justify-center mb-8 ">
                <Button onClick={()=>setActiveTab("organize")}>Oragnize Application</Button>
                <Button>Get Hired</Button>
                <Button>Manage Application</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "oraganize" &&<Image 
                src="/Hero-Images/hero1.png"
                alt="Organize Application"
                width={1200}
                height={800}
                />}
                {activeTab ==="hired"&&<Image 
                src="/Hero-Images/hero2.png"
                alt="Organize Application"
                width={1200}
                height={800}
                />}
                {activeTab ==="application" &&<Image 
                src="/Hero-Images/hero3.png"
                alt="Organize Application"
                width={1200}
                height={800}
                />}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
