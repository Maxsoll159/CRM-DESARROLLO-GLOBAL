
import dynamic from 'next/dynamic'


const TableData = dynamic(() => import('../../../../components/datatable/TableData'), { ssr: false })
export default function PageCertificado() {

    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white mt-1">
                    <p className='font-black text-xl'>Lista de Certificados</p>
                    <TableData />
  
                </div>
            </div>

        </div>
    )
}