"use client"

export const OpcionesAlumno = ({opcionesPagos,setOpcionesPago}:any) => {

    const {opcion1, opcion2, opcion3} = opcionesPagos
    return (
        <div className='flex lg:w-[1034px] xl:w-[1034px] w-full justify-between mt-5 flex-wrap'>
            <button className={`${opcion1 ? "bg-blue-500 text-white" : "bg-[#FAFAFA]"} py-4 px-20 shadow-lg Montserrat text-sm flex items-center gap-3`} onClick={() => setOpcionesPago({
                opcion1: true   ,
                opcion2: false,
                opcion3: false
            })}><i className="fi fi-rr-graduation-cap flex items-center font-medium"></i>DATOS DE ALUMNO</button>
            <button className={`${opcion2 ? "bg-blue-500 text-white" : "bg-[#FAFAFA]"} py-4 px-20 shadow-lg Montserrat text-sm flex items-center gap-3`} onClick={() => setOpcionesPago({
                opcion1: false,
                opcion2: true,
                opcion3: false
            })}><i className="fi fi-rr-edit flex items-center font-medium"></i>INSCRIBIR PROGRAMA</button>
            <button className={`${opcion3 ? "bg-blue-500 text-white" : "bg-[#FAFAFA]"} py-4 px-20 shadow-lg Montserrat text-sm flex items-center gap-3`} onClick={() => setOpcionesPago({
                opcion1: false,
                opcion2: false,
                opcion3: true
            })}><i className="fi fi-rr-comment-dollar flex items-center font-medium"></i>GENERAR PAGOS</button>
        </div>
    )
}