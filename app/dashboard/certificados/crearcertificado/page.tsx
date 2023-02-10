'use client';
import { useRouter } from 'next/navigation';
export default function PagreCrearCertificado() {
    const router = useRouter();

    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className='bg-white flex justify-center flex-col items-center'>
                    <form action="" className='rounded-xl xl:w-[70%] 2xl:w-[55%]'>
                        <p className='font-black text-xl'>Nuevo Certificado</p>
                        <div className="bg-slate-100 p-10 rounded-lg border border-gray-300 mt-10">

                            <div className='flex items-center justify-between flex-wrap gap-1'>
                                <div>
                                    <label htmlFor="">CODIGO</label><br></br>
                                    <input type="text" placeholder="12541" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-28 xl:w-28 w-full !m-0' />
                                </div>

                                <div>
                                    <label htmlFor="">REGISTRO</label><br></br>
                                    <input type="text" placeholder="4526" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-32 xl:w-32 w-full !m-0' />
                                </div>

                                <div>
                                    <label htmlFor="">NOMBRE</label><br></br>
                                    <input type="text" placeholder="JUAN ALBERTO" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-56 xl:w-56 w-full !m-0' />
                                </div>

                                <div>
                                    <label htmlFor="">APELLIDOS</label><br></br>
                                    <input type="text" placeholder="SANCHEZ CARDENAS" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-56 xl:w-56 w-full !m-0' />
                                </div>
                            </div>


                            <div className='flex justify-between items-center flex-wrap gap-1 mt-2'>
                                
                                <div>
                                    <label htmlFor="">DNI</label><br></br>
                                    <input type="text" placeholder="5236521445" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-36 xl:w-36 w-full !m-0' />
                                </div>

                                <div className='w-full lg:w-auto xl:w-auto'>
                                    <label htmlFor="">CATEGORIA</label><br></br>
                                    <select name="" id="" className='border border-gray-400 rounded-md py-2 px-2 mt-2 lg:w-36 xl:w-36 !m-0 w-full'>
                                        <option value="">TODOS</option>
                                        <option value="">DIPLOMAS</option>
                                        <option value="">DIPLOMADOS</option>
                                        <option value="">CURSOS</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-auto xl:w-auto'>
                                    <label htmlFor="">PROGRAMA</label><br></br>
                                    <select name="" id="" className='border border-gray-400 rounded-md py-2 px-2 mt-2 xl:w-[23rem] 2xl:w-[26rem] w-full !m-0'>
                                        <option value="">SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA</option>
                                        <option value="">DIPLOMAS</option>
                                        <option value="">DIPLOMADOS</option>
                                        <option value="">CURSOS</option>
                                    </select>
                                </div>
                            </div>

                            
                            <div className='flex justify-start gap-2 mt-2 flex-wrap'>
                                <div>
                                    <label htmlFor="">ESTADO</label><br></br>
                                    <input type="text" placeholder="EN OFICINA" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-50 xl:w-50 w-full !m-0' />
                                </div>

                                <div>
                                    <label htmlFor="">MES/AÑO</label><br></br>
                                    <input type="date" placeholder="EN OFICINA" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-50 xl:w-50 w-full !m-0' />
                                </div>

                                <div>
                                    <label htmlFor="">CODIGO QR</label><br></br>
                                    <button className='text-blue-500 flex items-center p-2 bg-white gap-2 border-2 border-blue-500 rounded-lg'><i className="fa-solid fa-qrcode"></i>Generar QR</button>
                                </div>
                            </div>



                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
