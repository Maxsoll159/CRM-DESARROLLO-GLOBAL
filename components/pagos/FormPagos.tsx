export const FormPagos = () => {
    return (
        <form action="" className="flex justify-between py-10 px-8 flex-wrap space-y-2 items-center">
            <div className="xl:w-[118px] lg:w-[118px] md:w-[118px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>MONTO CUOTA</label><br />
                <input type="text" placeholder='S/ 200' className='border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1' />
            </div>
            <div className="xl:w-[122px] lg:w-[122px] md:w-[122px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>MEDIO PAGO</label><br />
                <select name="" id="" className="border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1">
                    <option value="">ELEGIR</option>
                    <option value="">YAPE</option>
                    <option value="">BCP</option>
                    <option value="">PLIN</option>
                    <option value="">INTERBANK</option>
                </select>
            </div>
            <div className="xl:w-[136px] lg:w-[136px] md:w-[136px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>ASESOR</label><br />
                <select name="" id="" className="border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1">
                    <option value="">ELEGIR</option>
                    <option value="">SHEYLA</option>
                    <option value="">PILAR</option>
                    <option value="">JUANA</option>
                </select>
            </div>
            <div className="xl:w-[236px] lg:w-[236px] md:w-[236px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>MARKETERO</label><br />
                <select name="" id="" className="border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1">
                    <option value="">ELEGIR</option>
                    <option value="">PEDRO LOS PALOTES</option>
                    <option value="">JUAN PEREZ</option>
                    <option value="">EL PEPE</option>
                </select>
            </div>
            <div className="xl:w-[154px] lg:w-[154px] md:w-[154px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>MONTO CUOTA</label><br />
                <input type="date" placeholder='S/ 200' className='border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1' />
            </div>
            <div className="xl:w-[118px] lg:w-[118px] md:w-[118px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>NUM. OPERACIÓN</label><br />
                <input type="date" placeholder='S/ 200' className='border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1' />
            </div>
            <div className="xl:w-[178px] lg:w-[178px] md:w-[178px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs'>MARKETERO</label><br />
                <input type="text" placeholder='whatsapp' className='border border-gray-300 p-1 rounded focus:outline-none w-full focus:border-blue-500 focus:ring-1' />
            </div>
            <div className="xl:w-[164px] lg:w-[164px] md:w-[164px] w-full">
                <label htmlFor="" className='text-gray-500 text-xs block mb-[5px]'>MEDIO DE CONTACTO</label>
                <label className=" border border-gray-300 p-1 rounded flex items-center gap-2 justify-center">
                    <input type="file" />
                    Subir Imagen<i className="fi fi-rr-picture flex items-center"></i>
                </label>

            </div>
            <div className="">
                <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-[#1C71F0] text-white px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-3">Guardar</button>
            </div>
        </form>
    )
}