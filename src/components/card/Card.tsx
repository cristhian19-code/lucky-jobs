import { useState } from "react"

// components
import { Badge } from "../badge/Badge"
import { IconButton } from "../button/IconButton"

// icons
import Bookmark2LineIcon from 'remixicon-react/Bookmark2LineIcon'
import Bookmark2FillIcon from 'remixicon-react/Bookmark2FillIcon'
import { ButtonBase } from "../button/ButtonBase"
import { IData } from "../../data"

// constants

// interface


interface Props extends IData {
    color: string
}


const IconView = (active: boolean | true) => {
    return (
        active ? (
            <Bookmark2LineIcon size={20} />
        ) : (
            <Bookmark2FillIcon size={20} />
        )
    )
}

export const Card = (props: Props) => {
    const [active, setActive] = useState(false)

    const handleActiveBookMark = () => {
        setActive(!active)
    }


    return (
        <div className="border w-[350px] border-zinc-700 rounded-2xl p-1 pb-4">
            <div className={`${props.color} rounded-2xl px-3 py-3`}>
                {/* header */}
                <div className="flex justify-between items-center">
                    <Badge className="py-2 px-3" text={props.fecha_publicacion} />
                    <IconButton onClick={() => handleActiveBookMark()} className="bg-white p-1" icon={IconView(props.guardado)} />
                </div>

                {/* description */}
                <div className="font-bold text-zinc-700 my-3">
                    <p>{props.compania}</p>
                    <div className="flex items-end justify-between">
                        <p className="text-2xl max-w-[170px]">{props.titulo}</p>
                        <div className="bg-white rounded-full p-1">
                            <img className="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* badges */}
                <div className="flex flex-wrap gap-2">
                    {
                        props.categorias.map((categoria, i) => (
                            <Badge outline text={categoria} key={i} />
                        ))
                    }
                </div>
            </div>

            {/* footer */}
            <div className="mt-3 px-3 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-lg">{props.divisa}{props.pago}/hr</span>
                    <span className="font-bold text-zinc-400 text-sm">{props.ubicacion}</span>
                </div>
                <ButtonBase>
                    Details
                </ButtonBase>
            </div>
        </div>
    )
}