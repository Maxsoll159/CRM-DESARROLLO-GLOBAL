"use client"
import { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
const cursos = [{
    id: 1,
    nombre: "Contabilidad Gubernamental en el SIAF RP",
    precio: 300,
    horario: "25/02/2023",
    alumnos: 10,
    certifica: "UNMSM",
    HorasCerti: 125
},
{
    id: 2,
    nombre: "Diploma Contabilidad Gubernamental y Presupuesto Público en el SIAF RP 2023",
    precio: 400,
    horario: "20/02/2023",
    alumnos: 5,
    certifica: "UNMSM",
    HorasCerti: 125
}, {
    id: 3,
    nombre: " PLANEAMIENTO ESTRATÉGICO Y PRESUPUESTO EN EL SECTOR PÚBLICO",
    precio: 100,
    horario: "17/02/2023",
    alumnos: 10,
    certifica: "UNMSM",
    HorasCerti: 125    
}]

interface DataCursos {
    id: number,
    nombre: string,
    precio: number,
    horario: string,
    alumnos: number,
    certifica: string,
    HorasCerti: number
}

export const ModalAddProducto = ({ setAgregarProducto }: any) => {
    const columns: TableColumn<DataCursos>[] = [
        {
            name: 'Id',
            sortable: true,
            cell: row => row.id,
            width: "5rem"
        },
        {
            name: 'Nombre',
            sortable: true,
            cell: row => row.nombre,
            width: "30rem"
        },
        {
            name: 'Precio',
            sortable: true,
            cell: row => <p>S/. {row.precio}</p>

        },
        {
            name: 'Accion',
            sortable: true,
            cell: row => <button type='button' className='bg-green-500 text-white p-2 rounded-lg font-medium' onClick={()=>contruirCursos(row)} >Agregar</button>
        }


    ];
    let arrayProda:any = []
    const contruirCursos = (row:any) =>{
        arrayProda.push(row)
        setAgregarProducto(arrayProda)
        setOpen(false)
    }
    const [open, setOpen] = useState<Boolean>(false)
    return (
        <>
            <button type='button' className='flex gap-2 bg-blue-500 text-white font-medium rounded-lg px-2 py-2 items-center' onClick={() => setOpen(!open)}><i className="fi fi fi-rr-boxes flex items-center"></i>Agregar Producto</button>
            {
                open && (
                    <>
                        <div className='z-40 w-screen h-screen bg-[#000] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] opacity-70' onClick={() => setOpen(!open)}>
                        </div>

                        <div className="fixed z-50 left-1/2 top-1/2 bg-white shadow-xl w-[80%] xl:w-[50%] lg:w-[50%] translate-x-[-50%] translate-y-[-50%] p-10">
                            <p className='text-black font-black text-xl'>Elegir un Programa</p>
                            <div className='flex justify-between mt-5 flex-wrap w-full'>
                                <button className='bg-green-500 p-2 rounded-md text-white font-normal flex items-center gap-2'><i className="fi fi-rr-e-learning flex items-center"></i>Cursos</button>
                                <button className='bg-red-500 p-2 rounded-md text-white font-normal flex items-center gap-2'><i className="fi fi-rr-e-learning flex items-center"></i>Cursos Grabados</button>
                                <button className='bg-yellow-500 p-2 rounded-md text-white font-normal flex items-center gap-2'><i className="fi fi-rr-e-learning flex items-center"></i>Cursos Grabados con Certificado</button>
                                <button className='bg-blue-500 p-2 rounded-md text-white font-normal flex items-center gap-2'><i className="fi fi-rr-e-learning flex items-center"></i>Curso Bono</button>
                                <button className='bg-orange-500 p-2 rounded-md text-white font-normal flex items-center gap-2'><i className="fi fi-rr-diploma flex items-center"></i>Diploma/Diplomado</button>
                            </div>
                            <DataTable
                                columns={columns}
                                data={cursos}
                                pagination
                                highlightOnHover
                            />
                        </div>
                    </>
                )
            }
        </>
    )
}