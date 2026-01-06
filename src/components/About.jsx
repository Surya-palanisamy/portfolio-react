import { useEffect } from "react";
import { initCounter } from "../utils/customScripts";

export default function About() {
  useEffect(() => {
    initCounter(); // Ensure counter runs on mount

    // Force scroll event to trigger animations immediately
    window.dispatchEvent(new Event("scroll"));
  }, []);

  return (
    <section id="about-section" className="ftco-about text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="heading-section">
              <h2 className="mb-4">About Me</h2>
              <p>
                Web Developer & DevOps Enthusiast | B.Tech IT Student (3rd Year)
                at Sai Ram Institute of Technology As a passionate technology
                enthusiast, I am always eager to expand my skill set and stay
                updated with the latest advancements in web development and
                DevOps. Currently pursuing my B.Tech in Information Technology,
                I am focused on enhancing my expertise in both web development
                and DevOps practices.
              </p>
              <ul className="about-info mt-4">
                <li>Name: SURYA</li>
                <li>Date of Birth: 11/2005</li>
                <li>Address: Chennai, Tamilnadu, India</li>
                <li>Email: suryapalanisamy2811@gmail.com</li>
                <li>Phone: +91 7418036039</li>
              </ul>
            </div>
            <div className="counter-wrap mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="25">
                    0
                  </span>{" "}
                  Project completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
