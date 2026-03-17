/**
 * Hero component - displays a prominent heading and supporting text.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Welcome to Our Site</h1>
    <p>This is the hero section with some introductory text.</p>
  </section>
);

export default Hero;
