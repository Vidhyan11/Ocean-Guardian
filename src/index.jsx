import React, { useEffect, useRef } from "react";
import "./indexcss.css"; // Adjust the path as necessary
import Header from "./navbar";

const Index = () => {
  // Create refs for DOM elements
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);
  const btnRef = useRef(null);
  const rocksRef = useRef(null);
  const forestRef = useRef(null);
  const waterRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) {
        textRef.current.style.top = 50 + value * -0.5 + "%";
      }
      if (bird1Ref.current) {
        bird1Ref.current.style.top = value * -1.5 + "px";
        bird1Ref.current.style.left = value * 2 + "px";
      }
      if (bird2Ref.current) {
        bird2Ref.current.style.top = value * -1.5 + "px";
        bird2Ref.current.style.left = value * -5 + "px";
      }
      if (btnRef.current) {
        let btnMove = value * 1.5;
        if (btnMove > 200) btnMove = 200;
        btnRef.current.style.marginTop = btnMove + "px";
      }
      if (rocksRef.current) {
        rocksRef.current.style.top = value * -0.15 + "px";
      }
      if (forestRef.current) {
        forestRef.current.style.top = value * 0.25 + "px";
        // Fade out forest after scrolling past half the viewport
        const fadeStart = window.innerHeight * 0.5;
        const fadeEnd = window.innerHeight;
        if (value > fadeStart) {
          let opacity = Math.max(
            0,
            1 - (value - fadeStart) / (fadeEnd - fadeStart)
          );
          forestRef.current.style.opacity = opacity;
        } else {
          forestRef.current.style.opacity = 1;
        }
      }
      if (headerRef.current) {
        headerRef.current.style.top = value * -0.5 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Instead of using a separate script for the button click, we attach an onClick handler
  const handleBtnClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />

      <section>
        <h2 id="text" ref={textRef}>
          <span>Take a look into</span>
          <br />
          Under-Water
        </h2>
        <img
          src="asset/forest3-1.jpg"
          id="forest"
          ref={forestRef}
          style={{ height: "80%" }}
          alt="Forest"
        />
        <img src="asset/bird1.png" id="bird1" ref={bird1Ref} alt="Bird 1" />
        <img src="asset/bird2.png" id="bird2" ref={bird2Ref} alt="Bird 2" />
        <a href="#" id="btn" ref={btnRef} onClick={handleBtnClick}>
          Dive Deep
        </a>
        <img src="asset/rocks.png" id="rocks" ref={rocksRef} alt="Rocks" />
        <img src="asset/water.png" id="water" ref={waterRef} alt="Water" />
      </section>

      <div className="sec">
        <h2>Ocean-Guardian</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis
          consequuntur omnis distinctio minima dolorem quas numquam alias
          dolorum! Deleniti accusamus, tempore perspiciatis a, assumenda
          molestiae veritatis aut quibusdam quod consectetur, ipsum nemo
          dolores! Libero harum molestias, earum quibusdam magni unde incidunt
          possimus nostrum voluptas beatae? Ipsam sit aut nostrum possimus, quos
          repudiandae voluptates nam? Magni fuga commodi minus voluptatem id
          obcaecati vel at maiores dolor tempora iure rerum doloremque odit sint
          exercitationem reiciendis nam autem ea sunt similique quam aliquam,
          quisquam qui? Eligendi minima praesentium pariatur est nam amet eaque
          ut eius blanditiis ratione voluptatem nostrum veritatis, expedita
          repudiandae nobis eos eum! Dicta temporibus incidunt commodi dolores
          ex vero modi quaerat provident consequuntur libero, iure eaque nobis,
          quod accusamus maxime vitae distinctio soluta labore obcaecati
          perferendis ratione atque. Incidunt ex ut voluptas, tempore magni ipsa
          quia doloribus asperiores numquam a laudantium reprehenderit labore
          nihil dolor tempora consectetur eius soluta impedit. Vitae beatae odit
          eligendi laudantium fugit fuga quia iste in recusandae dignissimos.
          Recusandae dolorem velit cupiditate reiciendis qui non eum corporis,
          neque quibusdam fugiat delectus consequatur placeat doloribus, atque
          ipsum ab odio iusto ducimus assumenda quos. Harum, dignissimos iure.
          Quos consectetur repudiandae quaerat, ducimus odio illo id fuga nobis!
          <br />
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ab
          repellat optio iste pariatur natus quaerat recusandae consequuntur
          saepe, exercitationem deserunt maxime nesciunt ratione animi vitae
          voluptatibus cumque fugiat earum suscipit. Maxime exercitationem
          laboriosam rerum illum iusto obcaecati voluptate quod quasi inventore
          nobis mollitia saepe possimus a quibusdam itaque perspiciatis
          voluptates neque quam sapiente necessitatibus nostrum dolorem, earum
          architecto. Sit voluptates veniam modi non incidunt dolor quidem
          suscipit, illo vero laborum, sed necessitatibus? Dolores eos
          praesentium ipsum pariatur ullam necessitatibus officiis veritatis
          alias quod provident vitae temporibus quasi, est illum veniam sit
          minima unde consectetur corporis beatae repudiandae eius, iusto
          nesciunt aperiam. Pariatur cupiditate doloremque illo et dolores odit
          fugit soluta recusandae architecto, ullam dicta consequuntur sed
          numquam totam obcaecati explicabo dolore aliquam autem incidunt eaque
          quam ipsam voluptatum. Amet nostrum reprehenderit nobis unde
          necessitatibus deserunt, modi quisquam quod laborum libero est hic rem
          dolores nemo tempora earum corrupti nihil commodi, incidunt eius fugit
          dicta adipisci. Nemo voluptatum dicta inventore deserunt expedita
          sapiente repellat perspiciatis, fugiat suscipit nam ea accusamus iusto
          explicabo delectus, eius amet sequi voluptas iste quisquam voluptatem
          et reprehenderit. Error ipsum iste quas neque! Molestiae incidunt
          earum quibusdam fugiat veniam eaque? Illum accusantium quos beatae
          reprehenderit ducimus.
        </p>
      </div>

      <div className="info-section">
        <div className="info-card">
          <img src="asset/ngo.jpg" alt="NGOs Protecting Oceans" />
          <div className="info-content">
            <h3>NGOs Protecting Our Oceans</h3>
            <p>
              NGOs around the globe are actively engaged in cleaning up our
              beaches and promoting marine conservation. These organizations
              play a crucial role in preserving marine habitats and educating
              communities on sustainable practices.
            </p>
          </div>
        </div>
        <div className="info-card">
          <img src="asset/life.jpg" alt="Marine Life" />
          <div className="info-content">
            <h3>The Vibrant Life Under Water</h3>
            <p>
              The ocean teems with a diverse range of species, each contributing
              to a balanced ecosystem. The underwater world thrives with
              colorful corals, diverse fish species, and mysterious creatures
              that bring vibrancy to the deep.
            </p>
          </div>
        </div>
        <div className="info-card">
          <img src="asset/reef.jpg" alt="Coral Reefs" />
          <div className="info-content">
            <h3>Coral Reefs: Underwater Gardens</h3>
            <p>
              Coral reefs support countless marine species and are essential to
              maintaining ocean biodiversity. They provide shelter, food, and
              breeding grounds for marine life while protecting coastlines from
              erosion.
            </p>
          </div>
        </div>
        <div className="info-card">
          <img src="asset/deep.jpg" alt="Deep Sea Exploration" />
          <div className="info-content">
            <h3>Deep Sea Exploration</h3>
            <p>
              Researchers venture into the depths to uncover the mysteries of
              the deep and discover new marine species. Innovative technology
              and daring expeditions reveal secrets hidden in the dark abyss of
              our oceans.
            </p>
          </div>
        </div>
        <div className="info-card">
          <img src="asset/conserve.jpg" alt="Ocean Conservation" />
          <div className="info-content">
            <h3>Ocean Conservation Initiatives</h3>
            <p>
              Sustainable practices and innovative research are key to
              preserving our oceans for future generations. From marine
              protected areas to efforts reducing plastic waste, every
              initiative contributes to a healthier blue planet.
            </p>
          </div>
        </div>
        <a style={{ textDecoration: "none" }} href="research.html">
          <div className="info-card">
            <img src="asset/research.jpg" alt="Ocean Research & Innovation" />
            <div className="info-content">
              <h3>Ocean Research & Innovation</h3>
              <p>
                Cutting-edge research and technological innovations drive
                sustainable solutions for marine challenges. Breakthrough
                studies and creative engineering pave the way for renewable
                energy and advanced environmental monitoring.
              </p>
            </div>
          </div>
        </a>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>About Ocean-Guardian</h4>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Vision</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">
                  <img src="asset/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="asset/instagram.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="asset/facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="asset\x.png" alt="X" />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#">Email: info@ocean-guardian.com</a>
                </li>
                <li>
                  <a href="#">Phone: +1234567890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
