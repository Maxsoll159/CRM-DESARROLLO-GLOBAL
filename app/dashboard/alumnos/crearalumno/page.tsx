"use client"
import { ModalAddProducto } from '@/components/alumnos/ModalAddProducto';
import { OpcionesAlumno } from '@/components/alumnos/OpcionesAlumno';
import { useState } from 'react';
export default function CrearAlumno() {

    const [envioCertificado, setEnvioCertificado] = useState<boolean>(false)
    const [agregarProducto, setAgregarProducto] = useState([])

    const [opcionesPagos, setOpcionesPago] = useState({
        opcion1: true,
        opcion2: false
    })
    const { opcion1, opcion2 } = opcionesPagos

    const [datosClient, setDatosClient] = useState<any>({
        inversion: '',
        descuento: '',
        cuotas: ''
    })
    const handleInputChange = (e: any) => {
        setDatosClient({
            ...datosClient,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e: any) => {
        e.preventDefault()
        console.log('enviando datos...' + datosClient.dni)
    }
    const { inversion, descuento, cuotas } = datosClient
    console.log(inversion, descuento, cuotas)
    const [arrayPagos, setArrayPagos] = useState<any>([])

    const GenerarPago = () => {
        let cuota
        if (inversion !== '' && cuotas !== '') {
            console.log("Entre al if")
            cuota = (inversion - descuento) / cuotas
            let array = []
            if (cuotas == 1) {
                array = [{
                    id: 1,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                }]
                setArrayPagos(array)
                console.log("hOLA", array)
            } else if (cuotas == 2) {
                array = [{
                    id: 1,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                },
                {
                    id: 2,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                }]
                setArrayPagos(array)
            } else if (cuotas == 3) {
                array = [{
                    id: 1,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                },
                {
                    id: 2,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                },
                {
                    id: 3,
                    cuota: "sd",
                    fechaVencimiento: "15/08/2023",
                    numeroOperacion: "",
                    MedioPago: "BCP",
                    montoCuota: cuota
                }]
                setArrayPagos(array)
            }
        }
    }

    console.log(arrayPagos)

    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <p className='font-black text-xl'>Registro de Cliente</p>
                {/* COMPONENTE OPCIONES ALUMNOS */}
                <OpcionesAlumno opcionesPagos={opcionesPagos} setOpcionesPago={setOpcionesPago} />


                <form action="" className='mt-5' onSubmit={(e) => enviarDatos(e)}>
                    {
                        opcion1 ? (<div className='flex py-5 px-5 border border-gray-200 rounded-lg lg:w-[1034px] xl:w-[1034px] w-full flex-wrap justify-between items-center'>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>DNI</label><br />
                                <div className='border border-gray-300 p-2 rounded xl:w-[150px] lg:w-[150px] md:w-[150px] w-full flex items-center'>
                                    <input type="text" placeholder='01682748' className='w-full outline-none' name='dni' onChange={(e) => handleInputChange(e)} />
                                    <button><i className="fi fi-bs-search flex items-center"></i></button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>NOMBRE</label><br />
                                <input type="text" placeholder='JUAN JOSE' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>APELLIDOS</label><br />
                                <input type="text" placeholder='MARTINEZ JIMENEZ' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>CORREO</label><br />
                                <input type="text" placeholder='j.josemartinez@gmail.com' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>TELEFONO</label><br />
                                <input type="text" placeholder='980 537 852' className='border border-gray-300 p-2 rounded xl:w-[149px] lg:w-[149px] md:w-[149px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>Asesor encargado</label><br />
                                <input type="text" placeholder='Pedro loa Palotes' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-500 text-xs'>MEDIO</label><br />
                                <input type="text" placeholder='ZOOPIM' className='border border-gray-300 p-2 rounded xl:w-[200px] lg:w-[200px] md:w-[200px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                            </div>
                            <div>
                                <div className="switch-checkbox flex items-center text-gray-400 gap-3">
                                    <label className="switch">
                                        <input type="checkbox" onClick={() => setEnvioCertificado(!envioCertificado)} />
                                        <span className="slider round flex items-center justify-end text-[12px]"></span>
                                    </label>
                                    <label htmlFor="">Registrar datos de envío certificado</label>
                                </div>
                            </div>
                            {
                                envioCertificado && (
                                    <>
                                        <div className='mt-5 w-full'>
                                            <p className='font-black text-base'>DATOS DE ENVIO DE CERTIFICADOS</p>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>DIRECCIÓN (Calle/ Jirón/ Manzana/ Lote)</label><br />
                                            <input type="text" placeholder='ZOOPIM' className='border border-gray-300 p-2 rounded xl:w-[420px] lg:w-[420px] md:w-[420px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>DISTRITO</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[146px] lg:w-[146px] md:w-[146px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1'>
                                                <option value="">Lima</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>PROVINCIA</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[146px] lg:w-[146px] md:w-[146px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1'>
                                                <option value="">Lima</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>DEPARTAMENTO</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[205px] lg:w-[205px] md:w-[205px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1'>
                                                <option value="">Lima</option>
                                            </select>
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="" className='text-gray-500 text-xs'>Asesor encargado</label><br />
                                            <input type="text" placeholder='Pedro loa Palotes' className='border border-gray-300 p-2 rounded w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                                        </div>
                                    </>
                                )
                            }
                        </div>) : opcion2 ? (<div className='mt-5 flex py-5 px-5 border border-gray-200 rounded-lg lg:w-[1034px] xl:w-[1034px] w-full flex-wrap justify-between items-center'>
                            <p className='font-black text-xl'>Inscripcion de Cursos</p>
                            <div>
                                {/*Modal Cursos*/}
                                <ModalAddProducto setAgregarProducto={setAgregarProducto} />
                            </div>
                            <div className='w-full scroll-auto'>
                                <div className='flex items-center gap-5 mt-5'>
                                    <button type='button' className='bg-green-500 p-2 rounded-lg text-white flex items-center gap-3 font-medium'> <i className="fi fi-rs-gift flex items-center"></i>Curso Regalo</button>
                                    <div>
                                        <input type="checkbox" className='w-5' />
                                        <label htmlFor=""> Acceso temporal</label>
                                    </div>
                                </div>
                                <table className='border-none mt-5 rounded-lg w-fit lg:w-full xl:w-full scroll-auto'>
                                    <thead className='bg-slate-100 mt-3 rounded-md text-gray-500 border-none '>
                                        <tr className='border-none'>
                                            <th className='border-none py-5 text-center px-5'>Cod</th>
                                            <th className='border-none py-5 text-center'>Programa</th>
                                            <th className='border-none py-5 text-center'>Certifica</th>
                                            <th className='border-none py-5 text-center'>Horas Cert.</th>
                                            <th className='border-none py-5 text-center'>Alumnos</th>
                                            <th className='border-none py-5 text-center'>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            agregarProducto.length > 0 && (
                                                agregarProducto.map((prod: any) => (
                                                    <tr key={prod.id}>
                                                        <td className='border-none py-3 text-center'>{prod.id}</td>
                                                        <td className='border-none py-3 text-center'>{prod.nombre}</td>
                                                        <td className='border-none py-3 text-center'>{prod.certifica}</td>
                                                        <td className='border-none py-3 text-center'>{prod.HorasCerti} Hr.</td>
                                                        <td className='border-none py-3 text-center'>{prod.alumnos}</td>
                                                        <td className='border-none py-3 text-center'>S/. {prod.precio}</td>
                                                    </tr>
                                                ))

                                            )
                                        }

                                    </tbody>
                                </table>

                            </div>

                        </div>) : (<div>
                            <p className='font-black text-xl'>Generar Pagos</p>
                            <div className='lg:w-[1034px] xl:w-[1034px] w-full flex justify-between flex-wrap py-7 px-6 bg-gray-100 border border-gray-300 rounded-lg mt-5'>
                                <div>
                                    <label htmlFor="" className='text-gray-500 text-xs'>CODIGO CUOTA</label><br />
                                    <input type="text" placeholder='RP8-01' className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500 text-xs'>INVERSIÒN</label><br />
                                    <input type="text" placeholder='S/ 457.00' className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' name='inversion' onChange={(e) => handleInputChange(e)} value={inversion} />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500 text-xs'>CUOTAS</label><br />
                                    <select name="cuotas" onChange={(e) => handleInputChange(e)} value={cuotas} className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1'>
                                        <option value="Elegir">Elegir</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500 text-xs'>DESCUENTO</label><br />
                                    <input type="text" placeholder='S/ 30' className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1' name='descuento' onChange={(e) => handleInputChange(e)} value={descuento} />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500 text-xs'>ASESOR ASIGNADO</label><br />
                                    <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[300px] lg:w-[300px] md:w-[300px] w-full focus:outline-none  focus:border-blue-500 focus:ring-1'>
                                        <option value="1">Cristina Balbuena</option>
                                    </select>
                                </div>
                                <div>
                                    <br />
                                    <button type='button' disabled={inversion == ""} className='border border-blue-600 flex items-center gap-2 rounded-md text-blue-600 font-semibold p-2' onClick={() => GenerarPago()}><i className="fi fi-rr-coins flex items-center"></i>Crear Cuotas</button>
                                </div>
                            </div>
                            <table className='lg:w-[1034px] xl:w-[1034px] w-full border-none mt-10'>
                                <thead className='bg-gray-100 text-gray-500 border border-gray-200'>
                                    <tr className='rounded-xl'>
                                        <td className='py-5 text-center border-none '>Cuota</td>
                                        <td className='py-5 text-center border-none '>Fecha vencimiento</td>
                                        <td className='py-5 text-center border-none '>N° Operación</td>
                                        <td className='py-5 text-center border-none '>Medio de Pago</td>
                                        <td className='py-5 text-center border-none '>Monto Cuota (S/)</td>
                                        <td className='py-5 text-center border-none '>Editar</td>
                                    </tr>
                                </thead>
                                <tbody className='border border-gray-100'>
                                    {
                                        arrayPagos.length !== 0 && (
                                            arrayPagos.map((pagos: any) => (
                                                <tr>
                                                    <td className='border-none text-center py-5'>RP8 - {pagos.id}</td>
                                                    <td className='border-none text-center py-5'>{pagos.fechaVencimiento}</td>
                                                    <td className='border-none text-center py-5'></td>
                                                    <td className='border-none text-center py-5'>{pagos.MedioPago}</td>
                                                    <td className='border-none text-center py-5'>S/. {pagos.montoCuota}</td>
                                                    <td className='border-none text-center py-5'>{pagos.MedioPago}</td>
                                                </tr>
                                                )
                                            ))
                                    }
                                </tbody>

                            </table>
                        </div>)
                    }

                </form>

            </div>
        </div>
    )
}