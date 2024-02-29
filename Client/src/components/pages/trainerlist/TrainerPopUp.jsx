import React, { useState } from "react";
import ProfileImg from "../../assets/profileTrainer.png";
import Rating from "@mui/material/Rating";
import { Avatar, Stack, styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Slider from "@mui/material/Slider";
import PythonImg from "../../assets/python.png";
import AdobeImg from "../../assets/figma.png";
import FigmaImg from "../../assets/figma.png";
import ReactImg from "../../assets/react.png";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/TrainersList.css";
import { useNavigate } from "react-router-dom";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#2676c2",
  "& .MuiSlider-rail": {
    backgroundColor: "#2676c2",
  },
  "& .MuiSlider-track": {
    transition: "background-color 0.3s ease", // Add transition for color change
  },
  "& .MuiSlider-thumb": {
    display: "none", // Hide the slider button
  },
  "&:hover .MuiSlider-track": {
    backgroundColor: "#585858", // Change color on hover
  },
}));

function TrainerPopUp(props) {
  const { trigger, setTrigger } = props;
  // const [active,setActive] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()

  const navigatePostRequirement = () => {
    navigate("/employerDashboard/postarequirements/post-training")
  };
  return trigger ? (
    <>
      <div className=" trainerHirePopup w-full flex justify-center items-center">
        <div className="main1 w-6/12 ml-[70px] h-screen bg-white rounded-[20px] border">
          <div className="flex justify-between items-center">
            <p style={{ fontSize: "18px", fontWeight: "500px" }}>
              About Trainers
            </p>
            <div>
              <CloseIcon
                sx={{
                  position: "relative",
                  fontSize: "xx-large",
                  color: "#2676c2",
                  cursor: "pointer",
                }}
                onClick={() => setTrigger(false)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6/12 ">
              <div className="trainerProfileName w-full">
                <img
                  src={ProfileImg}
                  alt=""
                  width={93.53}
                  height={109.94}
                  style={{ border: "none", outline: "none" }}
                />
                <div className="name-details ">
                  <p
                    style={{
                      color: "#2676c2",
                      fontSize: "20px",
                      fontWeight: "500px",
                    }}
                  >
                    Kowshik
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    UI UX Developer
                  </p>
                </div>
              </div>
              <div className="ratingDownbox w-full">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    4/5
                  </p>
                  <Rating
                    name="size-large"
                    defaultValue={3.6}
                    id="rating"
                    sx={{ fontSize: "45px" }}
                    precision={0.1}
                  />
                </div>
              </div>
            </div>
            <div className="w-6/12 sidebox flex justify-center items-center">
              <div className="w-[90%]">
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Post requirements{" "}
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500px",
                      color: "#2676c2",
                      cursor: "pointer"
                    }}
                    onClick={navigatePostRequirement}
                  >
                    Create Post +
                  </p>
                </p>{" "}
                <br />
                <div className="radios flex flex-col">
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"UIUX Training"} />
                    UIUX Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"HR Training"} />
                    HR Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"UIUX Training"} />
                    Product Manager Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"HR Training"} />
                    HR Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"UIUX Training"} />
                    Product Manager Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"UIUX Training"} />
                    UIUX Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"HR Training"} />
                    HR Training
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="slctone" value={"UIUX Training"} />
                    Product Manager Training
                  </label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: "10px",
                      //   paddingTop: "20px",
                    }}
                  >
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "10px",
                    paddingTop: "20px",
                  }}
                >
                  <button className="buttonn">Send request</button>
                </div>
              </div>

            </div>{" "}
            <br />
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default TrainerPopUp;
