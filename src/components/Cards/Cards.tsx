import React, { FC } from 'react';
import Link from 'next/link';
import CardItem from '../CardItem/CardItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Cards: FC = ({ cards }) => {
  const cardsArr = cards.features.slice(0, 12).map((el) => {
    return el['properties']['Attributes'];
  });

  return (
    <Grid
      container
      wrap="wrap"
      spacing={{ xs: 2, sm: 4, md: 4, lg: 4 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
      sx={{
        justifyContent: 'center',
      }}
    >
      {' '}
      {cardsArr.map((item) => (
        <CardItem key={item.Kind} card={item} />
      ))}
    </Grid>
  );
};

export default Cards;
