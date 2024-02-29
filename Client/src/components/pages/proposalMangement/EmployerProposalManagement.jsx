import React, { useEffect, useState } from "react";
import "../../styles/TrainerProposalManagement.css";
import EmployerProposalCandidacy from "./Employerproposalmanagement/EmpProposalCandidacy";
import EmployerProposalRequest from "./Employerproposalmanagement/EmpProposalRequest";
import { Link, useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {getAllAppliedTraining} from '../../../redux/action/employers.action'
const EmployerProposalManagement = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  useEffect(() => {
    setActiveOption(getActiveOption(location.pathname));
  }, [location.pathname]);
  const getActiveOption = (pathname) => {
    if (pathname.startsWith("/employerDashboard/proposalmanagement/candidacy"))
      return "Candidacy";
    if (pathname.startsWith("/employerDashboard/proposalmanagement/proposal"))
      return "Proposal";
    return "Candidacy";
  };
  const [activeOption, setActiveOption] = useState(
    getActiveOption(location.pathname)
  );
  useEffect(()=>{
    dispatch(getAllAppliedTraining())
  },[dispatch])
  const appliedTraining=useSelector(({employerSignUp})=>{
    return employerSignUp?.getAllAppliedTraining?.appliedTrainingDetails
  })
  // console.log("appliedTraining",appliedTraining);
  const renderComponent = () => {
    switch (activeOption) {
      case "Candidacy":
        return <EmployerProposalCandidacy />;
      case "Proposal":
        return <EmployerProposalRequest appliedTrainingDetails={appliedTraining}/>;
      default:
        return null;
    }
  };
  return (
    <div className="ProposalManagement">
      <div className="Post_Buttons">
        <Link to="/employerDashboard/proposalmanagement/candidacy">
          <button
            style={{ marginRight: "10px" }}
            className={`Post_T ${activeOption === "Candidacy" ? "active" : ""}`}
          >
            Candidacy
          </button>
        </Link>
        <Link to="/employerDashboard/proposalmanagement/proposal">
          <button
            className={`Post_J ${activeOption === "Proposal" ? "active" : ""}`}
          >
            Proposal
          </button>
        </Link>
      </div>
      {renderComponent()}
    </div>
  );
};

export default EmployerProposalManagement;
