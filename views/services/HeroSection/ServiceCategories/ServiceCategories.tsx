import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import serviceCategories from 'config/serviceCategories';

import Category from './Category';

import styles from './ServiceCategories.module.scss';

const ServiceCategories: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      {isDesktop ? (
        <Paper classes={{ root: styles.paper }}>
          <Grid container direction="row" justify="space-between" wrap="nowrap">
            {serviceCategories.map(({ name, description, icon }) => (
              <Grid key={name} item className={styles.categoryWrapper}>
                <Category key={name} name={name} description={description} icon={icon} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      ) : (
        <Grid container direction={isMobile ? 'column' : 'row'} justify="space-between" wrap="nowrap">
          {serviceCategories.map(({ name, description, icon }) => (
            <Card key={name} className={styles.categoryCard}>
              <Category key={name} name={name} description={description} icon={icon} />
            </Card>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default ServiceCategories;
