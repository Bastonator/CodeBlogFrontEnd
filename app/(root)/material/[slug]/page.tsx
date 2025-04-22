"use client";
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import Snippets from "@/app/components/Snippets";
import Link from "next/link";


export type SnippetType = {
    id: string;
    text: string;
    code: string;
    created_at: string;
    image: string;
}


function Page() {

    const {slug} = useParams()

    const [material, setMaterial] = useState({});

    useEffect(() => {
        fetch(`http://51.21.127.208/api/${slug}/`)
        .then((response) => response.json())
        .then((data) => setMaterial(data.data))
        .catch((error) => console.error("Error", error));
    }, [slug]);


    const [snippets, setSnippets] = useState<SnippetType[]>([]);

    useEffect(() => {
        fetch(`http://51.21.127.208/api/materials/${slug}/snippets/`)
            .then((response) => response.json())
            .then((data) => setSnippets(data.data))
            .catch((error) => console.error("Error", error));
    }, [slug]);

    console.log(snippets)

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

            {snippets.map(snippet => {
                return <Snippets snippet={snippet}/>
            })}
        </>
    )
}

export default Page