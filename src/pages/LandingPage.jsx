import { React, useEffect, useState } from "react";
import { csv } from "d3-fetch";

export default function LandingPage({ url }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const theCsv = await csv(url);
                console.log("theCsv", theCsv);
                setData([...theCsv]);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [url]);

    return(
        <div className="container">
            <h1>Hello, landing page</h1>
            <div className="listings">
                {Object.keys(data).map((listing, key) => (
                    <div className="listing-item" key={key}>
                        key : {key},
                        title : {data[listing].title},
                        description : {data[listing].description},
                        contact : {data[listing].contact}
                    </div>
                ))}
            </div>
        </div>
    );
}
