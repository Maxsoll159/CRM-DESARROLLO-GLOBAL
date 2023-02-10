import { TableAlumnosId } from "@/components/alumnos/TableAlumnosId"

export default function AlumnosId({ params }: any) {
    const { id } = params
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-16 py-10 mt-1">
                    <p className="font-black text-xl mb-5">Lista de Alumnos</p>
                    <TableAlumnosId />
                </div>
            </div>
        </div>
    )
}