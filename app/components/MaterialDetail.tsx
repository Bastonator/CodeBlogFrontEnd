import React from 'react'
import {MaterialType} from "@/app/(root)/page";

interface MaterialProps {
    material: MaterialType,
}



const MaterialDetail:React.FC<MaterialProps> = ({material}) => {
    return (


        <>
            <section className={"pink_container !min-h-[230px] hover:bg-red-800 transition"}>
                <p className={"tag text-white hover:bg-yellow-400 transition"}>
                    {material.created_at}
                </p>
                <h1 className={"heading hover:bg-blue-300 transition"}>
                    {material.name}
                </h1>
                <p className={"sub-heading !max-w-5xl"}>
                    {material.description}
                </p>
            </section>
            <section className={"section_container"}>
                <div className={"space-y-5 mt-10 max-w-4xl mx-auto"}>
                    <h3 className={"text-30-bold"}>
                        Subject Details
                    </h3>
                </div>
            </section>
        </>

    )
}

export default MaterialDetail
