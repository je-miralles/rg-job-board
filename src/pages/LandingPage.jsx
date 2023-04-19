import { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { createStyles, rem, Container, Title, Grid } from '@mantine/core';

import JobCard from './JobCard';

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
}));

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

  return (
    <main>
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Resource Generation Job Board
          </Title>
        </div>
      </Container>
      <Container>
        <Grid align="stretch">
          {data.map(d => (
            <Grid.Col md={6} lg={3} key={d.title}>
              <JobCard data={d}></JobCard>
            </Grid.Col>))}
        </Grid>
      </Container>
    </main>
  );
}

LandingPage.defaultProps = {
  url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTIAE4rAi3VwxQ3zSHlBgZNg43gfMVJ-uYiXFDvdDHNQMYPTNyir155Vbv2o2KacdYb8BZSSIJI88A/pub?gid=0&single=true&output=csv"
};
