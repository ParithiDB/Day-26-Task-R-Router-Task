import React from "react";
import { Link } from "react-router-dom";
import HomeImage1 from "./Images/HomeImage1.jpeg";
import HomeImage2 from "./Images/HomeImage2.jpeg";
import HomeImage3 from "./Images/HomeImage3.jpeg";
import HomeImage4 from "./Images/HomeImage4.jpeg";
import HomeImage5 from "./Images/HomeImage5.jpeg";
import HomeImage6 from "./Images/HomeImage6.jpeg";


export default function Home() {

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/unique-project-ideas-for-college-students/"></Link>
      <img src={HomeImage1} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/unique-project-ideas-for-college-students/">Top 10 Unique Project Ideas for College Students</Link></p>
        <p className="card-text">In this competitive world where success is accompanied by the uniqueness of an individual, especially</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/unique-project-ideas-for-college-students/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">2 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/"></Link>
      <img src={HomeImage2} className="card-img-top" alt="..." />
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
    <Link className="nav-link" to="https://www.guvi.in/blog/machine-learning-vs-deep-learning/"></Link>
      <img src={HomeImage3} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/machine-learning-vs-deep-learning/">Machine Learning Vs Deep Learning: A Layman’s Guide to AI in Easy Words</Link></p>
        <p className="card-text">In the domain of artificial intelligence (AI), the terms “machine learning” and “deep learning” are</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/machine-learning-vs-deep-learning/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">1 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/hire-machine-learning-engineers-with-ease/"></Link>
      <img src={HomeImage4} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/hire-machine-learning-engineers-with-ease/">Hire Machine Learning Engineers with Ease | A Complete Guide</Link></p>
        <p className="card-text">Growing companies in all fields are hiring Machine Learning Engineers to improve customer relationships, enhance</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/hire-machine-learning-engineers-with-ease/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">1 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/what-is-production-management/"></Link>
      <img src={HomeImage5} className="card-img-top" alt="..." />
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
    <Link className="nav-link" to="https://www.guvi.in/blog/vmware-vs-virtualbox/"></Link>
      <img src={HomeImage6} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/vmware-vs-virtualbox/">VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation.</Link></p>
        <p className="card-text">In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/vmware-vs-virtualbox/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">27 June 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}