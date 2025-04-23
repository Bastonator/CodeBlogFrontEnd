"use client";
import React from 'react'
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import {MaterialType} from "@/app/(root)/page";

interface MaterialProps {
    materials: MaterialType,
}


const MaterialCard:React.FC<MaterialProps> = ({materials}) => {


    const allMaterials = materials.map((material) => {
        return(

        <li className={"startup-card group"} key={material.slug}>
            <div className={"flex-between"}>
                <p className={"startup-card_date -ml-3"}>
                    {material.created_at}
                </p>
                <div className={"flex gap-1.5"}>
                    <EyeIcon className={"size-6 text-primary"}/>
                    <span className={"text-16-medium"}>22</span>
                </div>
            </div>
            <div className={"flex-between mt-5 gap-5"}>
                <div className={"flex-1"}>
                    <Link href={`/material/${material.slug}`}>
                        <h3 className={"ml-1 text-20-medium text-purple-600"}>
                            {material.name}
                        </h3>
                        <p className={"ml-1 text-14-normal line-clamp-3"}>
                            {material.description}
                        </p>
                        <div className={"w-full"}>
                            <img src={"/MoreTech logo.enc"} alt={"thumbnail"}
                                 className={"rounded-1xl startup-card_img"} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={"flex-between gap-3 mt-1 -mb-3"}>
                    <p className={"transition font-semibold text-16-medium hover:text-rose-700"}>
                        {material.category}
                    </p>
                <Link href={`/material/${material.slug}`} className={"w-3/6 h-[32px] -mr-1"}>
                    <button
                        className={"bg-black text-white hover:bg-white hover:text-black border border-black rounded-full transition w-full h-full font-semibold"}>
                        Details
                    </button>
                </Link>
            </div>
        </li>)
    })

    return (
        <>
            {allMaterials}
        </>
    )
}
export default MaterialCard
