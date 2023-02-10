export default function CrearProspecto() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10 ">
                <div className='bg-white flex justify-center flex-col items-center'>
                    <form action="" className='rounded-xl xl:w-[65%] lg:w-[65%] w-full'>
                        <div className="flex justify-end">
                            <button className="bg-[#25C507] text-white font-bold flex items-center gap-2 p-2 rounded-md mb-5"><i className="fa-solid fa-user-plus"></i>Convertir en cliente</button>
                        </div>
                        <div className="flex gap-3 flex-wrap bg-slate-100 p-10 rounded-lg border border-gray-300">
                            <div>
                                <label htmlFor="">NOMBRES</label><br></br>
                                <input type="text" placeholder="JUAN JOSE" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-60 xl:w-60 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">APELLIDOS</label><br></br>
                                <input type="text" placeholder="MARTINEZ JIMENEZ" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-60 xl:w-60 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">CORREO</label><br></br>
                                <input type="text" placeholder="j.josemartinez@gmail.com" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-60 xl:w-60 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">TELEFONO</label><br></br>
                                <input type="text" placeholder="980 537 852" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-40 xl:w-40 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">DNI</label><br></br>
                                <input type="text" placeholder="01682748" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-65 xl:w-65 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">ASESOR ENCARGADO</label><br></br>
                                <input type="text" placeholder="Pedro loa Palotes" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-60 xl:w-60 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">MEDIO</label><br></br>
                                <input type="text" placeholder="Pedro loa Palotes" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-50 xl:w-50 w-full !m-0' />
                            </div>
                            <div>
                                <label htmlFor="">PROGRAMA DE INTERÉS</label><br></br>
                                <input type="text" placeholder="SIAF BÁSICO RP 2023" className='border border-gray-400 rounded-md py-2 px-4 mt-2 lg:w-50 xl:w-50 w-full !m-0' />
                            </div>
                        </div>
                    </form>
                    <div className="xl:w-[65%] lg:w-[65%] w-full mt-10">
                        <div className="flex justify-start w-full mb-5">
                            <p className="font-black text-xl text-start">Programas Comprados</p>
                        </div>
                        <hr></hr>
                        <div className="w-full bg-[#FEFFEB] p-5 mt-10 border border-gray-300 rounded">
                            <p className="text-gray-500">No tiene ninguna programa aun :(</p>
                        </div>
                        <div className="flex mt-5 justify-between flex-wrap">
                            <div className="flex gap-3 border border-gray-300 rounded-lg p-5 bg-white hover:bg-gray-100 hover:border xl:w-[32%] lg:w-[32%] w-full">
                                <img src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/07/siga-patrimonio.png" alt="SIAF" className="rounded-full w-16 h-16" />
                                <div>
                                    <p>Sistema Integrado de Administración Financiera – SIAF</p>
                                    <p className="text-blue-400 mt-3">04 enero 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-3 border border-gray-300 rounded-lg p-5 bg-white hover:bg-gray-100 hover:border xl:w-[32%] lg:w-[32%] w-full">
                                <img src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/07/siga-patrimonio.png" alt="SIAF" className="rounded-full w-16 h-16" />
                                <div>
                                    <p>Sistema Integrado de Administración Financiera – SIAF</p>
                                    <p className="text-blue-400 mt-3">04 enero 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-3 border border-gray-300 rounded-lg p-5 bg-white hover:bg-gray-100 hover:border xl:w-[32%] lg:w-[32%] w-full">
                                <img src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/07/siga-patrimonio.png" alt="SIAF" className="rounded-full w-16 h-16" />
                                <div>
                                    <p>Sistema Integrado de Administración Financiera – SIAF</p>
                                    <p className="text-blue-400 mt-3">04 enero 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}