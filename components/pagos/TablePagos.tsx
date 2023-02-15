"use client"
import { DataPagos } from '@/helpers/DataPagos';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Opciones } from '../comunes/Opciones';
import { DataPagosd } from './interface';

const columns: TableColumn<DataPagosd>[] = [
    {
        name: 'ID',
        sortable: true,
        selector: row => row.id,
        width: "3rem"
    },
    {
        name: 'EDITOR',
        sortable: true,
        cell: row => <img src={row.editor[0].foto} alt={row.editor[0].foto} width="30" className='rounded-full' />,
        width: "4rem"
    },
    {
        name: 'FECHA VOUCHER',
        sortable: true,
        selector: row => row.fechaVoucher,
        width: "7rem"
    },
    {
        name: 'MEDIO PAGO',
        sortable: true,
        selector: row => row.medioPago,
        width: "9rem"
    },
    {
        name: 'PAGO',
        sortable: true,
        cell: row => <p>S/. {row.pago}</p>,
        width: "7rem",
    },
    {
        name: 'COMPROBANTE',
        sortable: true,
        selector: row => row.comprobante,
        width: "6rem"
    },
    {
        name: 'ALUMNO',
        sortable: true,
        cell: row => row.nombre,
        width: "9rem"
    },
    {
        name: 'PROGRAMA',
        sortable: true,
        selector: row => row.programa,
        center: true
    },
    {
        name: 'HISTORIAL',
        sortable: true,
        center: true,
        width: "6rem"
    },
    {
        name: 'ESTADO',
        sortable: true,
        cell: row => row.estado,
        center: true,
        width: "8rem",
        style: {
            color: 'white',
            fontSize: "15px",
            margin: "4px",
            borderRadius: "5px",
        },
        conditionalCellStyles: [
            {
                when: row => row.estado === "PAGADO",
                style: {
                    backgroundColor: '#4AD69D',
                }, 
            },
            {
                when: row => row.estado === "PENDIENTE",
                style:{
                    backgroundColor: '#FDAB3D'
                }
            },
            {
                when: row => row.estado === "DEUDOR",
                style: {
                    backgroundColor: '#FAFAFA',
                    border: "1px solid gray",
                    color: "gray"
                }
            }
        ]
    },
    {
        cell: row => <Opciones id={row.id} row={row} size="small" />,
        allowOverflow: true,
        button: true,
    }

];
export default function TablePagos() {
    return (
        <DataTable
            columns={columns}
            data={DataPagos}
            pagination
            highlightOnHover
        />
    )
}