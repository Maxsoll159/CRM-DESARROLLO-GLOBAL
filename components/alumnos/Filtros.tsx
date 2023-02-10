import { FilterComponent } from "../datatable/components/FilterComponent"
import { FiltroFechas } from "../datatable/components/FiltroFechas"

export const FiltrosAlumnos = ({ setFilterText, setFiltroFechas, setFilterSelect }: any) => {
    const button = [{
        id: "1",
        name: "TODOS",
        filtro: ""
    },
    {
        id: "2",
        name: "CURSO",
        filtro: "CURSO"
    },
    {
        id: "3",
        name: "DIPLOMAS",
        filtro: "DIPLOMA"
    },
    {
        id: "4",
        name: "DIPLOMADOS",
        filtro: "DIPLOMADOS"
    }
    ]

    const handleChange2 = (e: any) => {
        setFilterSelect(e.target.value)
    }

    return (
        <div className="w-full flex justify-between items-center my-5">
            <div className="flex gap-4 xl:gap-10 lg:gap-10 items-center flex-wrap w-full justify-between">

                {/*AQUI VA EL INPUT*/}

                <FilterComponent setFilterText={setFilterText} tipo={"Buscar Curso y Programas"} />

                <select name="Modalidad" id="wenas" onChange={(e) => handleChange2(e)} className="py-2 px-3 rounded-lg shadow-lg bg-colorInput border text-gray-400 font-medium flex !flex-row-reverse w-full lg:w-1/6 xl:w-1/6 md:w-1/2">
                    {
                        button.map((opc) => (
                            <option key={opc.id} value={opc.filtro}>{opc.name}</option>
                        ))
                    }
                </select>

                {/*Aqui va el input */}
                <FiltroFechas setFiltroFechas={setFiltroFechas} />
            </div>
        </div>
    )
}