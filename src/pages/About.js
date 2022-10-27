import React from "react";

import avatar from "../assets/avt.jpg";
const About = () => {
  return (
    <div className="container padding">
      <div className="col-md-12">
        <div className="row mx-0">

          <div class="row">
            <div class="col-md-6">
              <h2 class="h4 my-2">
                Hello! I’m Trần Đức Duy.
              </h2>
              <p>
                I am a student at ITMO University in Saint Petersburg, Russia
              </p>
              <div class="row mt-3">
                <div class="col-sm-3">
                  <div class="pb-1">Age:</div>
                </div>
                <div class="col-sm-9">
                  <div class="pb-1 fw-bolder">21</div>
                </div>
                <div class="col-sm-3">
                  <div class="pb-1">Email:</div>
                </div>
                <div class="col-sm-9">
                  <div class="pb-1 fw-bolder">
                    tranduybthv@gmail.com
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="pb-1">Github:</div>
                </div>
                <div class="col-sm-9">
                  <div class="pb-1 fw-bolder">

                    <a href="https://github.com/Tran-Duc-Duy">https://github.com/Tran-Duc-Duy</a>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="pb-1">Phone:</div>
                </div>
                <div class="col-sm-9">
                  <div class="pb-1 fw-bolder">
                    +79650184772
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="pb-1">Address:</div>
                </div>
                <div class="col-sm-9">
                  <div class="pb-1 fw-bolder">
                    Saint Petersburg, Russian
                  </div>
                </div>

              </div>
            </div>
            <div
              class="col-md-5 offset-md-1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img
                class="avatar img-fluid mt-2"
                src={avatar}
                width="400"
                height="400"
                alt="Tran Duc Duy"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
