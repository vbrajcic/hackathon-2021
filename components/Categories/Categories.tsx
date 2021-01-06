import React from 'react';
import { Edges } from 'types/common';
import Category from 'types/posts/category';
import styles from './Categories.module.scss';

interface CategoriesProps {
  categories: Edges<Category>;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => (
  <span className={styles.container}>
    under
    {categories.edges.length > 0 ? (
      categories.edges.map(category => (
        <span key={category.node.name} className={styles.container}>
          {category.node.name}
        </span>
      ))
    ) : (
      <span className={styles.container}>{categories.edges[0].node.name}</span>
    )}
  </span>
);

export default Categories;
