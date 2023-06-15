import React from 'react';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import SearchItems from '../components/search_items/SearchItems';
import Hero from '../components/hero/Hero';
import Recipe_section from '../components/recipe_section/Recipe_section'
import Footer from '../components/footer/Footer';

export default function Home() { 
  return (
    <Container>
      <Header />
      <SearchItems/>
      <Hero/>
      <Recipe_section/>
      <Footer/>
    </Container>
  )
}