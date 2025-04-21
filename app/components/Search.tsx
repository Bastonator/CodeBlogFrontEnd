"use client";
import React from 'react'
import {useState, useEffect} from "react";

type SearchProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

const Search:React.FC<SearchProps> = ({searchTerm, setSearchTerm}) => {


    return (
         <form className={"flex sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[505px] transition"}>
                    <input className={"search-form search-input transition"} placeholder={"Search Materials"} value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
             {/*<div className={"-ml-16 mt-12  flex"}>
                 <button className={"search-btn text-white"} type={"submit"}>
                     Q
                 </button>
             </div>*/}
            </form>
)
}
export default Search
