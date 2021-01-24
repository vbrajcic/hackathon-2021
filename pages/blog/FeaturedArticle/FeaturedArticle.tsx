import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hyperlink from 'components/Hyperlink';
import Post from 'types/posts/post';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import FingerprintCard from './FingerprintCard';

import styles from './FeaturedArticle.module.scss';

interface FeaturedArticleProps {
  post: Post;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ post }) => {
  const { isMobile } = useBreakpoint();

  if (!post) {
    return null;
  }

  const { title, featuredImage, excerpt, slug } = post;

  return (
    <Container component="section" maxWidth="xl" disableGutters={isMobile} className={styles.container}>
      {isMobile && (
        <>
          <div className={styles.featuredImageWrapper}>
            <img src={featuredImage.node.sourceUrl} alt="Featured article" className={styles.featuredImage} />
          </div>
          <FingerprintCard />
        </>
      )}
      <Container maxWidth="xl" disableGutters={!isMobile} className={styles.heroWrapper}>
        {!isMobile && (
          <div
            className={styles.backgroundImgWrapper}
            style={{ backgroundImage: `url(${featuredImage.node.sourceUrl})` }}
          />
        )}
        <Grid className={styles.intro}>
          <Typography variant="h1" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={styles.subtitle}>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Typography>
          <Grid container className={styles.bottomWrapper}>
            <Grid item md={5} xl="auto">
              <Hyperlink href={slug} component={<Button color="primary">Read more</Button>} />
            </Grid>
            {!isMobile && (
              <Grid item md={7} xl="auto" className={styles.fingerprintCardWrapper}>
                <FingerprintCard />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FeaturedArticle;
