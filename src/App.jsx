// import React from 'react'
// import Hero from './components/hero/Hero'
// import Services from "./components/services/Services"
// import Portfolio from "./components/portfolio/Portfolio"
// import Contact from "./components/contact/Contact"
import { lazy, Suspense } from "react";
// import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const App = () => {
  return (
    <div className='container'>
      <section id="home">
      <Hero/>
      </section>
      <section id="services">
      <Services/>
      </section>
      <section id="portfolio">
      <Portfolio/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
    </div>
  )
}

export default App