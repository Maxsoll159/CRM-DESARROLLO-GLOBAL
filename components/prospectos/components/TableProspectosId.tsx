"use client"
import DataTable, { TableColumn } from "react-data-table-component";
import { DatosUnicos } from '@/helpers/DatosProspectos';


import { AlumnosPros } from '../interfaces/InterfaceProsp';
import { OpcionesProps } from "@/components/comunes/OpcionesProsp";
import { Opciones } from "@/components/comunes/Opciones";
const columns: TableColumn<AlumnosPros>[] =
    [
        {
            name: 'NOMBRES',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p>
        },
        {
            name: 'MEDIO',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.medio}</p>
        },
        {
            name: 'PROGRAMA',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.programa}</p>
        },
        {
            name: 'ESTADO',
            sortable: true,
            cell: row => row.estado,
            center:true,
            style:{
                color: 'white',
                fontSize: "15px",
                margin: "4px",
                borderRadius: "5px",
                fontWeight: 700
            },
            conditionalCellStyles: [
                {
                    when: row => row.estado === "Comprado",
                    style: {
                        backgroundColor: '#4ad69d',
                    }
                },
                {
                    when: row => row.estado === "No desea",
                    style: {
                        backgroundColor: '#e2445c',
                    }
                },
                {
                    when: row => row.estado === "En curso",
                    style: {
                        backgroundColor: '#fdab3d',
                    }
                }

            ]
        },
        {
            sortable: true,
            center: true,
            cell: () => <OpcionesProps />
        },
        {
            name: 'CORREO',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.correo}</p>
        },
        {
            name: 'FECHA',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fechaRegistro}</p>
        },
        {
            cell: row => <Opciones id={row.id} row={row} />,
            allowOverflow: true,
            button: true,
            width: '56px',
        }
    ];
export const TableProspectosId = () => {
    return (
        <DataTable
            columns={columns}
            data={DatosUnicos[0].alumnosPros}
            highlightOnHover
        />
    )
}