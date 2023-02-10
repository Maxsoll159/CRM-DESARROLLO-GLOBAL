"use client"
import { DatosProspectos } from "@/helpers/DatosProspectos";

import DataTable, { TableColumn } from "react-data-table-component";
import { AccionesPros } from "../../comunes/AccionesPros";
import { BotonProspectos } from './BotonProspectos';
import { DataPros } from '../interfaces/InterfaceProsp';
import { useFiltrosTable } from "@/hooks/useFiltrosTable";


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
        name: 'Prospectos',
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
        cell: row => <AccionesPros id={row.id} tipo={"prospectos"} />
    }
];
export default function TableProspectos() {

    const [setFilterText, setFilterSelect, setFiltroFechas,filteredAccounts ] = useFiltrosTable(DatosProspectos)

    return (
        <>
            <BotonProspectos setFilterText={setFilterText} setFilterSelect={setFilterSelect} setFiltroFechas={setFiltroFechas} />
            <DataTable
                columns={columns}
                data={filteredAccounts}
                pagination
                highlightOnHover
            />
        </>
    )
}