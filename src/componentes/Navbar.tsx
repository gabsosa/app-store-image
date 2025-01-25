import React, { useState } from "react"
import { IoMdMenu } from "react-icons/io";

interface buttonProps { 
    text: string;
}

const Navbar : React.FC = () => {

    const [menu, setMenu] = useState<boolean>(true);

    return (
        <nav className="w-full h-10 bg-red-300 text-white flex">
            <div className="w-1/2 pl-4 flex items-center">
                <h3>StoreImage</h3>
            </div>
            <div className="w-1/2 flex items-center justify-end sm:hidden">
                <span className="h-full w-10 flex items-center justify-center hover:bg-red-400" onClick={() => setMenu(!menu)}>
                    <IoMdMenu />
                </span>
            </div>
            <div className={menu ? "flex w-full h-auto flex-col absolute top-10 bg-red-300 sm:hidden" : "hidden"}>
                <Button text="Iniciar sesión"/>
                <Button text="Registrarse"/>
            </div>
            <div className="w-1/2 hidden items-center justify-end sm:flex pr-8 gap-4">
                <Button text="Iniciar sesión"/>
                <Button text="Registrarse"/>
            </div>
        </nav>
    )
}

const Button : React.FC<buttonProps> = ({ text }) => {
    return (
        <button className="h-8 flex items-center justify-center w-auto p-2 rounded-lg border-red-200 cursor-pointer hover:bg-red-400">
            { text }
        </button>
    )
}

export default Navbar;