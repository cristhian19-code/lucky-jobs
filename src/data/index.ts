export interface IData {
    id: number;
    titulo: string;
    compania: string;
    ubicacion: string;
    fecha_publicacion: string;
    guardado: boolean;
    pago: number;
    color: string;
    divisa: string;
    categorias: string[];
}

export const data: IData[] = [
    {
        id: 1,
        titulo: 'Senior UI/UX Designer',
        compania: 'Amazon',
        ubicacion: 'San Francisco, CA',
        fecha_publicacion: '20 May, 2023',
        guardado: true,
        color: 'bg-red-100/80',
        pago: 250,
        divisa: "$",
        categorias: ['Part time', 'Senior level', 'Distant', 'Project work'],
    },
    {
        id: 2,
        titulo: 'Junior UI/UX Designer',
        compania: 'Google',
        color: 'bg-blue-100/80',
        ubicacion: 'California, CA',
        fecha_publicacion: '4 Feb, 2023',
        guardado: false,
        pago: 150,
        divisa: "$",
        categorias: ['Full time', 'Junior level', 'Distant', 'Flexible Schedule'],
    },
    {
        id: 3,
        titulo: 'Senior Motion Designer',
        compania: 'Dribbble',
        color: 'bg-purple-100/80',
        ubicacion: 'New York, NY',
        fecha_publicacion: '29 Jan, 2023',
        guardado: false,
        pago: 260,
        divisa: "$",
        categorias: ['Part time', 'Senior level', 'Full day', 'Shift work'],
    },
    {
        id: 4,
        titulo: 'UX Designer',
        compania: 'Twitter',
        color: 'bg-blue-100/80',
        ubicacion: 'California, CA',
        fecha_publicacion: '11 Apr, 2023',
        guardado: false,
        pago: 120,
        divisa: "$",
        categorias: ['Full time', 'Middle level', 'Distant', 'Project work'],
    },
    {
        id: 5,
        titulo: 'Graphic Designer',
        compania: 'Airbnb',
        color: 'bg-rose-100/80',
        ubicacion: 'New York, NY',
        fecha_publicacion: '2 Apr, 2023',
        guardado: false,
        pago: 300,
        divisa: "$",
        categorias: ['Part time', 'Senior level'],
    },
    {
        id: 6,
        titulo: 'Graphic Designer',
        compania: 'Apple',
        color: 'bg-indigo-100/80',
        ubicacion: 'San Francisco, CA',
        fecha_publicacion: '18 Jan, 2023',
        guardado: false,
        pago: 140,
        divisa: "$",
        categorias: ['Part time', 'Distant'],
    }
]