import { Briefcase } from "lucide-react"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <div>
                <Link href="/" className="flex items-center gap">
                <Briefcase/>
                </Link>
                
            </div>
        </nav>
    )
}