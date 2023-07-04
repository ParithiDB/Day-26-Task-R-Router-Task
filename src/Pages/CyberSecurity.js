import React from "react";
import { Link } from "react-router-dom";
import cs1 from './Images/cs1.jpeg';
import cs2 from './Images/cs2.gif';
import cs3 from './Images/cs3.jpeg';
import cs4 from './Images/cs4.jpeg';
import cs5 from './Images/cs5.gif';
import cs6 from './Images/cs6.jpeg';


export default function Cybersecurity() {

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"></Link>
  <img src={cs1} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/">Cybersecurity Vs Ethical Hacking: Top 10 Differences</Link></p>
    <p className="card-text">Cybersecurity & Ethical hacking and have been key in making sure that your data online</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">27 December 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/what-is-cybersecurity/"></Link>
  <img src={cs2} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/what-is-cybersecurity/">What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</Link></p>
    <p className="card-text">Look around today, you will witness that we are more reliant on technology and devices</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/what-is-cybersecurity/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">20 December 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/best-ethical-hacking-books/"></Link>
  <img src={cs3} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/best-ethical-hacking-books/">Top 10 Ethical Hacking Books for Beginner to Advanced</Link></p>
    <p className="card-text">Did you know that according to the University of Maryland hackers attack every 39 seconds</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/best-ethical-hacking-books/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">21 November 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/types-of-cybersecurity/"></Link>
  <img src={cs4} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/types-of-cybersecurity/">8 Different Types of Cybersecurity and Threats Involved
</Link></p>
    <p className="card-text">
Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/types-of-cybersecurity/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">9 November 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/coding-for-cybersecurity/"></Link>
  <img src={cs5} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/coding-for-cybersecurity/">Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?

</Link></p>
    <p className="card-text">Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/coding-for-cybersecurity/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">22 June 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/cyber-security-attacks-in-real-life/"></Link>
  <img src={cs6} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/cyber-security-attacks-in-real-life/">Top 7 Cyber Security Attacks in Real Life

</Link></p>
    <p className="card-text">Cyber security attacks are the type of actions that are designed to destroy, steal, modify,</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/cyber-security-attacks-in-real-life/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">10 June 2022  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>
    </div>
    )
}