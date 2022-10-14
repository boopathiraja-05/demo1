import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import CertificationService from "../../Services/CertificationService";
const AddCertification = () => {
  const navigate = useNavigate();

  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [voucher, setVoucher] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const saveCertificate = (e) => {
    e.preventDefault();

    const certificate = {
      empId,
      empName,
      empEmail,
      voucher,
      status,
      date,
      remarks,
    };

    CertificationService.save(certificate)
      .then((response) => {
        console.log("certificate data", response.data);
        navigate(`/certification`);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("Something went wrong in add certificate", error);
      });
  };

  //Upload Excel Sheet
  const [files, setFiles] = useState("");
  //for displaying response message
  const [fileUploadResponse, setFileUploadResponse] = useState(null);
  //base end point url
  const FILE_UPLOAD_BASE_ENDPOINT = "http://localhost:9090/certification";

  const uploadFileHandler = (event) => {
    setFiles(event.target.files);
  };

  const fileSubmitHandler = (event) => {
    event.preventDefault();
    setFileUploadResponse(null);

    const formData = new FormData();
    formData.append(`file`, files[0]);
    console.log(files);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(FILE_UPLOAD_BASE_ENDPOINT + "-excel", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        console.log("file", response);

        // check for error response
        if (!response.ok) {
          // get error message
          const error = (data && data.message) || response.status;
          setFileUploadResponse(data.message);
          return Promise.reject(error);
        }

        console.log("Data msg", data.message);
        setFileUploadResponse(data.message);
      })
      .catch((error) => {
        console.error("Error while uploading file!", error);
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
                <a href="/certification">Certification</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Add Certificate
              </li>
            </ol>
          </small>
        </nav>
        {/* <i class="fa-solid fa-plus fa-2x d-inline mr-2"></i> */}
        <small>
          <h1 class="d-inline">Add Certificate</h1>
          <div class="content-container">
            <div class="container-fluid">
              <div class="card shadow-sm mb-5 mt-3">
                <div className="card-body">
                  <form onSubmit={fileSubmitHandler}>
                    <div class="form-group mt-3">
                      <label>Upload Excel Sheet</label>
                      <input
                        type="file"
                        class="form-control shadow-sm"
                        placeholder="Upload Excel Sheet"
                        multiple
                        onChange={uploadFileHandler}
                      ></input>
                    </div>
                    <button type="submit" class="btn btn-success mt-3">
                      Upload
                    </button>
                    {fileUploadResponse != null && (
                      <p style={{ color: "green" }}>{fileUploadResponse}</p>
                    )}
                  </form>
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>
                  <form>
                    <div class="form-group mt-3">
                      <label>Employee ID</label>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-danger" style={{ fontSize: 10 }}>
                        *Insert Only Numerical Data
                      </small>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Employee ID"
                        name="emp_id"
                        onChange={(e) => setEmpId(e.target.value)}
                        value={empId}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>DECP Name</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="DECP Name"
                        name="empName"
                        value={empName}
                        onChange={(e) => setEmpName(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>DECP Email</label>
                      <input
                        type="email"
                        class="form-control shadow-sm"
                        placeholder="DECP Email"
                        name="empEmail"
                        value={empEmail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Voucher</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Voucher"
                        name="voucher"
                        value={voucher}
                        onChange={(e) => setVoucher(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Date</label>
                      <input
                        type="date"
                        class="form-control shadow-sm"
                        placeholder="Submission Date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Status</label>
                      {/* <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Status of Certificate"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      ></input> */}
                      <select
                        class="form-control shadown-sm"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Status--
                        </option>
                        <option value="Pass">Pass</option>
                        <option value="Fail">Fail</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Scheduled">Expired</option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label>Remarks</label>
                      <textarea
                        class="form-control shadow-sm"
                        placeholder="Remarks"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button
                      class="btn btn-success mt-3"
                      onClick={(e) => saveCertificate(e)}
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
};

export default AddCertification;
