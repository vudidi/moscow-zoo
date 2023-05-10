import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import styles from './CardItem.module.scss';

const CardItem: FC = ({ card }) => {
  return (
    <Grid className={styles.card} item xs={2} sm={4} md={4}>
      <Card
        sx={{
          position: 'relative',
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          alt={card.Kind}
          height="180"
          width="140"
          image={`https://op.mos.ru/MEDIA/showFile?id=${card.Photo}`}
          title={card.Kind}
        />
        <Box className={styles.card__box}>
          <CardContent className={styles.card__content}>
            <div className={styles.card__backgroundImg}></div>
            <div className={styles.card__line}>
              <Typography
                className={styles.card__title}
                variant="h6"
                variantMapping={{ subtitle1: 'h1' }}
                gutterBottom={true}
                color="primary.contrastText"
              >
                {card.Kind}
              </Typography>
            </div>

            <Typography
              className={styles.card__text}
              variant="subtitle1"
              paragraph={true}
              color="primary.dark"
            >
              {card.Info}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/cards/${card.id}`} className={styles.card__link}>
              Подробнее
            </Link>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardItem;
