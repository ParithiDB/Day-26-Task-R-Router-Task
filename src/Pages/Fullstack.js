import React from "react";
import { Link } from "react-router-dom";
import fsd1 from './Images/fsd1.jpeg';
import fsd2 from './Images/fsd2.jpeg';
import fsd3 from './Images/fsd3.jpeg';
import fsd4 from './Images/fsd4.jpeg';
import fsd5 from './Images/fsd5.jpeg';
import fsd6 from './Images/fsd6.jpeg';

export default function Fullstack() {

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/how-to-land-a-software-developer-internship/"></Link>
  <img src={fsd1} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/how-to-land-a-software-developer-internship/">7 Powerful Steps to Land a Software Developer Internship</Link></p>
    <p className="card-text">Software development is set to grow at the rate of 25% between 2021-2031. An illustrious</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/how-to-land-a-software-developer-internship/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">2 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/hibernate-interview-questions/"></Link>
  <img src={fsd2} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/hibernate-interview-questions/">Top 26 Hibernate Interview Questions and Answers (2023)</Link></p>
    <p className="card-text">If you’re at a technical job interview, the last thing you want is to get</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/hibernate-interview-questions/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">10 May 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/web-development-roadmap-for-beginners/"></Link>
  <img src={fsd3} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/web-development-roadmap-for-beginners/">Web Development Roadmap for Beginners 2023</Link></p>
    <p className="card-text">Web Development is a booming, high-paying, and indeed promising career in the IT industry, into</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/web-development-roadmap-for-beginners/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">17 March 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/best-skills-for-web-development/"></Link>
  <img src={fsd4} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/best-skills-for-web-development/">10 Best Skills for Web Development</Link></p>
    <p className="card-text">Web Development is a great, high-paying, and in-demand skill every individual must have. The world</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/best-skills-for-web-development/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">13 March 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/top-backend-developer-skills-you-should-know/"></Link>
  <img src={fsd5} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/top-backend-developer-skills-you-should-know/">Top 7 Back-End Developer Skills You Should Know</Link></p>
    <p className="card-text">We all rely on the internet for everything. Open google and ask your doubt, and</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/top-backend-developer-skills-you-should-know/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">4 March 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/top-frontend-developer-skills-you-should-know/"></Link>
  <img src={fsd6} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/top-frontend-developer-skills-you-should-know/">Top 10 Front-End Developer Skills You Should Know</Link></p>
    <p className="card-text">Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who’s the</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/top-frontend-developer-skills-you-should-know/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">2 March 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>
    </div>
    )
}