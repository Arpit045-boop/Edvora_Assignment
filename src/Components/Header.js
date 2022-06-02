import React, { useEffect, useState } from "react";

function Header() {

    const [data, setData] = useState("NULL");

    const getuser = async () => {
        const response = await fetch("https://assessment.api.vweb.app/user");
        // console.log(response);
        setData(await response.json());
        // console.log(data);
    }
    useEffect(() => {
        getuser();
    }, [])
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="logo">Edvora</h1>
                <div>
                    <h2 className="name">{data.name}</h2>
                    <img className="rounded-circle" src={data.url} alt="" />
                </div>
            </nav>
        </header>
    );
}

export default Header;

