import { DataAlumnos } from "@/components/prospectos/interfaces/InterfaceProsp";


export const DatosAlumno:Array<DataAlumnos> = [
  {
    id: 1,
    nombre: "Sistema Integrado de Administración Financiera – SIAF",
    logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png",
    fecha: "17/01/2023",
    categoria: "Curso",
    modalidad: "Dual",
    prospectos: 50,
    alumnosPros: [{
      id: 1,
      nombre: "Juan Peres",
      dni: "78965412",
      correo: "Juan@hotmail.com",
      telefono: "987456321",
      estado: "Culminado",
      fechaRegistro: "20/05/2023"
    },
    {
      id: 2,
      nombre: "Martin Ris",
      correo: "martin@hotmail.com",
      dni: "12365478",
      telefono: "987456321",
      estado: "En Curso",
      fechaRegistro: "20/05/2023"
    },
    {
      id: 3,
      nombre: "Sara Lopez",
      correo: "Sara@hotmail.com",
      dni: "65412398",
      telefono: "987456321",
      estado: "No Iniciado",
      fechaRegistro: "20/05/2023"
    }
    ]
  }
]