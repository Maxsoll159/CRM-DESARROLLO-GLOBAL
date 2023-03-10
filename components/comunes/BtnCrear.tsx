"use client"
import { useRouter } from 'next/navigation';

export const BtnCrear = ({tipo}:any) => {
    const router = useRouter();
    return (
        <button className="text-white bg-sky-400 rounded-full px-3 py-2 flex items-center gap-2 border-2 border-sky-400" onClick={() => router.push(`${tipo}`)}><i className="fa-solid fa-plus"></i>Agregar Nuevo</button>
    )
}