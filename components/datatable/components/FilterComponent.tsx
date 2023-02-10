"use clinet"
import { useState } from "react";

export const FilterComponent = ({ setFilterText, tipo }: any) => {
    const [valor, setValor] = useState<string>("")
    const handleChange = (e: any) => {
        setValor(e.target.value);
        setFilterText(valor)
    }
    return (

        <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <i className="fa-solid fa-magnifying-glass text-gray-300 "></i>
            </span>
            <input className="block bg-colorInput text-gray-400 w-full lg:w-72 xl:w-72 border rounded-md py-2 pl-9 pr-3 shadow-lg font-medium" placeholder={tipo} type="text" id="search" onChange={(e) => handleChange(e)} value={valor} />
        </label>

    )

};

