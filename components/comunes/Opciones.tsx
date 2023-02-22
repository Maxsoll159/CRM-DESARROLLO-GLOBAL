"use client"
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import Link from 'next/link';
export const Opciones = ({ id, row, tipo }: any) => {
    console.log(id)
    console.log("Soy el tipo",tipo)
    console.log(row)
    const [abrir, setAbrir] = useState(false)
    const handleClickOutsideFn = () => {
        setAbrir(false)
    }
    const myRefElement1 = useRef(null);
    useOnClickOutside(myRefElement1, handleClickOutsideFn);
    return (
        <>
            <button onClick={() => setAbrir(!abrir)} className="focus:text-blue-600" ><i className="fa-solid fa-ellipsis-vertical fa-2x"></i></button>
            {
                abrir && (
                    <div>
                        <div className="fixed bg-white shadow-2xl h-auto rounded-md w-[90px] z-50 text-gray-600 space-y-1 px-3 py-2" ref={myRefElement1}>
                            <p>Editar</p>
                            <Link href={`/dashboard/${tipo}/${id}`}><p className='my-1'>Detalle</p></Link>
                            <p>Eliminar</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}