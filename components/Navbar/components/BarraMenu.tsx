"use client";

import { DatosNav } from "@/helpers/DatosNav";
import { useState } from "react";
import ActivateLink from "./ActivateLink";


export const BarraMenu = () => {
  const [subMenu, setSubMenu] = useState<boolean>(false);


  return (
    <div className="w-full">
      <div className="p-5">
        <img
          src="/img/LogoDesarrollo.webp"
          alt="Desarrollo Global"
          className="mx-auto "
        />
      </div>
      <div className="mb-5 space-y-2 px-6">
        <h4 className="text-white font-medium mb-5 text-xs">NAVEGACION</h4>

        <ActivateLink menu={DatosNav} />


      </div>
    </div>
  );
};
