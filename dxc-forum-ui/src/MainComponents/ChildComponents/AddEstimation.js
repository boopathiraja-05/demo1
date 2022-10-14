import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import RFPService from "../../Services/RFPService";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function AddEstimation() {
  const navigate = useNavigate();

  const [phases, SetPhases] = useState("");
  const [estimationVariables, setEstimationVariables] = useState("");
  const [effort_PH, setEffort_PH] = useState("");
  const [effort_man_months, setEffort_man_months] = useState("");
 

  const saveEstimation = (e) => {
    e.preventDefault();

    const estimation = {
      phases,
      estimationVariables,
      effort_PH,
      effort_man_months,
     
    };

    RFPService.addEstimation(estimation)
      .then((response) => {
        console.log("Estimation Data Added Successfully", response.data);
        navigate(`/rfp`);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div class="col main pt-5 mt-3">
        <nav aria-label="breadcrumb">
          <small>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/rfp">RFP Tracker</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Add Estimation Data
              </li>
            </ol>
          </small>
        </nav>

        {/* <i class="fa-solid fa-plus fa-2x d-inline mr-2"></i> */}
        <small>
          <h1 class="d-inline">Add Estimation Data</h1>
          <div class="content-container">
            <div class="container-fluid">
              <div class="card shadow-sm mb-5 mt-3">
                <div className="card-body">
                  <form>
                    <div class="form-group mt-3">
                      <label>Phases</label>
                      {/*<input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="elect Phases"
                        name="phases"
                        value={phases}
                        onChange={(e) => SetPhases(e.target.value)}
                        required
  ></input>*/}
                      <select
                        class="form-control shadow-sm"
                        onChange={(e) => SetPhases(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Phases--
                        </option>
                        <option value="Business Requirements & Functional Specifications">Business Requirements & Functional Specifications</option>
                        <option value="Detailed Design">Detailed Design</option>
                        <option value="Code & Unit Test">Code & Unit Test</option>
                        <option value="System Testing System Integration Testing">System Testing System Integration Testing </option>
                        <option value="User Acceptance Testing">User Acceptance Testing</option>
                        <option value="Project Management">Project Management</option>
                       
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label>EstimationVariables</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Estimation Variables"
                        name="estimationVariables"
                        onChange={(e) => setEstimationVariables(e.target.value)}
                        value={estimationVariables}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Effort(PH)</label>
                      { <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Effort(PH)"
                        name="effort_PH"
                        onChange={(e) => setEffort_PH(e.target.value)}
                        value={effort_PH}
                        required
                      ></input> }
                      
                    </div>
                    <div class="form-group mt-3">
                      <label>Effort(man-months)</label>
                      {<input
                        type="email"
                        class="form-control shadow-sm"
                        placeholder="Effort(man-months)"
                        name="effort_man_months"
                        onChange={(e) => setEffort_man_months(e.target.value)}
                        value={effort_man_months}
                        required
                      ></input> }
                    </div> 
                    <button
                      class="btn btn-success mt-3"
                      onClick={(e) => saveEstimation(e)}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </small>
      </div>
    </>
  );
}
