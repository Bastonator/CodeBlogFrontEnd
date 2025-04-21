'use client';
import Search from "@/app/components/Search";
import MaterialCard from "@/app/components/MaterialCard";
import {useEffect, useState} from "react";


export type MaterialType = {
    slug: string;
    name: string;
    category: string;
    created_at: string;
    description: string;
};

export default function Home() {


    const [materials, setMaterials] = useState<MaterialType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("http://localhost:8000/api/")
            .then((response) => response.json())
            .then((data) => setMaterials(data.data))
            .catch((error) => console.error("Error", error));
    }, []);

    console.log(materials)

    const filteredMaterials = materials.filter((material) => {
        const term = searchTerm.toLowerCase();

        return (
            material.name.toLowerCase().includes(term) ||
            material.slug.toLowerCase().includes(term) ||
            material.category.toLowerCase().includes(term) ||
            material.description.toLowerCase().includes(term)
        )
    });

  return (
      <>
          <section className={"pink_container justify-center"}>
              <h1 className={"heading"}>
                  What do you want to learn,
                  <br/>
                  Search it and Learn it.
              </h1>
              <p className={"sub-heading !max-w-3xl"}>
                  Search for subjects, read about them and implement them in your code
              </p>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </section>

          <section className={"section_container"}>
              <p className={"text-30-semibold"}>
                  All Materials
              </p>
              <ul className={"mt-7 card_grid"}>
                  <MaterialCard materials={filteredMaterials}/>
              </ul>
          </section>
      </>
  );
}