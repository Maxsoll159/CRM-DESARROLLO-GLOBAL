"use client"
import DataTable, { TableColumn } from "react-data-table-component";
import { AlumnosPros2 } from '../prospectos/interfaces/InterfaceProsp';
import { BtnHistorial } from "../comunes/BtnHistorial";
import { DatosAlumno } from "@/helpers/DatosAlumnos";
import { Opciones } from "../comunes/Opciones";
import { FilterComponent } from "../datatable/components/FilterComponent";
import { useFiltrosTable } from "@/hooks/useFiltrosTable";
const columns: TableColumn<AlumnosPros2>[] =
    [
        {
            name: 'DNI',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.dni}</p>,
            width: '100px',
        },
        {
            name: 'NOMBRE',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p>
        },
        {
            name: 'CORREO',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.correo}</p>
        },
        {
            name: 'TELEFONO',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.telefono}</p>
        },
        {
            name: 'ESTADO PROGRAMA',
            sortable: true,
            cell: row => row.estado,
            center: true,
            style: {
                color: 'white',
                fontSize: "15px",
                margin: "4px",
                borderRadius: "5px",
                fontWeight: 700
            },
            conditionalCellStyles: [
                {
                    when: row => row.estado === "Culminado",
                    style: {
                        backgroundColor: '#4AD69D',
                    }
                },
                {
                    when: row => row.estado === "En Curso",
                    style: {
                        backgroundColor: '#0073EA',
                    }
                },
                {
                    when: row => row.estado === "No Iniciado",
                    style: {
                        backgroundColor: '#E2445C',
                    }
                }

            ]
        },
        {
            name: 'HISTORIAL',
            sortable: true,
            center: true,
            cell: () => <BtnHistorial />
        },
        {
            name: 'FECHA DE REGISTRO',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fechaRegistro}</p>
        },
        {
            cell: row => <Opciones id={row.id} row={row} size="small" />,
            allowOverflow: true,
            button: true,
            width: '56px',
        }
    ];
export const TableAlumnosId = () => {
    const [setFilterText, , , , filteredItems] = useFiltrosTable(DatosAlumno[0].alumnosPros)
    return (
        <>
            <FilterComponent setFilterText={setFilterText} tipo={"Buscar Alumno"} />
            <div className="flex mt-5 items-center justify-between">
                <p className="font-black text-lg">Alumnos Curso SIAF Básico</p>
                <div className="flex items-center gap-2">
                    <button className="border-2 border-sky-400 rounded-full text-sky-400 font-semibold px-3 py-2 flex items-center gap-2"><i className="fa-solid fa-check"></i>Convertir en Alumno</button>
                    <button className="text-white bg-sky-400 rounded-full px-3 py-2 flex items-center gap-2 border-2 border-sky-400"><i className="fa-solid fa-plus"></i>Agregar Nuevo</button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                highlightOnHover
                selectableRows
                pagination
            />

        </>

    )
}