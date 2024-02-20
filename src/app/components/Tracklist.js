import React from "react";

const Tracklist = () => {
  return (
    <>
      <div className="tracklist-section pb-2 pb-lg-5 bg-cool-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-7">
              <div className=" sticky-top ">
                <div className="d-flex align-items-center justify-content-between mt-5 mb-n1">
                  <h3 className="d-inline-block my-0">Tracklist</h3>
                </div>

                <hr className="thin border-black" />

                <div
                  role="tree"
                  data-carousel-tracks=""
                  className="carousel flickity-enabled"
                  tabindex="0"
                >
                  <div
                    className="flickity-viewport"
                    style={{ height: '572.906px', touchAction: 'pan-y'}}
                  >
                    <div
                      className="flickity-slider"
                      style={{ left: "0px", transform: "translateX(0%)"}}
                    >
                      <div
                        role="treeitem"
                        className="carousel-cell w-100 is-selected"
                        style={{position: "absolute", left: "0px", transform: "translateX(0%)"}}
                      >
                        <h4 className="h6 lp-title font-weight-bold">
                          LP 1 / Side A
                        </h4>
                        <table className="table-tracklist w-100">
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      1
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Respect</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      2
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Drown In My Own Tears</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      3
                                    </span>
                                  </div>
                                </div>
                                <span className="title">
                                  I Never Loved A Man (The Way I Love You)
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      4
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Soul Serenade</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      5
                                    </span>
                                  </div>
                                </div>
                                <span className="title">
                                  Don't Let Me Lose This Dream
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      6
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Baby</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h4 className="h6 lp-title mt-4 font-weight-bold">
                          LP 1 / Side B
                        </h4>
                        <table className="table-tracklist w-100">
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      1
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Dr. Feelgood'</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      2
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Good Times</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      3
                                    </span>
                                  </div>
                                </div>
                                <span className="title">
                                  Do Right Woman — Do Right Man
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      4
                                    </span>
                                  </div>
                                </div>
                                <span className="title">Save Me</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="feature-circle text-center">
                                  <div className="background-circle"></div>
                                  <div className="circle">
                                    <span className="circle-text font-weight-bold">
                                      5
                                    </span>
                                  </div>
                                </div>
                                <span className="title">
                                  A Change Is Gonna Come
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracklist;
