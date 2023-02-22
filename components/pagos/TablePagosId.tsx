"use client"
import { DataPagos } from "@/helpers/DataPagos";
import DataTable, { TableColumn } from "react-data-table-component";
import { DataCuotas } from "./interface";
import { MOdalPagos } from './ModalPagos';
import { useEffect, useState } from 'react';
import { Cargando } from "../otros/Cargando";
const customStyles = {
    headCells: {
        style: {
            padding: "25px",
            backgroundColor: "#F5F6F8",
            fontSize: "13px"
        },
    },
}
const columns: TableColumn<DataCuotas>[] = [
    {
        name: 'COD',
        selector: row => row.id,
        width: "5rem",
        center: true
    },
    {
        name: 'FECHA DE VENC',
        cell: row => row.fechaVencimiento,
        center: true
    },
    {
        name: 'COMPROBANTE',
        selector: row => row.numeroComprobante,
        center: true,
    },
    {
        name: 'MEDIO',
        selector: row => row.medio,
        center: true
    },
    {
        name: 'MONTO',
        cell: row => <p>S/. {row.monto}</p>,
        center: true
    },
    {
        name: 'VOUCHER DE PAGO',
        cell: () => <button><img src="/img/Pagos.gif" alt="" width={35} /></button>,
        center: true
    },
    {
        name: 'FACTURA/ BOLETA',
        cell: () => <button><img src="/img/Boleta.gif" alt="" width={35} /></button>,
        center: true

    },
    {
        name: 'ESTADO DE PAGO',
        sortable: true,
        cell: row => <p className="flex items-center gap-2">{row.estado} <i className={`flex items-center ${row.estado === "Realizado" ? "fi fi-br-check" : "fi fi-rr-cross-small"}`}></i></p>,
        center: true,
        style: {
            padding: "1px",
            margin: "10px",
            borderRadius: "15px",
            fontWeight: "600"
        },
        conditionalCellStyles: [
            {
                when: row => row.estado === "Realizado",
                style: {
                    border: "1px solid #1C71F0",
                    color: "#1C71F0",
                }
            },
            {
                when: row => row.estado === "Pendiente",
                style: {
                    border: "1px solid #FDAB3D",
                    color: "#FDAB3D",
                }
            }
        ]
    },
    {
        name: 'MENSAJE',
        cell: () => <button><img src="/img/Mensaje.gif" alt="" width={35} /></button>,
        center: true

    },
    {
        name: 'EDITAR',
        sortable: true,
        cell: () => <MOdalPagos />,
        center: true,

    }

];
export const TablePagosId = () => {
    const [pending, setPending] = useState(true);
	const [rows, setRows] = useState<any>([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
        setRows(DataPagos[0].cuotas);
        setPending(false);
    }, 2000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <>
            <DataTable
                columns={columns}
                data={rows}
                highlightOnHover
                customStyles={customStyles}
                progressPending={pending}
                progressComponent={<Cargando />}
            />
        </>
    )
}