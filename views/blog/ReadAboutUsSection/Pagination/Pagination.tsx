import React from 'react';
import cn from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from './Pagination.module.scss';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, onChange }) => {
  const handlePaginationChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;
    onChange(+value);
  };

  if (!count) {
    return null;
  }

  return (
    <Grid container classes={{ root: styles.root }} className={styles.container} justify="center">
      {[...Array(count)]
        .map((_, i) => i + 1)
        .map(index => (
          <Button
            key={index}
            startIcon={false}
            color="secondary"
            className={cn(styles.button, { [styles.active]: page === index })}
            value={index}
            onClick={handlePaginationChange}
            disableElevation={page !== index}
          >
            {index}
          </Button>
        ))}
    </Grid>
  );
};

export default Pagination;
