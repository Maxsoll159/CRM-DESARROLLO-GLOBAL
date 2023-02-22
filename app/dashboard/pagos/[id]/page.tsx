import TablePagos from '../../../../components/pagos/TablePagos';
import { TablePagosId } from '../../../../components/pagos/TablePagosId';
export default function PagosId({ params }: any) {
    const { id } = params
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white py-10 mt-1">
                    <p className="font-black text-xl mb-5">Detalle de Pago de Juan</p>

                    <TablePagosId />

                </div>
            </div>
        </div>
    )
}