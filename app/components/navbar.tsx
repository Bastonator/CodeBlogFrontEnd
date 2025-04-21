import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"px-5 py-3 bg-white shadow-sm font-work-sans"}>
            <nav className={"flex justify-between items-center"}>
                <Link href={"/"}>
                    <img src={"/MoreTech logo.enc"} alt={"home-logo"} height={62} width={42} />
                </Link>

                <div className={"flex items-center gap-5 text-black"}>
                    <button>
                        <span className={"text-20-medium hover:text-rose-700 transition"}>
                            Enroll Now!!
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar