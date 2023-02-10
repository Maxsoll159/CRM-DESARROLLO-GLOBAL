

import dynamic from "next/dynamic";
const TableAlumnos = dynamic(() => import("@/components/alumnos/TableAlumnos"), { ssr: false })

export default function Alumnos() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
                    <p className="font-black text-xl">Busqueda de Alumnos</p>
                    <TableAlumnos />
                </div>
            </div>
        </div>

    )
}