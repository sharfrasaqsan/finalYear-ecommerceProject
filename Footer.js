import React from 'react';

const Footer = () => {
  return <div>
    <footer className="bg-dark text-justify text-white">
      <div className="container p-2">
        <section className="mb-4 text-right">
        <label className="form-label" for="form5Example21">Connect with us&emsp;</label>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/pcns.shop" role="button" target="_blank"><i className="fab fa-facebook"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/pcns.shop" role="button" target="_blank"><i className="fab fa-instagram"></i></a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Subsribe for our new updates</strong>
                </p>
              </div>

              <div className="col-md-4 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" placeholder='Enter your email' />
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-1">
          <p>
          PC & Network has been the premier destination for the latest tech and PC 
          hardware and Repairs in the last Decade. We been serving our products and 
          have an amazing customer service to passionate geeks who love tech as much as we do.
          </p>
        </section>

        <section className="">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="text-uppercase font-weight-bolder border-bottom pt-3" style={{fontSize:"15px"}}>About</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/aboutus" className="text-white">About us</a>
                </li>
                <li>
                  <a href="/services" className="text-white">Services</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Partners</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h5 className="text-uppercase font-weight-bolder border-bottom pt-3" style={{fontSize:"15px"}}>Legal</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/termsandcondition" className="text-white">Terms and conditions</a>
                </li>
                <li>
                  <a href="/privacyandpolicy" className="text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h5 className="text-uppercase font-weight-bolder border-bottom pt-3" style={{fontSize:"15px"}}>Contact</h5>

              <ul className="list-unstyled mb-0">
                <li className='pb-1'>
                  <a href="mailto:https://www.info.pcnetwork99@gmail.com" className="text-white"><i class="fas fa-envelope"></i></a>
                  <span style={{fontSize:"14px", color:"grey"}}>&emsp;info.pcnetwork99@gmail.com</span>
                </li>
                <li className='pb-1'>
                  <a href="tel:+94262220949" className="text-white"><i class="fas fa-phone-alt"></i></a>
                  <span style={{fontSize:"14px", color:"grey"}}>&emsp;+94 262 220 949</span>
                </li>
                <li className='pb-1'>
                  <a href="https://g.page/pcns_shop?share" className="text-white"><i class="fas fa-map-marker-alt"></i></a>
                  <span style={{fontSize:"14px", color:"grey"}}>&emsp;&nbsp;No.103A, SeaviewRoad, 31000, Trincomalee, <br /> Sri Lanka.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-1" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      <i class="far fa-copyright"></i> 2022 | All rights reserved | PC & NETWORK SOLUTIONS
      </div>
    </footer>
  </div>;
}

export default Footer;