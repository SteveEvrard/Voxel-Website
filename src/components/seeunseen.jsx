import React from "react";

export const SeeUnseen = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>See the Unseen</h2>
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <div className="seeunseen-description">
                <div>
                  <h3>Ergonomics</h3>
                  <div className="list-style">
                    <div className="col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>PPE</h3>
                  <div className="list-style">
                    <div className="col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Vehicle Safety</h3>
                  <div className="list-style">
                    <div className="col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Area Controls</h3>
                  <div className="list-style">
                    <div className="col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Operations</h3>
                  <div className="list-style">
                    <div className="col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/seeunseen.png" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
