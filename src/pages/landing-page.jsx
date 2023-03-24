import { React, useEffect, useState } from "react";
import { csv } from "d3-fetch";

export default function Landing_Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTIAE4rAi3VwxQ3zSHlBgZNg43gfMVJ-uYiXFDvdDHNQMYPTNyir155Vbv2o2KacdYb8BZSSIJI88A/pub?gid=0&single=true&output=csv";

        const fetchData = async () => {
            try {
                const theCsv = await csv(url);
                theCsv.map((value, key) => {
                    console.log("key:", key, "value:", value.title);
                });
                setData(theCsv);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="container">
            <h1>Hello, landing page</h1>
            <div className="listings">
                {Object.entries(data).map((listing, key) => (
                    <div className="item" key={key}>
                        title {key}:  {listing.title}
                    </div>
                ))}
             </div>
        </div>
    );
}
