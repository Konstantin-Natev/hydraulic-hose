import { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './page.module.scss';
import { Grid } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Grid className={styles.grid}>
      <Box>
        <Typography className={styles.title}>
          Welcome to My Next.js Page!
        </Typography>
        <Typography className={styles.description}>
          This is a simple page created with Next.js, TypeScript, Material-UI, and Sass.
        </Typography>
        <Button variant="contained" color="primary" className={styles.button}>
          Click Me
        </Button>
      </Box>
    </Grid>
  );
};

export default Home;
