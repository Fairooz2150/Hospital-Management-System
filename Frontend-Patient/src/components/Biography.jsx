import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About" />
      </div>

      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Life Care Hospital is a premier healthcare provider dedicated to
          offering comprehensive medical services with exceptional care. Our
          expert team of healthcare professionals is committed to delivering
          personalized treatment, ensuring that every patient receives the
          highest standard of care.
        </p>
        <p>
          Our facility is equipped with state-of-the-art technology and staffed
          by highly skilled professionals, all focused on delivering excellent
          care.
        </p>
        <p>
          Our team of doctors, nurses, and support staff work collaboratively to
          provide comprehensive medical solutions.
        </p>
        <p>
          We believe in a patient-centered approach, where each individual's
          needs are addressed with attention and expertise.
        </p>
        <p>
          We are dedicated to making a positive impact on the lives of our
          patients, providing the care and support they need to achieve their
          best health.
        </p>
      </div>
    </div>
  );
};

export default Biography;
