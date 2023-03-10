"use client"
import DataTable, { TableColumn } from 'react-data-table-component';
import { data } from './interface/data';
import { DataRow } from './interface/interfaceData';
import { FilterComponent } from './components/FilterComponent';
import { useState } from 'react';
import { useExportExcel } from '@/hooks/useExportExcel';
import { Opciones } from '../comunes/Opciones';
import { BtnHistorial } from '../comunes/BtnHistorial';

const columns: TableColumn<DataRow>[] = [
    {
        name: 'COD',
        sortable: true,
        selector: row => row.Id,
        width: "6rem"
    },
    {
        name: 'NOMBRE',
        sortable: true,
        selector: row => row.Nombre,
        width: "17rem",
    },
    {
        name: 'DNI',
        sortable: true,
        selector: row => row.Dni,
        width: "6rem"
    },
    {
        name: 'CATEGORIA',
        sortable: true,
        selector: row => row.Categoria,
        width: "6rem"
    },
    {
        name: 'PROGRAMA',
        sortable: true,
        selector: row => row.Programa,
        width: "20rem",
    },
    {
        name: 'HISTORIAL',
        sortable: true,
        cell: ()=>  <BtnHistorial />,
        width: "6rem"
    },
    {
        name: 'CERTIFICADO',
        sortable: true,
        cell: () => <i className='fi fi-rr-diploma fa-2x text-gray-400'></i>,
        width: "6rem",
        center: true
    },
    {
        name: 'ESTADO',
        sortable: true,
        cell: row => row.estado,
        center: true,
        width: "9rem",
        style: {
            color: 'white',
            fontSize: "15px",
            margin: "4px",
            borderRadius: "5px"
        },
        conditionalCellStyles: [
            {
                when: row => row.estado === "Entregado",
                style: {
                    backgroundColor: '#4AD69D',
                }
            },
            {
                when: row => row.estado === "Oficina",
                style: {
                    backgroundColor: '#4A53D6',
                }
            },
            {
                when: row => row.estado === "Aula Virtual",
                style: {
                    backgroundColor: '#FAFAFA',
                    border: "1px solid gray",
                    color: "gray"
                }
            },
            {
                when: row => row.estado === "Olva",
                style: {
                    backgroundColor: '#FDAB3D',
                }
            },
            {
                when: row => row.estado === "Pendiente",
                style: {
                    backgroundColor: '#2BBC10',
                }
            }

        ]
    },
    {
        name: 'FECHA',
        sortable: true,
        selector: row => row.Mes,
        center: true
    },
    {
        cell: row => <Opciones id={row.Id} row={row} size="small" />,
        allowOverflow: true,
        button: true,
    }

];

export default function TableData() {
    const [filterText, setFilterText] = useState<string>('');

    const filteredItems = data.filter((item: any) => item.Nombre && item.Nombre.toLowerCase().includes(filterText.toLowerCase()),);



    const [downloadCSV] = useExportExcel(filteredItems)


    return (
        <>
            <div className='w-full flex justify-between items-center mt-5'>
                <FilterComponent setFilterText={setFilterText} tipo={"Buscar Certificados"} />
                <div className="flex gap-3">
                    <button onClick={() => downloadCSV(filteredItems)} ><i className="fa-solid fa-file-excel text-gray-400 fa-2x focus:text-green-500"></i></button>
                    <i className="fa-solid fa-file text-gray-400 fa-2x focus:text-red-500"></i>
                    <i className="fa-solid fa-print text-gray-400 fa-2x focus:text-blue-500"></i>
                </div>
            </div>
            <div className='w-full flex justify-end mt-5'>
                <button className="text-white bg-sky-400 rounded-full px-3 py-2 flex items-center gap-2 border-2 border-sky-400"><i className="fa-solid fa-plus"></i>Agregar Nuevo</button>
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
            />
        </>


    )
}