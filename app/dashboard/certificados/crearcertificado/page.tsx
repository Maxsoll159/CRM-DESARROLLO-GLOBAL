'use client';
import { useRouter } from 'next/navigation';
export default function PagreCrearCertificado() {
    const router = useRouter();

    return (
        <div className="container mx-auto">
            <div className="w-full px-10 ">
                <div className='bg-white py-32 px-7'>
                    <p className='font-black text-xl pl-60'>Nuevo Certificado</p>
   
                        <form action="" className='bg-slate-100 rounded-xl p-10 xl:w-[67%] lg:w-[67%] w-full mt-10 block mx-auto'>
                            <div className='flex justify-between flex-wrap'>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        CODIGO
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-28 xl:w-28 w-full' placeholder='12541' />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        REGISTRO
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4 mt-2 w-full lg:w-36 xl:w-36' placeholder='4526' />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        NOMBRES
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4  mt-2 w-full lg:w-72 xl:w-72' placeholder='JUAN ALBERTO' />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        APELLIDOS
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4 mt-2 w-full lg:w-72 xl:w-72' placeholder='SANCHEZ CARDENAS' />
                                </div>
                            </div>
                            <div className='flex lg:mt-5 xl:mt-5 justify-between flex-wrap'>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        DNI
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4 mt-2 w-full lg:w-40 xl:w-40' placeholder='5236521445' />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        CATEGORIA
                                    </label>
                                    <br />
                                    <select name="" id="" className='border border-gray-400 rounded-md py-2 px-3 placeholder:m-4 mt-2 text-gray-400 w-56'>
                                        <option value="Elegir">ELEGIR:</option>
                                        <option value="DIPLOMAS">DIPLOMAS</option>
                                        <option value="DIPLOMADOS">DIPLOMADOS</option>
                                        <option value="CURSOS">CURSOS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        PROGRAMA
                                    </label>
                                    <br />
                                    <select name="" id="" className='border border-gray-400 rounded-md py-2 px-3 placeholder:m-4 mt-2 text-gray-400 w-full'>
                                        <option value="Elegir">SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA</option>
                                        <option value="DIPLOMAS">DIPLOMAS</option>
                                        <option value="DIPLOMADOS">DIPLOMADOS</option>
                                        <option value="CURSOS">CURSOS</option>
                                    </select>
                                </div>
                            </div>
                            <div className='lg:mt-5 xl:mt-5 flex items-center gap-3 flex-wrap'>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        ESTADO
                                    </label>
                                    <br />
                                    <input type="text" className='border border-gray-400 rounded-md py-2 px-4 placeholder:m-4 mt-2 w-full lg:w-28 xl:w-28' placeholder='EN OFICINA' />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        MES/AÑO
                                    </label>
                                    <br />
                                    <input type="date" className='border border-gray-400 rounded-md py-2 px-4 placeholder:m-4 mt-2 w-full xl:w-44 lg:w-44' min="17/05/2022" />
                                </div>
                                <div>
                                    <label className='ml-3 font-mono'>
                                        CODIGO QR
                                    </label>
                                    <br />
                                    <button className='text-blue-500 border-2 border-blue-500 flex items-center px-2 py-2 rounded bg-white mt-2 gap-2 w-100'><i className="fa-solid fa-qrcode"></i>Generar QR</button>
                                </div>
                            </div>
                        </form>
          

                </div>
            </div>
        </div>
    );
}
