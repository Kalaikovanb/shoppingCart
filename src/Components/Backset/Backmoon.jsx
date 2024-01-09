import React, { useContext } from "react";
import "./Backmoon.scss";
import ThemeContext from "../../Context/themecontexts";

function Backmoon() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="backmoon">
      {theme === "dark" ? <div className="gradient"></div> : <></>}{" "}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div class="leaf">
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
          />
        </div>
      </div>
      <div class="leaf leaf1">
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
          />
        </div>
      </div>
      <div class="leaf leaf2">
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
          ></img>
        </div>

        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          {" "}
          <img
            alt="ref"
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
          />
        </div>
      </div>
    </div>
  );
}

export default Backmoon;
