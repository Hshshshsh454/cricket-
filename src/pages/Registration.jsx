import React, { useState } from "react";
import styled from "styled-components";

// ===== Styled Components =====
const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 40px;
  font-size: 1.6rem;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
  width: 100%;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
  width: 100%;
  font-size: 0.95rem;
  background: white;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 0.95rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
  width: 100%;
  resize: none;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
  }
`;

// ===== Benefits Section Styles =====
const BenefitsSection = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 2px solid #ddd;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-top: 20px;
  }
`;

const BenefitTitle = styled.h2`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const BenefitList = styled.ul`
  list-style-type: square;
  margin-left: 25px;
  line-height: 1.8;
  color: #444;

  @media (max-width: 768px) {
    margin-left: 15px;
    line-height: 1.6;
  }
`;

const Highlight = styled.span`
  color: #d60000;
  font-weight: bold;
`;

const CenterList = styled.p`
  font-weight: bold;
  color: #d60000;
  margin-top: 10px;
  font-size: 0.95rem;
`;

// ===== Terms & Conditions Section Styles =====
const TermsSection = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 2px solid #ddd;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-top: 20px;
  }
`;

const TermsTitle = styled.h2`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const TermsList = styled.ul`
  list-style-type: square;
  margin-left: 25px;
  line-height: 1.8;
  color: #444;

  @media (max-width: 768px) {
    margin-left: 15px;
    line-height: 1.6;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

// ===== Component =====
const Registration = () => {
  const [formData, setFormData] = useState({
    category: "",
    applicationDate: new Date().toISOString().split("T")[0],
    playerName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    tShirtSize: "",
    mobile: "",
    email: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    level: "",
    bowlingArm: "",
    bowlingPace: "",
    preference: "",
    captainExperience: "",
    wicketKeeper: "",
    academyName: "",
    batting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <Container>
      <Title>Online Registration Form</Title>

      <form onSubmit={handleSubmit}>
        {/* ===== PERSONAL DETAILS ===== */}
        <SectionTitle>Personal Details</SectionTitle>
        <FormGrid>
          <div>
            <Label>Registration for Category:</Label>
            <Select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Under 14">Under 14</option>
              <option value="Under 17">Under 17</option>
              <option value="Under 19">Under 19</option>
            </Select>
          </div>

          <div>
            <Label>Date of Application:</Label>
            <Input type="date" name="applicationDate" value={formData.applicationDate} readOnly />
          </div>

          <div>
            <Label>Player Name:</Label>
            <Input name="playerName" value={formData.playerName} onChange={handleChange} />
          </div>

          <div>
            <Label>Father's Name:</Label>
            <Input name="fatherName" value={formData.fatherName} onChange={handleChange} />
          </div>

          <div>
            <Label>Mother's Name:</Label>
            <Input name="motherName" value={formData.motherName} onChange={handleChange} />
          </div>

          <div>
            <Label>Date of Birth:</Label>
            <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>

          <div>
            <Label>Gender:</Label>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>

          <div>
            <Label>Weight (kg):</Label>
            <Input name="weight" value={formData.weight} onChange={handleChange} />
          </div>

          <div>
            <Label>Height (inches):</Label>
            <Input name="height" value={formData.height} onChange={handleChange} />
          </div>

          <div>
            <Label>T-Shirt Size:</Label>
            <RadioGroup>
              {["Small", "Medium", "Large"].map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="tShirtSize"
                    value={size}
                    checked={formData.tShirtSize === size}
                    onChange={handleChange}
                  />{" "}
                  {size}
                </label>
              ))}
            </RadioGroup>
          </div>
        </FormGrid>

        {/* ===== CONTACT DETAILS ===== */}
        <SectionTitle>Contact Details</SectionTitle>
        <FormGrid>
          <div>
            <Label>Mobile No.:</Label>
            <Input name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>

          <div>
            <Label>Email ID:</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <Label>Residential Address:</Label>
            <TextArea rows="2" name="address" value={formData.address} onChange={handleChange} />
          </div>

          <div>
            <Label>District:</Label>
            <Input name="district" value={formData.district} onChange={handleChange} />
          </div>

          <div>
            <Label>State:</Label>
            <Select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Karnataka">Karnataka</option>
            </Select>
          </div>

          <div>
            <Label>Pin Code:</Label>
            <Input name="pincode" value={formData.pincode} onChange={handleChange} />
          </div>
        </FormGrid>

        {/* ===== ABOUT YOUR GAME ===== */}
        <SectionTitle>About Your Game</SectionTitle>
        <FormGrid>
          <div>
            <Label>Level:</Label>
            <Select name="level" value={formData.level} onChange={handleChange}>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Select>
          </div>

          <div>
            <Label>Bowling Arm:</Label>
            <Select name="bowlingArm" value={formData.bowlingArm} onChange={handleChange}>
              <option value="">Select Bowling Arm</option>
              <option value="Right Arm">Right Arm</option>
              <option value="Left Arm">Left Arm</option>
            </Select>
          </div>

          <div>
            <Label>Bowling Pace:</Label>
            <Select name="bowlingPace" value={formData.bowlingPace} onChange={handleChange}>
              <option value="">Select Bowling Pace</option>
              <option value="Fast">Fast</option>
              <option value="Medium">Medium</option>
              <option value="Spin">Spin</option>
            </Select>
          </div>

          <div>
            <Label>First Preference:</Label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="preference"
                  value="Batting"
                  checked={formData.preference === "Batting"}
                  onChange={handleChange}
                />{" "}
                Batting
              </label>
              <label>
                <input
                  type="radio"
                  name="preference"
                  value="Bowling"
                  checked={formData.preference === "Bowling"}
                  onChange={handleChange}
                />{" "}
                Bowling
              </label>
            </RadioGroup>
          </div>

          <div>
            <Label>Team Captain Experience:</Label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="captainExperience"
                  value="Yes"
                  checked={formData.captainExperience === "Yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="captainExperience"
                  value="No"
                  checked={formData.captainExperience === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </RadioGroup>
          </div>

          <div>
            <Label>Wicket Keeper:</Label>
            <Select name="wicketKeeper" value={formData.wicketKeeper} onChange={handleChange}>
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </div>

          <div>
            <Label>Cricket Academy Name:</Label>
            <Input name="academyName" value={formData.academyName} onChange={handleChange} />
          </div>

          <div>
            <Label>Batting:</Label>
            <Select name="batting" value={formData.batting} onChange={handleChange}>
              <option value="">Select Option</option>
              <option value="Right Hand">Right Hand</option>
              <option value="Left Hand">Left Hand</option>
            </Select>
          </div>
        </FormGrid>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>

      {/* ===== BENEFITS SECTION ===== */}
      <BenefitsSection>
        <BenefitTitle>Benefits</BenefitTitle>
        <BenefitList>
          <li>
            You gain <Highlight>"CRICKET STATION"</Highlight> lifetime CPP membership by availing this registration
            facility at just <Highlight>Rs. 299/-</Highlight>
          </li>
          <li>
            FREE Trial By <Highlight>"CRICKET VIDEO"</Highlight> — If your cricket trial exceeds a pre-defined
            threshold, you stand a chance to avail free international quality training.{" "}
            <Highlight>
              Note: Trial Fee Rs.800 (Members) / Rs.1500 (Direct). NON REFUNDABLE.
            </Highlight>
          </li>
        </BenefitList>

        <CenterList>
          CPP CENTERS: MUMBAI, DELHI, GURUGRAM, BHADOHI, MURADABAD, JAIPUR, BANGALORE, PUNE, BIHAR, SONBHADRA, UDAIPUR,
          UTTAR PRADESH CRICKET, VILLAGE CRICKET ACADEMY
        </CenterList>

        <BenefitList>
          <li>You get expert cricket guidance and coaching.</li>
          <li>Chance to play for the CPP TOP cricket team.</li>
          <li>Chance to represent CPP and play in discounted tournaments.</li>
          <li>10% discount on coaching fees at CPP centers.</li>
          <li>10% discount on CPP tours + 15% discount on cricket equipment.</li>
          <li>CPP merchandise distributed yearly to selected players.</li>
          <li>Meritorious players can be selected for foreign tours.</li>
          <li>
            <Highlight>Note: Only For Boys</Highlight>
          </li>
        </BenefitList>
      </BenefitsSection>

      {/* ===== TERMS & CONDITIONS ===== */}
      <TermsSection>
        <TermsTitle>Terms & Conditions</TermsTitle>
        <TermsList>
          <li>
            <Bold>Player can register for only one category</Bold> – U10, U12, U14, U16, U19, U23, U25 or Open.{" "}
            <Highlight>Only for Boys</Highlight>
          </li>
          <li>
            Participant must take care of his valuables; the organizer is not responsible for loss/damage/injury during
            the event. First aid will be available at the venue.
          </li>
          <li>Participants must come in white cricket uniform and bring their own sports kit.</li>
          <li>
            Selector’s decision will be final and binding. Organizers reserve admission rights and are not responsible
            for weather-related changes.
          </li>
          <li>Venue and dates are subject to change.</li>
          <li>
            Selection of candidates will be informed via telecommunications, newspapers, email, or at the venue itself.
          </li>
          <li>Any cricketer giving false details will be debarred.</li>
          <li>
            For inquiries or doorstep registration:{" "}
            <Bold>
              +91 9321941094 / +91 9839151177 / +91 9839151188 / +91 7388078444 / +91 7388071444
            </Bold>
          </li>
          <li>All disputes fall under the jurisdiction of Mumbai courts only.</li>
        </TermsList>
      </TermsSection>
    </Container>
  );
};

export default Registration;
