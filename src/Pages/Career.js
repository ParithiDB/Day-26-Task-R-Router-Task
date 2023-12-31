import React from "react";
import { Link } from "react-router-dom";
import c1 from './Images/c1.jpeg';
import c2 from './Images/c2.jpeg';
import c3 from './Images/c3.jpeg';
import c4 from './Images/c4.jpeg';
import c5 from './Images/c5.jpeg';
import c6 from './Images/c6.jpeg';

export default function Career() {

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/"></Link>
      <img src={c1} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/">Graphic Designer vs. UI/UX Designer: Key Differences You Should Know</Link></p>
        <p className="card-text">It has always been confusing for people to understand the key differences between Graphic designers</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">2 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/what-is-production-management/"></Link>
      <img src={c2} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/what-is-production-management/">What is Production Management | The Ultimate Guide</Link></p>
        <p className="card-text">In today’s constantly evolving business landscape, production managers are essential to the success of any</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/what-is-production-management/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">1 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/career-options-in-india/"></Link>
  <img src={c3} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/career-options-in-india/">Top Career Options in India in 2023

</Link></p>
    <p className="card-text">In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/career-options-in-india/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">27 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/is-aws-certification-worth/"></Link>
  <img src={c4} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/is-aws-certification-worth/">Is AWS Certification Worth It? | Best AWS Certifications 2023

</Link></p>
    <p className="card-text">IT runs the world and is everywhere. And if you’re someone who’s least interested in</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/is-aws-certification-worth/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">26 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/what-is-tcs-nqt/"></Link>
  <img src={c5} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/what-is-tcs-nqt/">What is TCS NQT | Everything You Need to Know

</Link></p>
    <p className="card-text">As a fresh graduate, your goal is to join a reputable company and start your</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/what-is-tcs-nqt/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">20 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/how-to-land-a-machine-learning-internship/"></Link>
  <img src={c6} className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/how-to-land-a-machine-learning-internship/">7 Powerful Steps to Land a Machine Learning Internship

</Link></p>
    <p className="card-text">Machine learning is set to grow at the rate of 36.2% CAGR by the end</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/how-to-land-a-machine-learning-internship/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">5 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>
    </div>
    )
}