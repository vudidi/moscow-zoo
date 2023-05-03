import { FC } from 'react';
import Layout from '@/components/Layout/Layout';
import Cards from '../components/Cards/Cards';

const Main: FC = ({ cards }: any) => {
  return (
    <Layout title="Главная страница">
      <main>
        <Cards cards={cards} />
      </main>
    </Layout>
  );
};

export default Main;

export async function getStaticProps() {
  const res = await fetch(
    'https://apidata.mos.ru/v1/datasets/3286/features?api_key=31766ff82a1af42923c869c7bd883a63'
  );
  const cards = await res.json();

  return {
    props: {
      cards,
    },
  };
}
