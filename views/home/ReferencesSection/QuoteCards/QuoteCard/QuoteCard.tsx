import React from 'react';
import Card from '@material-ui/core/Card';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Quote } from 'config/quotes';

import styles from './QuoteCard.module.scss';

interface QuoteProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteProps> = ({ quote: { text, companyImgSrc, author } }) => {
  const { isMobile } = useBreakpoint();

  return (
    <Card className={styles.container} classes={{ root: styles.root }}>
      <Grid container className={styles.textWrapper}>
        <FormatQuoteIcon className={styles.quotesIcon} />
        <Typography variant="body1" className={styles.quoteText}>
          {text}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justify="space-between" className={styles.footer}>
        <Grid container alignItems="center">
          <img src={companyImgSrc} alt="Partner's logo" className={styles.companyImg} />
          <Grid container direction="column" className={styles.authorNameAndTitleWrapper}>
            <Typography variant="body2" className={styles.authorName}>
              {author.name}
            </Typography>
            <Typography variant="body2">{author.title}</Typography>
          </Grid>
        </Grid>
        {!isMobile && (
          <div
            style={{
              backgroundImage: `url(${author.imgSrc})`,
            }}
            className={styles.authorImg}
          />
        )}
      </Grid>
    </Card>
  );
};

export default QuoteCard;
