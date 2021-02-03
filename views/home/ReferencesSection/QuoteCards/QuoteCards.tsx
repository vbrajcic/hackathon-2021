import React, { useRef, useState, useEffect } from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import quotes from 'config/quotes';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';

import QuoteCard from './QuoteCard';
import useClientWidth from './useClientWidth';

import styles from './QuoteCards.module.scss';

const QuoteCards: React.FC = () => {
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const clientWidth = useClientWidth();

  const [innerWrapperWidth, setInnerWrapperWidth] = useState<number>(0);

  const { isMobile, isDesktop } = useBreakpoint();
  const {
    breakpoints: {
      values: { xl, lg },
    },
  } = useTheme();

  useEffect(() => {
    let width = clientWidth;

    /**
     * ReferencesSection > Container > padding-left: 120px
     * QuoteCards > .scrollBtnWrapper > width: 160px
     * ReferencesSection > Container > margin-left: (clientWidth - xl) / 2
     */
    if (clientWidth > xl) {
      width = clientWidth - 120 - 160 - (clientWidth - xl) / 2;
    } else if (clientWidth > lg) {
      width = clientWidth - 120 - 160;
    }

    setInnerWrapperWidth(width);
  }, [clientWidth, xl, lg]);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerWrapperRef && innerWrapperRef.current) {
      if (value === 'right') {
        innerWrapperRef.current.scrollLeft += isDesktop ? 800 : 730;
      } else {
        innerWrapperRef.current.scrollLeft -= isDesktop ? 800 : 730;
      }
    }
  };

  return (
    <Grid container direction={!isDesktop ? 'column' : 'row'} className={styles.container}>
      {!isMobile && (
        <Grid item className={styles.scrollBtnWrapper}>
          <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn}>
            <ChevronLeftIcon className={styles.icon} />
          </IconButton>
          <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn}>
            <ChevronRightIcon className={styles.icon} />
          </IconButton>
        </Grid>
      )}
      <Grid item className={styles.quotesWrapper}>
        <Grid className={styles.innerQuotesWrapper} style={{ width: innerWrapperWidth }} ref={innerWrapperRef}>
          {quotes.map(quote => (
            <QuoteCard key={quote.text} quote={quote} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuoteCards;
