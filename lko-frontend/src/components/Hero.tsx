import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Welcome to LKO Frontend</h1>
    <p>This is the hero component.</p>
  </section>
);

export default Hero;
