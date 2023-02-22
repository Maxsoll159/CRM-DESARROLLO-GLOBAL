import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FormPagos } from './FormPagos';
export const MOdalPagos = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <button><img src="/img/edit.gif" alt="" width={35} onClick={() => setIsOpen(true)} /></button>,


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:w-[40%] xl:w-[40%]  transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='w-full bg-[#97B1F7] flex'>
                                        <div className='text-white px-7 py-2 bg-blue-600 flex gap-2'><i className="fi fi-rr-refresh flex items-center"></i>Actualizar Pago</div>
                                        <div className='text-white px-7 py-2 bg-blue-600 flex gap-2'><i className="fi fi-rr-list flex items-center"></i>Detalles Programa</div>
                                    </div>

                                    <FormPagos />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}