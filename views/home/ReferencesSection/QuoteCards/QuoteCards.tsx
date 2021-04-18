import React, { useRef, useState, useEffect } from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import quotes from 'config/quotes';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';

import { useWindowSize } from 'react-use';

import QuoteCard from './QuoteCard';

import styles from './QuoteCards.module.scss';

const QuoteCards: React.FC = () => {
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const { width: clientWidth } = useWindowSize();

  const [innerWrapperWidth, setInnerWrapperWidth] = useState<number>(0);

  const { isMobile, isDesktop } = useBreakpoint();
  const {
    breakpoints: {
      values: { xl },
    },
  } = useTheme();

  useEffect(() => {
    /**
     * ReferencesSection > Container > padding-left: 120px
     * QuoteCards > .scrollBtnWrapper > width: 160px
     * ReferencesSection > Container > margin-left: (clientWidth - xl) / 2
     */
    let width = clientWidth - 280;

    if (clientWidth > xl) {
      width -= (clientWidth - xl) / 2;
    }

    setInnerWrapperWidth(width);
  }, [clientWidth, xl]);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerWrapperRef && innerWrapperRef.current) {
      if (value === 'right') {
        innerWrapperRef.current.scrollLeft += isDesktop ? 760 : 740;
      } else {
        innerWrapperRef.current.scrollLeft -= isDesktop ? 760 : 740;
      }
    }
  };

  return (
    <Grid container direction={!isDesktop ? 'column' : 'row'} className={styles.container}>
      {!isMobile && (
        <Grid item className={styles.scrollBtnWrapper}>
          <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn} title="left-icon">
            <ChevronLeftIcon className={styles.icon} />
          </IconButton>
          <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn} title="right-icon">
            <ChevronRightIcon className={styles.icon} />
          </IconButton>
        </Grid>
      )}
      <Grid item className={styles.quotesWrapper}>
        <Grid
          className={styles.innerQuotesWrapper}
          style={{ width: isDesktop ? innerWrapperWidth : '100%' }}
          ref={innerWrapperRef}
        >
          {quotes.map(quote => (
            <QuoteCard key={quote.text} quote={quote} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuoteCards;
