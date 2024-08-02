import React from "react";
import "./content.css";
import coding from "../../assets/code(1).png";


const Content = () => {
  return (
    
      <div className="homeContent" id="about">
        <div className="homeContent__about">
          <h5>About me</h5>
          <h1>
            I am an enthusiastic web developer <br />
            but i'm fresher in web development
          </h1>
        </div>

        <div className="homeContent__container">
          <h1>I developed <br /> professional and <br /> beautiful websites</h1>
          <div>
            <p>
              With years of practice in webdevelopment i have mastered the
              skills
              <br />
            </p>
            <p className="homeContent__gray">
              Hi, I'm Veerakumar. I completed my Diplamo in "D.Information Technology"  <br />at
              Arulmigu Palaniandavar Polytechnic College (Palani), <br /> and I studied Full-Stack Web Developer
              at Live Wire (Coimbatore).
            </p>
          </div>
        </div>

        <div className="homeContent__container2">
          <h1>What i do</h1>
          <p>
            From understanding your requirements, designing a blueprint and{" "}
            <br />
            delivering the final product, I do everything that falls in between
            these lines.
          </p>
        </div>

        <div className="homeContent__container3">
          <h3>
            <span>
              <img src={coding} alt="coding" width={"27px"} />
            </span>{" "}
            WEB DEVELOPMENT
          </h3>
          <p>
            If you are looking for a developer who'll take over the research and
            development of your website, I am a well established professional to
            help you with this.
          </p>
        </div>
      </div>
      
  )
}

export default Content
