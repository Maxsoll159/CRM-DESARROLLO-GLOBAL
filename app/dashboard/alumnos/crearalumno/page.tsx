"use client"
import { useState } from 'react';
export default function CrearAlumno() {
    const [opcionesPago, setOpcionesPago] = useState({
        alumno: true,
        programa: false,
        pagos: false
    })
    const { alumno, programa, pagos } = opcionesPago
    const [certificado, setCertificado] = useState<boolean>(false)
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <p className='font-black text-lg'>Registro de Cliente</p>
                <div className='flex items-center gap-4 lg:w-[1034px] xl:w-[1034px] w-full flex-wrap md:flex-nowrap mt-5'>

                    <button className={` ${alumno ? "bg-[#2D62ED] text-white" : "text-black"} flex items-center px-10 py-4 gap-3 shadow-xl lg:w-[326px] xl:w-[326px] w-full md:w-1/2`} onClick={() => setOpcionesPago({
                        programa: false,
                        pagos: false,
                        alumno: true,
                    })}><i className="fi fi-rr-graduation-cap"></i>DATOS DE ALUMNO</button>
                    <button className={` ${programa ? "bg-[#2D62ED] text-white" : "text-black"} flex items-center px-10 py-4 gap-3 shadow-xl lg:w-[326px] xl:w-[326px] w-full md:w-1/2`} onClick={() => setOpcionesPago({
                        alumno: false,
                        programa: true,
                        pagos: false
                    })}><i className="fi fi-rr-edit"></i>PROGRAMAS INSCRITO</button>
                    <button className={` ${pagos ? "bg-[#2D62ED] text-white" : "text-black"} flex items-center px-10 py-4 gap-3 shadow-xl lg:w-[326px] xl:w-[326px] w-full md:w-1/2`} onClick={() => setOpcionesPago({
                        alumno: false,
                        programa: false,
                        pagos: true
                    })}><i className="fi fi-br-dollar"></i>GENERAR PAGOS</button>

                </div>
                <div className=''>
                    <form action="" className='w-full'>

                        {
                            alumno ? (

                                <>
                                    <div className='lg:w-[1034px] xl:w-[1034px] w-ful flex justify-between items-center mt-10'>
                                        <p className='font-black text-lg'>Añadir Alumno</p>
                                        <button className='text-blue-500 flex items-center gap-2 border-2 border-blue-500 p-2 rounded-md'><i className="fi fi-sr-user-add"></i>Registro Masivo</button>
                                    </div>
                                    <div className='flex flex-wrap justify-between items-center border border-gray-200 rounded-lg px-10 py-5 lg:w-[1034px] xl:w-[1034px] w-full mt-5'>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>DNI:</label><br />
                                            <div className='border border-gray-300 p-2 rounded xl:w-[150px] lg:w-[150px] md:w-[150px] w-full flex'>
                                                <input type="text" placeholder='sd' className='w-full outline-none' />
                                                <button type='submit' className=''><i className="fi fi-br-search flex justify-center items-center"></i></button>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>NOMBRE:</label><br />
                                            <input type="text" placeholder='JUAN JOSE' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>APELLIDO:</label><br />
                                            <input type="text" placeholder='MARTINEZ JIMENEZ' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>CORREO:</label><br />
                                            <input type="text" placeholder='j.josemartinez@gmail.com' className='border border-gray-300 p-2 rounded xl:w-[248px] lg:w-[248px] md:w-[248px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>TELEFONO:</label><br />
                                            <input type="text" placeholder='980 537 852' className='border border-gray-300 p-2 rounded xl:w-[149px] lg:w-[149px] md:w-[149px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>Asesor encargado:</label><br />
                                            <input type="text" placeholder='Pedro loa Palotes' className='border border-gray-300 p-2 rounded xl:w-[246px] lg:w-[246px] md:w-[246px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>MEDIO:</label><br />
                                            <input type="text" placeholder='ZOOPIM' className='border border-gray-300 p-2 rounded xl:w-[200px] lg:w-[200px] md:w-[200px] w-full' />
                                        </div>

                                        <div>
                                            <div className="switch-checkbox flex items-center text-gray-400 gap-3">
                                                <label className="switch">
                                                    <input type="checkbox" onClick={() => setCertificado(!certificado)} />
                                                    <span className="slider round flex items-center justify-end text-[12px]"></span>
                                                </label>
                                                <label htmlFor="">Registrar datos de envío certificado</label>
                                            </div>
                                        </div>
                                        {
                                            certificado && (
                                                <div className='mt-5 w-full'>
                                                    <p className='font-black'>DATOS DE ENVIO DE CERTIFICADOS</p>
                                                    <div className='flex flex-wrap mt-3 justify-between items-center'>
                                                        <div>
                                                            <label htmlFor="" className='text-gray-500 text-xs'>DIRECCIÓN (Calle/ Jirón/ Manzana/ Lote):</label><br />
                                                            <input type="text" placeholder='j.josemartinez@gmail.com' className='border border-gray-300 p-2 rounded xl:w-[420px] lg:w-[420px] md:w-[420px] w-full' />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className='text-gray-500 text-xs'>DISTRITO:</label><br />
                                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[146px] lg:w-[146px] md:w-[146px] w-full'>
                                                                <option value="">Lima</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className='text-gray-500 text-xs'>PROVINCIA:</label><br />
                                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[146px] lg:w-[146px] md:w-[146px] w-full'>
                                                                <option value="">Lima</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className='text-gray-500 text-xs'>DEPARTAMENTO:</label><br />
                                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[205px] lg:w-[205px] md:w-[205px] w-full'>
                                                                <option value="">Lima</option>
                                                            </select>
                                                        </div>
                                                        <div className='w-full'>
                                                            <label htmlFor="" className='text-gray-500 text-xs'>REFERENCIA:</label><br />
                                                            <input type="text" className='border border-gray-300 p-2 rounded w-full xl:w-full lg:w-full ' />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>

                            ) : programa ? (
                                <>
                                    <div className='lg:w-[1034px] xl:w-[1034px] w-ful flex justify-between items-center mt-10'>
                                        <p className='font-black text-lg'>Programas que se inscribio</p>
                                    </div>
                                    <div className='flex flex-wrap justify-start items-center border border-gray-200 rounded-lg px-10 py-5 lg:w-[1034px] xl:w-[1034px] w-full mt-5 gap-3'>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>NOMBRE DEL PROGRAMA:</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[399px] lg:w-[399px] md:w-[399px] w-full'>
                                                <option value="">SIAF SIGA Y OBRAS</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>CERTIFICACIÓN:</label><br />
                                            <input type="text" placeholder='UNMSM' className='border border-gray-300 p-2 rounded xl:w-[142px] lg:w-[142px] md:w-[142px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>HORAS CERT.</label><br />
                                            <input type="text" placeholder='125' className='border border-gray-300 p-2 rounded xl:w-[188px] lg:w-[188px] md:w-[188px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>Comprobante:</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[143px] lg:w-[143px] md:w-[143px] w-full'>
                                                <option value="">No Aplica</option>
                                                <option value="">Boleta</option>
                                                <option value="">Rus Edith</option>
                                                <option value="">Ruc 20 desarrolloglobal</option>
                                                <option value="">Ruc 10 escuela EGG</option>
                                                <option value="">Factura desarrolloglobal</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>FECHA DE INICIO:</label><br />
                                            <input type="date" placeholder='125' className='border border-gray-300 p-2 rounded xl:w-[173px] lg:w-[173px] md:w-[173px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>FECHA DE INICIO:</label><br />
                                            <input type="date" placeholder='125' className='border border-gray-300 p-2 rounded xl:w-[173px] lg:w-[173px] md:w-[173px] w-full' />
                                        </div>
                                    </div>
                                    <p className='mt-3 ml-5'>Listado de Cursos Incluidos</p>
                                    <table className='border border-gray-200 rounded-3xl lg:w-[1034px] xl:w-[1034px] w-ful mt-5'>
                                        <thead>
                                            <tr className='bg-gray-100 border border-gray-200'>
                                                <th className='py-5 text-black border-none font-bold'>Cod</th>
                                                <th className='py-5 text-black border-none font-bold'>Programa</th>
                                                <th className='py-5 text-black border-none font-bold'>Certifica</th>
                                                <th className='py-5 text-black border-none font-bold'>Horas Cert.</th>
                                                <th className='py-5 text-black border-none font-bold'>Comprobante</th>
                                                <th className='py-5 text-black border-none font-bold'>Fecha Inicio</th>
                                                <th className='py-5 text-black border-none font-bold'>Fecha Fín</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='text-center'>
                                                <td className='border-none py-5'>145245</td>
                                                <td className='border-none py-5'>SIAF</td>
                                                <td className='border-none py-5'>UNMSM</td>
                                                <td className='border-none py-5'>125</td>
                                                <td className='border-none py-5'>boleta</td>
                                                <td className='border-none py-5'>05/09/2023</td>
                                                <td className='border-none py-5'>13/09/2023</td>
                                            </tr>
                                            <tr className='text-center'>
                                                <td className='border-none py-5'>145245</td>
                                                <td className='border-none py-5'>SIAF</td>
                                                <td className='border-none py-5'>UNMSM</td>
                                                <td className='border-none py-5'>125</td>
                                                <td className='border-none py-5'>boleta</td>
                                                <td className='border-none py-5'>05/09/2023</td>
                                                <td className='border-none py-5'>13/09/2023</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            ) : (
                                <>
                                    <div className='lg:w-[1034px] xl:w-[1034px] w-ful flex justify-between items-center mt-10'>
                                        <p className='font-black text-lg'>Datos de Facturación</p>
                                    </div>
                                    <div className='flex flex-wrap justify-start items-center border border-gray-200 bg-gray-100 rounded-lg px-10 py-5 lg:w-[1034px] xl:w-[1034px] w-full mt-5 gap-3'>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>N° COMPROBANTE</label><br />
                                            <input type="t  ext" placeholder='024518' className='border border-gray-300 p-2 rounded xl:w-[150px] lg:w-[150px] md:w-[150px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>INVERSIÒN</label><br />
                                            <input type="text" placeholder='S/ 457.00' className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>CUOTAS</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full'>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>DESCUENTO</label><br />
                                            <input type="text" placeholder='S/ 30' className='border border-gray-300 p-2 rounded xl:w-[118px] lg:w-[118px] md:w-[118px] w-full' />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-500 text-xs'>ASESOR ASIGNADO</label><br />
                                            <select name="" id="" className='border border-gray-300 p-2 rounded xl:w-[399px] lg:w-[399px] md:w-[399px] w-full'>
                                                <option value="">Cristina Balbuena</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='lg:w-[1034px] xl:w-[1034px] w-full mt-5 rounded-xl border'>
                                        <div className='p-7 bg-gray-100 flex items-center justify-between'>
                                            <p>Cuota</p>
                                            <p>Fecha vencimiento</p>
                                            <p>N° Operación</p>
                                            <p>Medio de Pago</p>
                                            <p>Monto Cuota (S/)</p>
                                            <p>Editar</p>
                                        </div>
                                        <div className='flex items-center justify-between p-7'>
                                            <p>RP8-02</p>
                                            <p>15/08/2023</p>
                                            <p>465456465</p>
                                            <p>BCP</p>
                                            <p>S/ 317..00</p>
                                            <div className='flex gap-3 text-gray-400'>
                                                <button><i className="fi fi-rr-edit text-xl"></i></button>
                                                <button><i className="fi fi-rs-disk text-xl"></i></button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex items-center justify-between p-7'>
                                            <p>RP8-02</p>
                                            <p>15/08/2023</p>
                                            <p>465456465</p>
                                            <p>BCP</p>
                                            <p>S/ 317..00</p>
                                            <div className='flex gap-3 text-gray-400'>
                                                <button><i className="fi fi-rr-edit text-xl"></i></button>
                                                <button><i className="fi fi-rs-disk text-xl"></i></button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </>
                            )
                        }

                    </form>

                </div>
            </div>
        </div>
    )
}