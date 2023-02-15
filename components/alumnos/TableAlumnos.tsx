"use client"
import { DatosProspectos } from "@/helpers/DatosProspectos";
import { useFiltrosTable } from "@/hooks/useFiltrosTable";
import DataTable, { TableColumn } from "react-data-table-component";
import { AccionesPros } from "../comunes/AccionesPros";
import { DataPros } from "../prospectos/interfaces/InterfaceProsp";
import { FiltrosAlumnos } from './Filtros';

const columns: TableColumn<DataPros>[] = [
    {
        name: 'Nombre de Programa',
        sortable: true,
        cell: row => <div className="flex items-center gap-6 p-2 w-full"><img src={row.logo} alt="" className="w-10" /><p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p></div>,
        width: "35rem"
    },
    {
        name: 'Categoria',
        sortable: true,
        cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.categoria}</p>
    },
    {
        name: 'Modalidad',
        sortable: true,
        cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.modalidad}</p>
    },
    {
        name: 'Alumnos',
        sortable: true,
        cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.prospectos}</p>
    },
    {
        name: 'Fecha',
        sortable: true,
        cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fecha}</p>
    },
    {
        name: 'Acciones',
        cell: row => <AccionesPros id={row.id} tipo={"alumnos"} />
    }

];
export default function TableAlumnos () {
    const [setFilterText, setFilterSelect, setFiltroFechas,filteredAccounts ] = useFiltrosTable(DatosProspectos)
    return (
        <>
        <button>Crear Alumno</button>
        <FiltrosAlumnos setFilterText={setFilterText}  setFilterSelect={setFilterSelect} setFiltroFechas={setFiltroFechas} />
        <DataTable
            columns={columns}
            data={filteredAccounts}
            pagination
            highlightOnHover
            selectableRows
        />
        </>
    )
}