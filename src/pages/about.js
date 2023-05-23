import React from 'react'

const About = () => {
  return (
    <>
        {/*  Topbar Start  */}
            <div class="container-fluid d-none d-lg-block">
                <div class="row align-items-center py-4 px-xl-5">
                    <div class="col-lg-3">
                        <a href="" class="text-decoration-none">
                            <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
                        </a>
                    </div>
                    <div class="col-lg-3 text-right">
                        <div class="d-inline-flex align-items-center">
                            <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div class="text-left">
                                <h6 class="font-weight-semi-bold mb-1">Our Office</h6>
                                <small>123 Street, New York, USA</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 text-right">
                        <div class="d-inline-flex align-items-center">
                            <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
                            <div class="text-left">
                                <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
                                <small>info@example.com</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 text-right">
                        <div class="d-inline-flex align-items-center">
                            <i class="fa fa-2x fa-phone text-primary mr-3"></i>
                            <div class="text-left">
                                <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
                                <small>+012 345 6789</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Topbar End  */}


        {/*  Navbar Start  */}
            <div class="container-fluid">
                <div class="row border-top px-xl-5">
                    <div class="col-lg-3 d-none d-lg-block">
                        <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: '67px', padding: '0 30px;'}}>
                            <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Subjects</h5>
                            <i class="fa fa-angle-down text-primary"></i>
                        </a>
                        <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: '9'}}>
                            <div class="navbar-nav w-100">
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link" data-toggle="dropdown">Web Design <i class="fa fa-angle-down float-right mt-1"></i></a>
                                    <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a href="" class="dropdown-item">HTML</a>
                                        <a href="" class="dropdown-item">CSS</a>
                                        <a href="" class="dropdown-item">jQuery</a>
                                    </div>
                                </div>
                                <a href="" class="nav-item nav-link">Apps Design</a>
                                <a href="" class="nav-item nav-link">Marketing</a>
                                <a href="" class="nav-item nav-link">Research</a>
                                <a href="" class="nav-item nav-link">SEO</a>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-9">
                        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" class="text-decoration-none d-block d-lg-none">
                                <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav py-0">
                                    <a href="/" class="nav-item nav-link">Home</a>
                                    <a href="about" class="nav-item nav-link active">About</a>
                                    <a href="course" class="nav-item nav-link">Courses</a>
                                    <a href="teacher" class="nav-item nav-link">Teachers</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <a href="blog.html" class="dropdown-item">Blog List</a>
                                            <a href="single.html" class="dropdown-item">Blog Detail</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                                </div>
                                <a class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Join Now</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        {/*  Navbar End  */}


        {/*  Header Start  */}
            <div class="container-fluid page-header" style={{marginBottom: '90px'}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 class="display-4 text-white text-uppercase">About</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">About</p>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Header End  */}


         {/* About Start  */}
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="" />
                        </div>
                        <div class="col-lg-7">
                            <div class="text-left mb-4">
                                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                                <h1>Innovative Way To Learn</h1>
                            </div>
                            <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                            <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        {/* About End  */}


        {/*  Registration Start  */}
            <div class="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-7 mb-5 mb-lg-0">
                            <div class="mb-4">
                                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
                                <h1 class="text-white">30% Off For New Students</h1>
                            </div>
                            <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor</p>
                            <ul class="list-inline text-white m-0">
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                        <div class="col-lg-5">
                            <div class="card border-0">
                                <div class="card-header bg-light text-center p-4">
                                    <h1 class="m-0">Sign Up Now</h1>
                                </div>
                                <div class="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control border-0 p-4" placeholder="Your name" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <select class="custom-select border-0 px-4" style={{height: '47px'}}>
                                                <option selected>Select a course</option>
                                                <option value="1">Course 1</option>
                                                <option value="2">Course 1</option>
                                                <option value="3">Course 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button class="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Registration End  */}


         {/* Testimonial Start  */}
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Testimonial</h5>
                        <h1>What Say Our Students</h1>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="owl-carousel testimonial-carousel">
                                <div class="text-center">
                                    <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img class="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="" />
                                    <h5 class="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div class="text-center">
                                    <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img class="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt="" />
                                    <h5 class="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div class="text-center">
                                    <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img class="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="" />
                                    <h5 class="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*  Testimonial End  */}


        {/*  Footer Start  */}
            <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: '90px'}}>
                <div class="row pt-5">
                    <div class="col-lg-7 col-md-12">
                        <div class="row">
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Get In Touch</h5>
                                <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                                <div class="d-flex justify-content-start mt-4">
                                    <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="btn btn-outline-light btn-square" href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Our Courses</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                                    <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 mb-5">
                        <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Newsletter</h5>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <div class="w-100">
                            <div class="input-group">
                                <input type="text" class="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary px-4">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
                <div class="row">
                    <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p class="m-0 text-white">&copy; <a href="#">Domain Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                    <div class="col-lg-6 text-center text-md-right">
                        <ul class="nav d-inline-flex">
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        {/* Footer End  */}


        {/*  Back to Top  */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default About