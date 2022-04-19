import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="anim">
      <div class="container sticky-sm-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-white">
          <div class="container">
            <a class="navbar-brand text-black" href="#">
              <img
                width="50px"
                src="https://img2.freepng.ru/20180613/uae/kisspng-application-for-employment-job-computer-icons-rs-5b21c8f2555df3.3791177215289407863497.jpg"
                alt=""
              />
              Resume
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon bg-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a class="nav-link text-black" href="#about">
                  About
                </a>
                <a class="nav-link text-black" href="#skills">
                  Skills
                </a>
                <a class="nav-link text-black" href="#education">
                  Education
                </a>
                <a class="nav-link text-black" href="#courses">
                  Courses
                </a>
                <a class="nav-link text-black" href="#hobby">
                  Hobby
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Основная информация */}
      <Container xl>
        <div class="container bg-white my-5 py-5" id="about">
          <div class="row gy-3">
            <div class="col-12 col-lg-6">
              <img
                src="https://papik.pro/uploads/posts/2021-09/1631068966_10-papik-pro-p-legkie-risunki-devochek-10.jpg"
                class="img-thumbnail"
                alt="..."
              />
              <div class="d-grid gap-2 col-8 mx-auto">
                <button
                  class="btn btn-secondary btn-lg text-uppercase mt-3 py-2 anim-btn"
                  type="button"
                >
                  Download Resume
                </button>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="h1 text-uppercase fs-1 fw-bold">
                Hi I'm Regina Sharshenbekova
              </div>
              <p class="text-start text-secondary">
                web developer & web designer
              </p>
              <p class="text-start fw-bold py-3">
                Hello! I'm Regina Sharshenbekova. Web developer with over 3
                years of experience. Experienced with all stages of the
                development cycle for dynamic web projects. Having an in depth
                knowledge including advanced HTMLS, CSS, JavaScript, jQuery,
                Angular JS. Strong background in management and leadership.
              </p>
              <div class="row gy-3">
                <div class="col-12 col-lg-6">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>Age</th>
                        <th class="fw-normal">21</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Address</th>
                        <td>720011 Bishkek</td>
                      </tr>
                      <tr>
                        <th>E-mail</th>
                        <td>rsharshenbekova@mail.ru</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-12 col-lg-6">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>Phone</th>
                        <th class="fw-normal">0709797435</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="fw-bold">Website</td>
                        <td>www.resume.kg</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">Nationality</td>
                        <td>Kyrgyzka</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p class="text-start fw-bold pt-5">Social links</p>
              <div class="row">
                <div class="col-2">
                  <a href="https://www.google.com/intl/ru/gmail/about/">
                    <img
                      width="40px"
                      src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                      alt="почта"
                    />
                  </a>
                </div>
                <div class="col-2">
                  <a href="https://web.whatsapp.com/">
                    <img
                      width="40px"
                      src="http://toplogos.ru/images/logo-whatsapp.png"
                      alt="вотс"
                    />
                  </a>
                </div>
                <div class="col-2">
                  <a href="https://www.instagram.com/">
                    <img
                      width="40px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                      alt="инст"
                    />
                  </a>
                </div>
                <div class="col-2">
                  <a href="https://web.telegram.org/k/">
                    <img
                      width="40px"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png"
                      alt="телеграмм"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Основная информация */}

      {/* Skills */}
      <div id="skills" class="h2 text-center text-uppercase fs-2 fw-bold">
        Skills
      </div>
      <div class="container bg-white my-5 py-5">
        <div class="row gy-3">
          <div class="col-12 col-lg-6">
            <div class="p-3 mb-2 bg-light text-black fs-4 fw-bold">
              Professional Skills
            </div>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
            <p class="fw-bold">PHP & MySQL</p>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <p class="fw-bold">JavaScript & NodeJS</p>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <p class="fw-bold">HTML5 & CSS3</p>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <p class="fw-bold">WordPress & Joomla</p>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "78%" }}
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                78%
              </div>
            </div>
            <p class="fw-bold">Smarty & Git</p>
            <div class="progress" style={{ height: "25px" }}>
              <div
                class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: " 65%" }}
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
            <p class="fw-bold">JQuery & Angular</p>
          </div>
          <div class="col-12 col-lg-6">
            <div class="p-3 mb-2 bg-light text-black fs-4 fw-bold">
              Additional Skills
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="fw-bold"> Sociability </span> - while studying at
                the institute, she worked in active sales;
              </li>
              <li class="list-group-item">
                <span class="fw-bold"> Learnability </span> – I learn German to
                work in this market;
              </li>
              <li class="list-group-item">
                <span class="fw-bold"> Responsibility </span> - was engaged in
                training beginners and helped students during the internship;
              </li>
              <li class="list-group-item">
                <span class="fw-bold"> Punctuality </span> - freelancing does
                not have a single negative review and deadline failure;
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Purposefulness </span> - I am a developer
                of my own commercially successful medical information systems.
              </li>
              <li class="list-group-item">
                <span class="fw-bold"> Industrious </span> Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cumque rem nemo alias,
                eius quae soluta.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Skills */}

      {/* Education */}
      <div id="education" class="h2 text-center text-uppercase fs-2 fw-bold">
        Education
      </div>
      <div class="container my-5">
        <div class="row gy-3">
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">2014-2016</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">Oxford University</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  et laudantium saepe, optio iusto nulla.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">2016-2017</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">Oxford University</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid repellat iste fugiat iusto quo at!
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">2017-2018</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">Oxford University</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  rem reiciendis incidunt quo consequuntur corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}

      {/* Courses */}
      <h2 id="courses" class="h2 text-center text-uppercase fs-2 fw-bold">
        Courses
      </h2>
      <div class="container my-5">
        <div class="row gy-3">
          <div class="col-12 col-lg-4">
            <div class="card" style={{ width: "19rem" }}>
              <img
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src="data:image/png;base64,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"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Makers</h5>
                <p class="card-text">
                  First IT-Hub in Kyrgyzstan We train IT and digital
                  professions. We develop websites and applications. We launch
                  and help launch startups. We organize IT events.
                </p>
                <a href="https://makers.kg/" class="btn btn-secondary anim-btn">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card" style={{ width: "19rem" }}>
              <img
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src="https://devkg.com/i/organizations-124df2aaf03a29d75470cd5b451b0e2a"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">IT-RUN</h5>
                <p class="card-text">
                  The largest programming academy in Bishkek. Master programming
                  in 6 months according to the IT-RUN methodology. You can come
                  to a trial lesson for free.
                </p>
                <a href="https://itrun.kg/" class="btn btn-secondary anim-btn">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card" style={{ width: "19rem" }}>
              <img
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src="https://static.tildacdn.com/tild6330-3262-4737-a361-383733636133/Logo_GeekTech_2.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">GeekTech</h5>
                <p class="card-text">
                  The GeekTech School of IT Professions (GikTek) was founded in
                  2018 in Bishkek with the aim of enabling every person, even
                  without experience in technology.
                </p>
                <a
                  href="https://geektech.edu.kg/?utm_source=google&utm_medium=cpc&utm_campaign={geektech}&utm_content=570930180937&utm_term=&gclid=Cj0KCQiAr5iQBhCsARIsAPcwROOHW7lWPfRwAd9UL2dZwoCqoyRlwkC2xRiUJ6lgBAbYrEZUcL6B8ccaAgxqEALw_wcB"
                  class="btn btn-secondary anim-btn"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses */}

      {/* Хобби */}
      <div id="hobby" class="h2 text-center text-uppercase fs-2 fw-bold">
        Hobby
      </div>
      <div class="container my-5">
        <div class="row gy-3">
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">Sport</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">Tennis</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  et laudantium saepe, optio iusto nulla.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">Music</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">All</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid repellat iste fugiat iusto quo at!
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div
              class="card text-dark bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header fw-bold">Books</div>
              <div class="card-body bg-white">
                <h5 class="card-title fw-bold">Any</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  rem reiciendis incidunt quo consequuntur corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Хобби */}

      {/* todo Footer */}
      <div class="bg-white mt-5 py-3 text-center text-black">
        <div class="container">Copyring &copy; 2022 Regina</div>
      </div>
      {/* todo Footer  */}
    </div>
  );
};

export default Header;
