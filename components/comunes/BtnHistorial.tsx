'use clinet'
import { useState, useRef, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
export const BtnHistorial = () => {
    const editorRef = useRef<any>(null);
    const [modal, setModal] = useState<boolean>(false)
    const crearHistorial = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    const [show, setShow] = useState(true)

    const myRefElement1 = useRef(null);
    const handleClickOutsideFn = () => {
        setModal(false)
    }
    useOnClickOutside(myRefElement1, handleClickOutsideFn);
    return (
        <>

            <div className="flex items-center gap-5">
                <button className={`relative ${modal ? "text-blue-500" : "text-gray-500"}`}><i className="fa-regular fa-message fa-2x relative" onClick={() => setModal(!modal)}></i><p className='absolute right-[-7px] bottom-[-2px] bg-blue-500 rounded-full text-white text-[8px] w-4 h-4 flex justify-center items-center'>1</p></button>
                <img src="https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png" alt="" className='w-9 rounded-full' />
            </div>

            <div className={`fixed w-[30%] bg-white h-screen top-0 right-0 z-20 py-10 px-5 shadow-xl transition ${modal ? "translate-x-[0]" : "translate-x-[100%]"}`} ref={myRefElement1}>
                <div className='flex items-center justify-between mb-5'>
                    <p className='font-black text-xl'>Historial de Conversaciones</p>
                    <button className='border border-blue-500 rounded text-blue-500 font-black flex items-center gap-2 p-2 text-base'><i className="fa-solid fa-file-medical"></i>Agregar Nota</button>
                </div>
                <hr></hr>
                <div className='mt-3'>
                    <p className='font-black text-lg'>Conversación</p>
                    <div className='mt-5'>
                        <div className={`overflow-hidden transition-all duration-[150ms] ${show ? "h-[51px]" : "h-96"}`} >

                            <button className="bg-[#f5f5f5] w-[100%] text-left p-[1rem] flex justify-between border rounded-t-lg font-black items-center" onClick={() => setShow(!show)}>
                                <strong>
                                    <span className=" text-[#363535]">Maria Valle</span>
                                </strong>
                                <div className='flex gap-2 items-center'>
                                    <span>13/01/20122 - 09:44pm</span>
                                    <i className={`fa-solid ${!show ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
                                </div>
                            </button>


                            <div className='py-7 px-5 border rounded-b-lg'>
                                <Editor
                                    apiKey='92ptsurqwgyhtm6uvyw1z72nn7ruraryv3tlvgn7xxl6j9rf'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>Escribe un comentario del cliente.</p>"
                                    init={{
                                        height: 200,
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                <button onClick={crearHistorial} className="text-white bg-blue-600 p-2 rounded font-semibold text-base mt-3 block ">Actualizar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}