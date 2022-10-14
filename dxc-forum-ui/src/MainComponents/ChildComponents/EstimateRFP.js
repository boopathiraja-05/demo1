import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import RFPService from "../../Services/RFPService";
export default function EstimateRFP() {
  const params = useParams();

  const [rfp, setRfp] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    RFPService.getById(params.id)
      .then((response) => {
        setRfp(response.data);
      })
      .catch((error) => {
        console.log(error);
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
                RFP Estimate
              </li>
            </ol>
          </small>
        </nav>

        {/* <i class="far fa-chart-pie font-weight-bold fa-2x d-inline mr-2"></i> */}
        <small>
          <h1 class="d-inline">
            Estimate RFP - <small class="text-success">{rfp.rfpTitle}</small>
          </h1>
        </small>
        <div class="content-container mt-3 mb-5">
          <div class="container-fluid">
         
            <div class="row">
              <div class="col-md-6 col-sm-12 col-lg-6">
                <small>
                  <table class="table table-bordered">
                    <tr class="text-center estimate-table">
                      <th colspan="2">RFP Summary Info</th>
                    </tr>
                    <tr>
                      <th>RFP Name</th>
                      <td class="estimate-table-data">{rfp.rfpTitle}</td>
                    </tr>
                    <tr>
                      <th>Client</th>
                      <td class="estimate-table-data">{rfp.client}</td>
                    </tr>
                    <tr>
                      <th>Date Initiated</th>
                      <td class="estimate-table-data">{rfp.dateOfEntry}</td>
                    </tr>
                    <tr>
                      <th>Java Capability SPOC</th>
                      <td class="estimate-table-data">
                        {rfp.javaCapabilityRfpTeam}
                      </td>
                    </tr>
                    <tr>
                      <th>Java Technology Involved</th>
                      <td class="estimate-table-data">{rfp.technology}</td>
                    </tr>
                  </table>
                </small>
              </div>
              <div class="col-md-6 col-sm-12 col-lg-6">
                <div>
                <a
                  href="/rfp/add-estimation"
                  class="btn btn-md btn-secondary d-inline text-light" 
                >
                  Add Estimation
                </a>
                </div><br></br>
                <small>
                  <table class="table table-bordered">
                    <tr class="text-center estimate-table">
                      <th>Phases</th>
                      <th>Enter Estimation Variable Below</th>
                      <th>Effort(PH)</th>
                      <th>Effort(Man-Months)</th>
                    </tr>
                    <tr>
                      <th>Business Requirements & Functional Specifications</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Detailed Design</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Code & Unit Test</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>System Testing & System Integration Testing</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>User Acceptance Testing</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Project Management</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                  </table>
                </small>
              </div>
              <div class="col-md-6 col-sm-12 col-lg-6">
                <small>
                  <table class="table table-bordered">
                    <tr class="text-center estimate-table">
                      <th>Springboot / Microservices / API</th>
                      <th>Simple</th>
                      <th>Medium</th>
                      <th>Complex</th>
                      <th>Very Complex</th>
                    </tr>
                    <tr>
                      <th>DB Operations</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Parameter / Interface</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Cut Effort (PH)</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                  </table>
                  <table class="table table-bordered">
                    <tr class="text-center estimate-table">
                      <th>WebServices (Spring MVC, Rest API)</th>
                      <th>Simple</th>
                      <th>Medium</th>
                      <th>Complex</th>
                      <th>Very Complex</th>
                    </tr>
                    <tr>
                      <th>DB Operations</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Parameter / Interface</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Cut Effort (PH)</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                  </table>
                  <table class="table table-bordered">
                    <tr class="text-center estimate-table">
                      <th>JSP Servlet / JSF</th>
                      <th>Simple</th>
                      <th>Medium</th>
                      <th>Complex</th>
                      <th>Very Complex</th>
                    </tr>
                    <tr>
                      <th>DB Operations</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Parameter / Interface</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                    <tr>
                      <th>Cut Effort (PH)</th>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                      <td class="estimate-table-data"></td>
                    </tr>
                  </table>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
