import Navbar from "@/components/Navbar/Navbar";
import Menu from '@/components/Navbar/Menu';



export default function LayoutDash({ children, }: { children: React.ReactNode }) {
    return (


        <body className="bg-bg-fondoDas">
            <div className="w-full h-full">
                <Navbar />
                <div className="container mx-auto py-10">
                    <div className="w-full flex gap-5">
                        <Menu />
                        {children}
                    </div>
                </div>
            </div>
        </body>

    )
}
