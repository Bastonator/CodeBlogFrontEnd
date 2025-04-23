"use client";
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import Snippets from "@/app/components/Snippets";
import MaterialDetail from "@/app/components/MaterialDetail";
import {MaterialType} from "@/app/(root)/page";



export type SnippetType = {
    id: string;
    text: string;
    code: string;
    created_at: string;
    image: string;
}


function Page() {

    const {slug} = useParams()

    const [material, setMaterial] = useState<MaterialType | null>(null);

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

    if (!material) {
        return <div>Loading...</div>;
    }
    return (
        <>

            <MaterialDetail material={material}/>

            {snippets.map(snippet => {
                return <Snippets key={snippet.id} snippet={snippet}/>
            })}
        </>
    )
}

export default Page