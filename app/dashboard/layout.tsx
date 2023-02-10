import Navbar from "@/components/Navbar/Navbar";
import Menu from '@/components/Navbar/Menu';



export default function LayoutDash({ children, }: { children: React.ReactNode }) {
    return (


        <body className="bg-white">

            <div className="flex items-start">
                <Menu />
                <div className="w-full space-y-11">
                    <Navbar />
                    {children}
                </div>
                

            </div>







        </body>

    )
}
