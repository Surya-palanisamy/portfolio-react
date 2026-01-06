import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="ftco-footer ftco">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Web developer And devops | B.Tech IT Student (3rd year) at Sai
                Ram Institute of Technology | As a technology enthusiast, I am
                always eager to expand my skill set and stay updated with the
                latest advancements in web development.
              </p>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/about")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/works")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-long-arrow-right mr-2"></span>Works
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/projects")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/contact")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Works</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>DevOps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>App
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>App
                    Development
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Question?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">Chennai, Tamil Nadu, IN</span>
                  </li>
                  <li>
                    <a href="tel:7418036039">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 7418036039</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:suryapalanisamy2811@gmail.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">
                        suryapalanisamy2811@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
