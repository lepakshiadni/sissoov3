import Axios from "axios";
import Cookies from "js-cookie";
const baseUrl = localStorage.getItem("baseUrl");

const employerSignUpAction = (details) => {
  return async (dispatch) => {
    try {
      await Axios.post(`${baseUrl}/employer/employerSignUp`, details)
        .then((resp) => {
          dispatch({
            type: "EMPLOYER_SIGNUP_SUCCESS",
            payload: resp.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "EMPLOYER_SIGNUP_FAILD",
            payload: error,
          });
        });
    } catch (error) {
      dispatch({
        type: "EMPLOYER_SIGNUP_FAILD",
        payload: error,
      });
    }
  };
};

const employerDetails = () => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.get(`${baseUrl}/employer/getemployerProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp.data)
        dispatch({
          type: "GET_EMPLOYEEDETAILS_FETCHED",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "UNAUTHORIZED",
        payload: err,
      });
    }
  };
};

export const employerBasicInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerBasicInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        dispatch({
          type: "EMPLOYERBASICINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERBASICINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerSkillsUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerSkillsUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYERSKILSSINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERSKILSSINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerContactInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerContactInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYERCONTACTINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERCONTACTINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerExperienceInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerExperienceInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYEREXPERIENCEINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYEREXPERIENCEINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const deleteEmployerExperience = (_id) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", _id);
  return async (dispatch) => {
    try {
      Axios.delete(`${baseUrl}/employer/employerExperienceInfoUpdate/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "DELETE_EMPLOYER_EXPERIENCE_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "DELETE_EMPLOYER_EXPERIENCE_FAILURE",
        payload: err,
      });
    }
  };
};

export const getAppliedTrainingEmployer = () => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.get(`${baseUrl}/employer/getAppliedTrainingEmployer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "APPLIEDTRAININGFECTED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "APPLIEDTRAININGFECTED_FAILURE",
        payload: error,
      });
    }
  };
};

export const getAllAppliedTraining = () => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.get(`${baseUrl}/employer/getAllAppliedTraining`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "ALLAPPLIEDTRAININGFECTED_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "ALLAPPLIEDTRAININGFECTED_FAILURE",
        payload: error,
      });
    }
  };
};



export const updateApplicationStatus = (trainingDetailsId, trainerId, status) => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/updateAppliedStatus`, { trainingDetailsId, trainerId, status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "UPDATEDAPPLIEDSTATUS_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "UPDATEDAPPLIEDSTATUS_FAILURE",
        payload: error,
      });
    }
  };
}

export const addFeedback = (feedBack,trainingDetailsId) => {
  const token = Cookies.get('token');
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/addFeedback/${trainingDetailsId}`, feedBack, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "ADDFEEDBACK_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "ADDFEEDBACK_FAILURE",
        payload: error,
      });
    }
  }
}

export { employerSignUpAction, employerDetails };
