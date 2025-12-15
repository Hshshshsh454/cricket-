import React from "react";
import styled from "styled-components";

// Background & image links
const bgImage =
  "https://www.cricketperformancepoint.com/assets/img/bg-stadium.jpg";
const phoneImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIpIoIfTDBJXumA_u3uwBUeAB0D2ngbZnWw&s";

// ===== Styled Components =====
const Section = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 0, 40, 0.6);
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;

  h1 {
    font-size: 2.4rem;
    line-height: 1.3;
    color: #fff;
    margin-bottom: 10px;

    span {
      color: #d60000;
    }
  }

  p {
    font-size: 1.1rem;
    margin-top: 15px;
    color: #ddd;
  }

  hr {
    width: 80%;
    height: 3px;
    background: #d60000;
    border: none;
    margin: 20px 0;
  }

  h2 {
    font-size: 1.6rem;
    margin-top: 25px;
    font-weight: 600;
  }

  .assure-box {
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 20px;
    margin-top: 15px;
    border-radius: 10px;
    width: 80%;
    text-align: center;
    font-size: 1rem;
  }

  img {
    margin-top: 20px;
    max-width: 250px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  min-width: 320px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  padding: 35px 40px;
  color: #111;

  h3 {
    color: #d60000;
    font-weight: bold;
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="file"] {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
    font-size: 1rem;
    width: 100%;
  }

  .or {
    text-align: center;
    color: #333;
    font-weight: bold;
    margin: 10px 0;
  }

  button {
    background: #fcd200;
    border: none;
    color: #000;
    padding: 12px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #e0b700;
  }

  .preview-img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 10px;
  }
`;

// ===== Component =====
const VideoTrainingSection = () => {
  const [preview, setPreview] = React.useState(null);

  // Preview uploaded image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Section>
      <Wrapper>
        {/* LEFT CONTENT */}
        <LeftContent>
          <h1>
            <span>Record</span>, Share & Get Trained <br /> at your Home.
          </h1>
          <hr />
          <p>
            Continue your Cricket Training at Home with Cricket Performance
            Point
          </p>
          <hr />
          <h2>Get Assured</h2>
          <div className="assure-box">
            Online Guidance | Professional Coaches | Weekly Analysis | Training
            At Home
          </div>
          <img src={phoneImage} alt="Player Phone" />
        </LeftContent>

        {/* RIGHT FORM */}
        <FormContainer>
          <h3>FILL UP FORM & SUBMIT YOUR VIDEO OR IMAGE</h3>
          <form>
            <input type="text" placeholder="Enter Name" required />
            <input type="tel" placeholder="Enter Mobile No." required />
            <input type="email" placeholder="Enter E-mail" required />
            <input type="file" accept="video/*" />
            <div className="or">OR</div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className=""
              />
            )}
            <button type="submit">SUBMIT</button>
          </form>
        </FormContainer>
      </Wrapper>
    </Section>
  );
};

export default VideoTrainingSection;
