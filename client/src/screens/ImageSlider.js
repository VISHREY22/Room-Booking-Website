import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // Import CSS file for additional styling if needed
import about1 from './about/about-1.jpg';
import about2 from './about/about-2.jpg';
import blog1 from './blog/blog-1.jpg';
import blog2 from './blog/blog-2.jpg';
import blog3 from './blog/blog-3.jpg';
import blog4 from './blog/blog-4.jpg';
import blog5 from './blog/blog-5.jpg';
import blog6 from './blog/blog-6.jpg';
import { Link } from 'react-router-dom';

function ImageSlider({ slides }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        arrows: true,
    };

    return (
        <>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slide">
                        <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
                    </div>
                ))}
            </Slider>
            <div className="hero-text">
                <h1 className='z'>Zaara A Luxury Hotel</h1><br />
                <p className='z1'>Here are the best hotel booking sites, including recommendations for international
                    travel and for finding low-priced hotel rooms.</p>
                <Link to='/home'>
                    <button className='button123'>LETS EXPLORE THE ROOMS</button>
                </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <!-- About Us Section Begin --> */}
            <section className="aboutus-section spad">
                <div className="container c11">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="section-title">
                                    <span style={{ color: 'black' }}>About Us</span>
                                    <h2 className='z3'>Intercontinental LA <br />Westlake Hotel</h2>
                                </div>
                                <p className="f-para">Zaara.com is a leading online accommodation site. We’re passionate about
                                    travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                                    languages.</p>
                                <p className="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                                    apartment, guest house, or tree house, we’ve got you covered.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-pic">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src={about1} alt="" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={about2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />
            {/* <!-- About Us Section End --> */}

            {/* <!-- Services Section End --> */}
            <section className="services-section spad">
                <div className="container c11">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span style={{ color: 'black' }}>What We Do</span>
                                <h2 className='z3'>Discover Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row c12">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <h4 className='z3'>Travel Plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <h4 className='z3'>Catering Service</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-026-bed"></i>
                                <h4 className='z3'>Babysitting</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-024-towel"></i>
                                <h4 className='z3'>Laundry</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-044-clock-1"></i>
                                <h4 className='z3'>Hire Driver</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-012-cocktail"></i>
                                <h4 className='z3'>Bar & Drink</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section End --> */}
            <br /><br />
            {/* <!-- Blog Section Begin --> */}
            <section class="blog-section spad">
                <div class="container" >
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title" style={{ textAlign: 'center' }}>
                                <span style={{ color: 'black', textAlign: 'center' }}>Hotel News</span>
                                <h2 className='z3'>Our Blog & Event</h2>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div class="row">
                        <div class="col-lg-4 ">
                            <div class="blog-item set-bg ">
                                <img src={blog1} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><a href="#" className='z3'>Tremblant In Canada</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg " >
                                <img src={blog2} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><a href="#" className='z3'>Choosing A Static Caravan</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" data-setbg="img/blog/blog-3.jpg">
                                <img src={blog3} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><a href="#" className='z3'>Copper Canyon</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 21th April, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item small-size set-bg" data-setbg="img/blog/blog-wide.jpg">
                                <img src={blog4} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><a href="#" className='z3'>Trip To Iqaluit In Nunavut A Canadian Arctic City</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 08th April, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item small-size set-bg" data-setbg="img/blog/blog-10.jpg">
                                <img src={blog5} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Travel</span>
                                    <h4><a href="#" className='z3'>Traveling To Barcelona</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 12th April, 2024</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item small-size set-bg" data-setbg="img/blog/blog-10.jpg">
                                <img src={blog6} alt="" />
                                <div class="bi-text">
                                    <span class="b-tag">Travel</span>
                                    <h4><a href="#" className='z3'>Traveling To Barcelona</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 12th April, 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog Section End --> */}
            <br /><br />
            {/* <!-- Footer Section Begin --> */}
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer-text">
                                <p>Contact: +91 6200069869 | Email: 22dit010@charusat.edu.in</p>
                                <p>856 Cordia Apt. 356, Lake, United States</p>
                                <p>&copy; 2024 Your Hotel Name. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer Section End --> */}

        </>
    );
}

export default ImageSlider;
