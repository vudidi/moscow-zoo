import { FC } from 'react';
import CustomError from './error';
import Layout from '@/components/Layout/Layout';
import Cards from '@/components/Cards/Cards';
const axios = require('axios');

const Main: FC<{ cards: []; errorCode: number }> = ({ cards, errorCode }) => {
  if (errorCode) {
    return <CustomError statusCode={errorCode} />;
  }
  return (
    <Layout title="Главная страница">
      <main>
        <Cards cards={cards} />
      </main>
    </Layout>
  );
};

export default Main;

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      `https://apidata.mos.ru/v1/datasets/3286/features?api_key=31766ff82a1af42923c869c7bd883a63`
    );
    return {
      props: {
        cards: response.data,
      },
    };
  } catch (err: any) {
    return {
      props: {
        errorCode: err.response.status,
      },
    };
  }
};
