import { React, useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import { createStyles, rem, Container, Title, Grid } from '@mantine/core'
import JobCard from './JobCard'

// OLD: RELEVANT TO NEXT THEME/COMPONENT LIBRARY
// import styles from '@/styles/Home.module.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,

    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },
}))

export default function LandingPage({ url }) {
  const { classes } = useStyles()
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
    <main>
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Resource Generation Job Board
          </Title>
        </div>
      </Container>
      <Container>
        <Grid>
          {data.map(d => (
            <Grid.Col span={4} key={d.title}>
              <JobCard data={d}></JobCard>
            </Grid.Col>))}
        </Grid>
      </Container>
    </main>
  )

  // OLD: FROM NEXT THEME/COMPONENT LIBRARY
  // return(
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <h1 className={inter.className}>Hello, landing page</h1>
  //     </div>

  //     <div className={styles.grid}>
  //       {Object.keys(data).map((listing_num, listing_key) => (
  //         <div className={styles.card} key={listing_key}>
  //           <ul className={inter.className}>
  //             {Object.keys(data[listing_num]).map((field_name, field_key) => (
  //               <li key={field_key}>{field_name}, {data[listing_num][field_name]}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   </main>
  // );
}
