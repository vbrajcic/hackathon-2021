import React from 'react';
import Card from '@material-ui/core/Card';
import QuoteIcon from 'components/SvgIcons/Quote';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { Quote } from 'config/quotes';

import styles from './QuoteCard.module.scss';

interface QuoteProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteProps> = ({ quote: { text, companyImgSrc, author } }) => {
  const { isMobile } = useBreakpoint();

  return (
    <Card className={styles.container} classes={{ root: styles.root }}>
      <CardContent className={styles.content}>
        <Grid container alignItems="flex-start" className={styles.textWrapper}>
          <QuoteIcon className={styles.quotesIcon} />
          <Typography variant="body2" className={styles.quoteText}>
            {text}
          </Typography>
        </Grid>
        <Grid container alignItems="center" justify="space-between" className={styles.footer}>
          <Grid container alignItems="center" wrap="nowrap">
            <img src={companyImgSrc} alt="Partner's logo" className={styles.companyImg} />
            <Grid container direction="column" className={styles.authorNameAndTitleWrapper}>
              <Typography variant="body2" className={styles.authorName}>
                {author.name}
              </Typography>
              <Typography variant="body2" className={styles.authorTitle}>
                {author.title}
              </Typography>
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
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
