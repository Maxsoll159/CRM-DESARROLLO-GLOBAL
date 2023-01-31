
import { Modal } from '@/components/certificados/Modal'
import dynamic from 'next/dynamic'


const TableData = dynamic(() => import('../../../../components/datatable/TableData'), { ssr: false })
export default function PageCertificado() {

    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">

                    <TableData />
  
                </div>
            </div>

        </div>
    )
}