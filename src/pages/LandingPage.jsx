import { React, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { csv } from 'd3-fetch'

const inter = Inter({ subsets: ['latin'] })

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
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={inter.className}>Hello, landing page</h1>
      </div>

      <div className={styles.grid}>
        {Object.keys(data).map((listing_num, listing_key) => (
          <div className={styles.card} key={listing_key}>
            <ul className={inter.className}>
              {Object.keys(data[listing_num]).map((field_name, field_key) => (
                <li key={field_key}>{field_name}, {data[listing_num][field_name]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
