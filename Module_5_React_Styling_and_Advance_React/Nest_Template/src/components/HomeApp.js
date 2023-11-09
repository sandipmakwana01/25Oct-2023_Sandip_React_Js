import React from "react";

import { BiSearch } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFire } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import f8 from '../images/f8.jpg';
import f9 from '../images/f9.jpg';
import f10 from '../images/f10.jpg';
import f11 from '../images/f11.jpg';
import f12 from '../images/f12.jpg';

// import s1 from '../images/s1.webp';
// import s2 from '../images/s2.webp';
// import s3 from '../images/s3.webp';
// import s4 from '../images/s4.webp';
// import s5 from '../images/s5.webp';
import s6 from '../images/s6.jpg';


// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
// import { useEffect } from "react";

export default function Homeee() {

  // useEffect(() => {}, []);

  const option = {

    items: 1,
    loop: true,
    autoplay: true
  }
  const option2 = {

    items: 10,
    loop: true,
    // autoplay: true,
    margin:10,
    dots:true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      800: {
        items: 6,
      },
      1200:{
        items:8,
      },
      1600:{
        items:10,
      },
    },
  }


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between ">
          <div className="hstack mt-2 mt-md-0 mx-auto mx-xl-0">
            <a href="/" target="" rel="" className="text-decoration-none me-2 text-dark">
              About us
            </a>
            <a href="/" target="" rel="" className="text-decoration-none border-start border-end border-2 border-secondary ps-2 pe-2 text-dark">
              My Account
            </a>
            <a href="/" target="" rel="" className="text-decoration-none ps-2 me-2 text-dark">
              Wishlist
            </a>
            <a href="/" target="" rel="" className="text-decoration-none border-start border-2 border-secondary ps-2 text-dark">
              Order Traking
            </a>
          </div>
          <div className="hstack mt-2 d-none d-lg-block">
            <span>Get gret device up 50% off </span>
            <a href="/" target="" rel="" className="text-decoration-none ms-2 text-success">
              View details
            </a>
          </div>
          <div className="d-flex flex-row hstack">
            <div className="d-none d-xl-block">
              <span>Need help? Call Us</span>
              <a href="/" target="" rel="" className="text-decoration-none text-success me-2">
                +1800 900 
              </a>
              <span>|</span>
            </div>

            

            

            <div className="d-none d-md-block">
              <select class="form-select border-0 focus-ring focus-ring-light" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="d-none d-md-block">
              <select class="form-select border-0 focus-ring focus-ring-light" aria-label="Default select example">
                <option selected>USD</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            
          </div>
        </div>
      </div>

      <hr className="mb-0"/>

      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand fs-1 text-success  mx-auto mx-lg-0" href="/">
              Nest
            </a>

            <form className="d-flex border border-3 border-secondary rounded-3  mx-auto mx-sm-0">
              <div className="dropdown hstack">
                <button
                  class="btn btn-outline-whight dropdown-toggle"
                  type="button"
                  id="categoryDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 All Categori
                </button>
                <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
                  <li>
                    <a class="dropdown-item" href="/">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Category 3
                    </a>
                  </li>
                </ul>
              </div>

              <input
                className="form-control me-2 border-0 focus-ring focus-ring-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-whight border-0" type="submit">
                <BiSearch className="" size={30} />
              </button>
            </form>

            <div className="d-none d-xl-block">
              <select class="form-select border-0 focus-ring focus-ring-light" aria-label="Default select example">
                <option selected>Your Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="hstack mx-auto mx-lg-0 mt-2 mt-lg-0">
              <a href="/" target="" rel="" className="text-dark text-decoration-none">
                <BsArrowRepeat />
                Compare
              </a>
              <a href="/" target="" rel="" className="text-dark text-decoration-none ms-2">
                <BsHeartFill />
                Wishlist
              </a>
              <a href="/" target="" rel="" className="text-dark text-decoration-none ms-2">
                <BsCart3 />
                Cart
              </a>
              <a href="/" target="" rel="" className="text-dark text-decoration-none ms-2">
                <BsPersonFill />
                Account
              </a>
            </div>
          </div>
        </nav>
      </div>

      <hr className="mb-0"/>

      <div className="container">
        <Navbar expand="lg">
          <div >
            <select class="form-select focus-ring focus-ring-light border-light bg-success text-light" aria-label="Default select example">
              <option selected>Browse All Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link href="#" >
                <BsFire color="green"/>
                Hot Deals
              </Nav.Link>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Vendors" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mega menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="hstack d-none d-xl-block my-auto">
              <BsHeadset size={50} />
            </div>
          <div className="d-flex d-none d-xl-block">
            
            <div>
              <span className="text-success fs-3">1900 - 888</span>
              <br />
              <span>24/7 Support Center</span>
            </div>
          </div>
        </Navbar>
      </div>

      <hr className="mb-0"/>

      <div className="container ">
        <OwlCarousel className="owl-theme" {...option}>
          {/* <div class="item1">
            <img src={s1}  alt="img1"/>
          </div>
          <div class="item1">
            <img src={s2}  alt="img1"/>
          </div>
          <div class="item1">
            <img src={s3}  alt="img1"/>
          </div>
          <div class="item1">
            <img src={s4}  alt="img1"/>
          </div>
          <div class="item1">
            <img src={s5}  alt="img1"/>
          </div> */}
          <div class="item1">
            <img src={s6}  alt="img1"/>
          </div>
          <div class="item1">
            <img src={s6}  alt="img1"/>
          </div>
        </OwlCarousel>
      </div>

      <div className="container">
        <h2>Fresh Fruits</h2>
        <OwlCarousel className="owl-theme" {...option2}>
          <div class="item2">
            <img src={f1}  alt="img1"/>
          </div>
          <div class="item2">
            <img src={f2}  alt=""/>
          </div>
          <div class="item2">
            <img src={f3}  alt=""/>
          </div>
          <div class="item2">
            <img src={f4}  alt=""/>
          </div>
          <div class="item2">
            <img src={f5}  alt=""/>
          </div>
          <div class="item2">
            <img src={f6}  alt=""/>
          </div>
          <div class="item2">
            <img src={f7}  alt=""/>
          </div>
          <div class="item2">
            <img src={f8}  alt=""/>
          </div>
          <div class="item2">
            <img src={f9}  alt=""/>
          </div>
          <div class="item2">
            <img src={f10}  alt=""/>
          </div>
          <div class="item2">
            <img src={f11}  alt=""/>
          </div>
          <div class="item2">
            <img src={f12}  alt=""/>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
