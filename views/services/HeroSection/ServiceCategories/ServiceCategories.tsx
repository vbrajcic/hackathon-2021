import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import serviceCategories from 'config/serviceCategories';

import Category from './Category';

import styles from './ServiceCategories.module.scss';

const ServiceCategories: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Paper id="contact-form" classes={{ root: styles.container }}>
      <Grid container direction={isMobile ? 'column' : 'row'} justify="space-between" wrap="nowrap">
        {serviceCategories.map(({ name, description, icon }) => (
          <Grid key={name} item className={styles.categoryWrapper}>
            <Category key={name} name={name} description={description} icon={icon} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ServiceCategories;
