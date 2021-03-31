import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { ServiceCategory } from 'config/serviceCategories';

import styles from './Category.module.scss';

const Category: React.FC<ServiceCategory> = ({ name, description, icon }) => {
  const CategoryIcon = icon;

  return (
    <Grid className={styles.container} classes={{ root: styles.root }}>
      <CategoryIcon className={styles.icon} />
      <Typography variant="h4" className={styles.title}>
        {name}
      </Typography>
      <Typography variant="body2" className={styles.description}>
        {description}
      </Typography>
    </Grid>
  );
};

export default Category;
