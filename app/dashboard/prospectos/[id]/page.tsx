import { BtnCrear } from "@/components/comunes/BtnCrear"
import { TableProspectosId } from "@/components/prospectos/components/TableProspectosId"

export default function Prospectos({ params }: any) {
    const { id } = params
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-16 py-10 mt-1 shadow-xl ">
                    <p className="font-black text-xl">Prospectos</p>

                    {/*BUSCADOR*/}
                    <div className="flex justify-between items-center mt-5">

                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="fa-solid fa-magnifying-glass text-gray-300"></i>
                            </span>
                            <input className="block bg-colorInput text-gray-400 w-full lg:w-72 xl:w-72 border rounded-md py-2 pl-9 pr-3 shadow-lg font-medium" placeholder="Buscar prospecto" type="text" id="search" />
                        </label>

                        <div className="flex gap-3">
                            <i className="fa-solid fa-file-excel text-gray-400 fa-2x focus:text-green-500"></i>
                            <i className="fa-solid fa-file text-gray-400 fa-2x focus:text-red-500"></i>
                            <i className="fa-solid fa-print text-gray-400 fa-2x focus:text-blue-500"></i>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between">
                        <p className="font-black text-xl">Prospectos Curso SIAF Básico</p>
                        <BtnCrear tipo={"dashboard/prospectos/crearprospecto"} />
                    </div>

                    <TableProspectosId/>
                </div>
            </div>

        </div>  
    )
}