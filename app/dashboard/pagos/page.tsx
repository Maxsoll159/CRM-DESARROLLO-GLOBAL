import TablePagos from "@/components/pagos/TablePagos";

export default function pagos() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <div className="w-full bg-white py-10 mt-1">
                    <p className="font-black text-xl">Lista de Pagos</p>
                    <TablePagos />
                </div>
            </div>
        </div>
    )
}