import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Home extends Component {
    render() {
        const styles = { backgroundPosition: "center center" };
        const maxWidth390 = {maxWidth: "390px"};
        const maxWidth120 = {maxWidth: "120px"};
        return (

            <div className="page text-center">
                
                <Menu />

                <div>
                    <main className="page-content">
                        <section className="context-dark">
                            <div
                                className="swiper-container swiper-slider"
                                data-height="33%"
                                data-min-height="600px"
                                data-dots="true"
                            >
                                <div className="swiper-wrapper">
                                    <div
                                        className="swiper-slide swiper-slide-overlay-disable"
                                        data-slide-bg="assets/images/slide-01-1920x640.jpg"
                                        style={styles}
                                    ></div>
                                    <div
                                        className="swiper-slide swiper-slide-overlay-disable"
                                        data-slide-bg="assets/images/slide-02-1920x640.jpg"
                                        style={styles}
                                    ></div>
                                    <div
                                        className="swiper-slide swiper-slide-overlay-disable"
                                        data-slide-bg="assets/images/slide-03-1920x640.jpg"
                                        style={styles}
                                    ></div>
                                </div>
                         

                            <div className="swiper-caption-wraper">
              <div className="container section-41">
                <div className="row justify-content-sm-center">
                  <h1 className="font-weight-bold">3D Cape Views works for you</h1>
                  <div className="col-sm-10 col-lg-7 col-xl-6">
                    <div className="offset-top-24 offset-lg-top-50 text-left">
                     
                      <div className="responsive-tabs responsive-tabs-dashed" data-type="horizontal">
                        <ul className="resp-tabs-list tabs-group-default" data-group="tabs-group-default">
                          <li>sale </li>
                          <li>rent</li>
                          <li>commercial</li>
                        </ul>
                        <div className="resp-tabs-container text-left tabs-group-default" data-group="tabs-group-default">
                          <div className="offset-lg-top-10">
                            <form>
                              <div className="group-sm group-top">
                                <div className="group-item element-fullwidth" style={maxWidth390}>
                                  <div className="form-group">
                                    <label className="form-label rd-input-label" for="home-tabs1-search-form-input">Search by City or Address:</label>
                                    <input className="form-control" id="home-tabs1-search-form-input" type="text" name="s" autocomplete="off" />
                                  </div>
                                </div>
                                <button className="btn btn-primary element-fullwidth" type="button" style={maxWidth120}>search</button>
                              </div>
                            </form>
                          </div>
                          <div className="offset-lg-top-10">
                            <form>
                              <div className="group-sm group-top">
                                <div className="group-item element-fullwidth" style={maxWidth390}>
                                  <div className="form-group">
                                    <label className="form-label rd-input-label" for="home-tabs2-search-form-input">Search by  Address or City:</label>
                                    <input className="form-control" id="home-tabs2-search-form-input" type="text" name="s" autocomplete="off" />
                                  </div>
                                </div>
                                <button className="btn btn-primary element-fullwidth" type="button" style={maxWidth120}>search</button>
                              </div>
                            </form>
                          </div>
                          <div className="offset-lg-top-10">
                            <form>
                              <div className="group-sm group-top">
                                <div className="group-item element-fullwidth" style={maxWidth390}>
                                  <div className="form-group">
                                    <label className="form-label rd-input-label" for="home-tabs3-search-form-input">Search by City or Address:</label>
                                    <input className="form-control" id="home-tabs3-search-form-input" type="text" name="s" autocomplete="off" />
                                  </div>
                                </div>
                                <button className="btn btn-primary element-fullwidth" type="button" style={maxWidth120}>search</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-type-2"></div>
          </div>


                        </section>

                        <section className="section-34">
          <div className="container-fluid">
            <div className="row justify-content-sm-center">
              <div className="col-sm-8 col-md-6 col-xl-3">
                
                <figure className="thumbnail-terry"><a href="#"><img width="442" height="280" src="assets/images/home-img-01-442-280.jpg" alt=""/></a>
                  <figcaption>
                    <div>
                      <h4 className="thumbnail-terry-title">With Swimming Pool </h4>
                    </div>
                    <p className="thumbnail-terry-desc offset-top-0">32 properties</p><a className="btn offset-top-10 offset-md-top-0 btn-primary" href="catalog.html">choose an apartment</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-8 col-md-6 col-xl-3 offset-top-30 offset-md-top-0">
                
                <figure className="thumbnail-terry"><a href="#"><img width="442" height="280" src="assets/images/home-img-02-442-280.jpg" alt=""/></a>
                  <figcaption>
                    <div>
                      <h4 className="thumbnail-terry-title">Cozy Houses</h4>
                    </div>
                    <p className="thumbnail-terry-desc offset-top-0">54 properties</p><a className="btn offset-top-10 offset-md-top-0 btn-primary" href="catalog.html">choose an apartment</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-8 col-md-6 col-xl-3 offset-top-30 offset-xl-top-0">
               
                <figure className="thumbnail-terry"><a href="#"><img width="442" height="280" src="assets/images/home-img-03-442-280.jpg" alt=""/></a>
                  <figcaption>
                    <div>
                      <h4 className="thumbnail-terry-title">Studio Apartments</h4>
                    </div>
                    <p className="thumbnail-terry-desc offset-top-0">32 properties</p><a className="btn offset-top-10 offset-md-top-0 btn-primary" href="catalog.html">choose an apartment</a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-8 col-md-6 col-xl-3 offset-top-30 offset-xl-top-0">
                
                <figure className="thumbnail-terry"><a href="#"><img width="442" height="280" src="assets/images/home-img-04-442-280.jpg" alt=""/></a>
                  <figcaption>
                    <div>
                      <h4 className="thumbnail-terry-title">Luxury Houses</h4>
                    </div>
                    <p className="thumbnail-terry-desc offset-top-0">19 properties</p><a className="btn offset-top-10 offset-md-top-0 btn-primary" href="catalog.html">choose an apartment</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section-bottom-98 section-top-34 section-lg-bottom-110 section-lg-top-66">
          <div className="container">

            <h2 className="font-weight-bold">Recent 360Photos</h2>
            <hr className="divider bg-saffron" />
            
            <div className="row">
              <div className="col-md-6 col-lg-4"><img className="img-fluid d-inline-block" src="assets/images/home-img-05-370x250.jpg" width="370" height="250" alt=""/>
                <div className="text-md-left offset-top-24">
                  <div>
                    <h5 className="font-weight-bold text-primary"><a href="single-property-page.html">AVA Nob Hill</a></h5>
                  
                    <p>AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community.</p>
                  </div>
                </div>
              </div>
              </div>
              
             
              
              
              
            <div className="offset-top-50"><a className="btn btn-primary" href="/catalog">view all</a></div>
          </div>
        </section>


        <section className="context-dark">
          <div className="parallax-container" data-parallax-img="assets/images/bg-01-1920x768.jpg">
            <div className="parallax-content">
              <div className="container section-98 section-md-110">
                <h2 className="font-weight-bold">Real Estate Tools and Resources</h2>
                <hr className="divider bg-saffron" />
                <div className="row justify-content-sm-center offset-top-66">
                  <div className="col-md-4">
                    <span className="icon icon-circle mdi mdi-comment-text-outline icon-carrot-filled"></span>
                    <h5 className="font-weight-bold text-uppercase">more listings</h5>
                    <p className="text-light">Check up to 40% more houses for sale. See pictures 360 of your new life at a new place. See maps, markets, etc.</p>
                  </div>
                  <div className="col-md-4 offset-top-66 offset-md-top-0">
                    <span className="icon icon-circle mdi mdi-star icon-carrot-filled"></span>
                    <h5 className="font-weight-bold text-uppercase">top-rated agents</h5>
                    <p className="text-light">All our real estate agents are professionals in your neighborhood, which are ready to help you find your new home.</p>
                  </div>
                  <div className="col-md-4 offset-top-66 offset-md-top-0">
                    <span className="icon icon-circle mdi mdi-domain icon-carrot-filled"></span>
                    <h5 className="font-weight-bold text-uppercase">3D tour photo</h5>
                    <p className="text-light">See homes 360 photos or 3D tour with professinal photography .</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                    </main>
                </div>

                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
