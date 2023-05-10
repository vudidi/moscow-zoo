import { FC } from 'react';
import styles from '../styles/error.module.scss';
import Layout from '../components/Layout/Layout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CustomError: FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <Layout title={`${statusCode}`}>
      <Container maxWidth="sm" className={styles.error}>
        <Typography
          variant="h5"
          color="primary"
          sx={{
            textAlign: 'center',
          }}
        >{`Произошла ошибка: ${statusCode}`}</Typography>
        <div className={styles.error__image}></div>
      </Container>
    </Layout>
  );
};

export default CustomError;
