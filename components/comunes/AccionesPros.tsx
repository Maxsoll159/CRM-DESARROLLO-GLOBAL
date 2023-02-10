"use client"
import { useRouter } from 'next/navigation';
export const AccionesPros = ({id, tipo}:any) =>{
    const router = useRouter();
    return(
        <>
            <div className="flex items-center gap-2">
                <button className="text-gray-400 focus:text-blue-500" type="button" onClick={() => router.push(`/dashboard/${tipo}/${id}`)}><i className="fa-regular fa-eye fa-2x"></i></button>
                <button className="text-gray-400 focus:text-green-500"><i className="fa-solid fa-user-plus fa-2x"></i></button>
                <button className="text-gray-400 focus:text-yellow-500"><i className="fa-solid fa-pen-to-square fa-2x"></i></button>
            </div>
        </>
    )
}