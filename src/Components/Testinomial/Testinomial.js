import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import "./Testinomial.css";
import "mdbreact/dist/css/mdb.css";
import imgQuote1 from "../../assets/images/why-us-img/img_q1.png";
import imgQuote2 from "../../assets/images/why-us-img/img_q2.png";

function Testinomial() {
  return (
    <div>
      <div className="spacer-y"></div>
      <div className="row justify-content-center testinomial_row testinomial_page">
        <div className="col-12 d-flex">
          <div className="col-3 col-md-3 col-sm-3">
            <img src={imgQuote2} className="quote_img2" alt="" />
          </div>
          <div className="col-6  d-flex flex-column align-items-center justify-content-center">
            <div className="hiw_heading testinomial_heading">Testinomials</div>
            <div className="text-center fs-2 fw-bold ">
              What people says about us??
            </div>
          </div>
          <div className="col-3 col-md-3 col-sm-3">
            <img src={imgQuote1} className="quote_img1" alt="" />
          </div>
        </div>

        <MDBContainer className="py-5 mb_container">
          <MDBCarousel showControls dark className="">
            <MDBCarouselItem className="active testinomial_page pt-5">
              <MDBContainer>
                <MDBRow className="text-center py-4 ">
                  <MDBCol lg="4" className="mb-5 mb-md-0 pb-4  ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Anna Deynah</h5>
                      <h6 className="text-primary mb-3">UX Designer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur quae quaerat ad
                        velit ab hic tenetur.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block  ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4 border-1 ">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">John Doe</h5>
                      <h6 className="text-primary mb-3">Web Developer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid
                        commodi.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0 "
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star-half-alt"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Maria Kate</h5>
                      <h6 className="text-primary mb-3">Photographer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            far
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem className="testinomial_page pt-5">
              <MDBContainer>
                <MDBRow className="text-center py-4">
                  <MDBCol lg="4" className="mb-5 mb-md-0 pb-4 ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong "
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">John Doe</h5>
                      <h6 className="text-primary mb-3">UX Designer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2 " />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur quae quaerat ad
                        velit ab hic tenetur.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Alex Rey</h5>
                      <h6 className="text-primary mb-3">Web Developer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid
                        commodi.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star-half-alt"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Maria Kate</h5>
                      <h6 className="text-primary mb-3">Photographer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            far
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem className="testinomial_page pt-5">
              <MDBContainer>
                <MDBRow className="text-center py-4">
                  <MDBCol lg="4" className="mb-5 mb-md-0 pb-4 ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Anna Deynah</h5>
                      <h6 className="text-primary mb-3">UX Designer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eos id officiis hic tenetur quae quaerat ad
                        velit ab hic tenetur.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block  ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">John Doe</h5>
                      <h6 className="text-primary mb-3">Web Developer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid
                        commodi.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star-half-alt"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block ">
                    <div className="mdb_card">
                      <div className="d-flex justify-content-center mb-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                          alt=""
                          className="rounded-circle shadow-1-strong"
                          width="150"
                          height="150"
                        />
                      </div>
                      <h5 className="mb-3 fs-4">Maria Kate</h5>
                      <h6 className="text-primary mb-3">Photographer</h6>
                      <p className="px-xl-1">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </p>
                      <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                      >
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            fas
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                        <li>
                          <MDBIcon
                            far
                            icon="star"
                            size="sm"
                            className="text-warning"
                          />
                        </li>
                      </MDBTypography>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Testinomial;
