
import dynamic from "next/dynamic";
const TableProspectos = dynamic(() => import("@/components/prospectos/components/TableProspectos"), { ssr: false })
export default function Prospectos() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    <p className="font-black text-xl">Listado de Prospectos</p>
                    <TableProspectos/>
                </div>
            </div>
        </div>

    )
}