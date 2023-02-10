"use client";
import Link from "next/link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import { DataNav } from "../interfaces/interfaceNav";

export default function ActivateLink({ menu }: DataNav) {
    const valores = useSelectedLayoutSegments();

   
    const valor = menu.find((valo: any) => valo.tipo == valores[valores.length - 1])
    console.log(valores)
    console.log("Que ondaaa", valores[valores.length - 1])
    const segment = valores[valores.length - 1]
    return (
        <>
            {menu.map((datos) => (
                <>
                    <Link href={datos.href}>
                        <p className={`${segment == datos.tipo && "!text-white" } text-dark py-2 rounded-md text-base font-semibold flex items-center gap-3 w-full px-2 h-full text-colorLink capitalize Montserrat`}>
                            <i className={datos.icon}></i>{datos.nombre}
                        </p>
                    </Link>
                    <div className="p-0 !m-0 space-y-2 !mb-1">
                        {datos?.subMenu?.map((submenu) => (

                            <Link
                                key={submenu.id}
                                href={submenu.href}
                                className={`${submenu.tipo == segment && "!text-white"
                                    } mx-9 w-10/12 block text-colorLink text-lg`}
                            >
                                {submenu.nombre}
                            </Link>

                        ))}
                    </div>
                </>
            ))}
        </>
    );
}
