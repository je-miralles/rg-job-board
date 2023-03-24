import { React, useEffect } from "react";
import { csv } from "d3-fetch";

export default function Landing_Page() {

    useEffect(() => {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTIAE4rAi3VwxQ3zSHlBgZNg43gfMVJ-uYiXFDvdDHNQMYPTNyir155Vbv2o2KacdYb8BZSSIJI88A/pub?gid=0&single=true&output=csv";

        const fetchData = async () => {
            try {
                const theCsv = await csv(url)
                console.log(theCsv);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return <h1>Hello, landing page</h1>;
}
