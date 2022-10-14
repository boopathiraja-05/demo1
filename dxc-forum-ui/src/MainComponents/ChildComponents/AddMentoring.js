import { useEffect, useState } from "react";
import MentoringService from "../../Services/MentoringService";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const AddMentoring = () => {
  const navigate = useNavigate();

  const [batch, setBatch] = useState("");
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [heScore, setHeScore] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [heRank, setHeRank] = useState("");
  const [project, setProject] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [techStack, setTechStack] = useState("");
  const [status, setStatus] = useState("");

  // const history = useHistory();

  const saveMentoring = (e) => {
    e.preventDefault();

    const mentor = {
      batch,
      empId,
      name,
      email,
      heScore,
      updateDate,
      heRank,
      project,
      projectTitle,
      techStack,
      status,
    };
    console.log("Mentor", mentor);
    MentoringService.AddMentoring(mentor)
      .then((response) => {
        console.log("Employee Data Added Successfully", response.data);
        navigate(`/mentoring`);
        window.location.reload(false);
        // history.push('/');
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  //Excel File Upload
  const [files, setFiles] = useState("");
  const [fileUploadResponse, setFileUploadResponse] = useState(null);
  const FILE_UPLOAD_BASE_ENDPOINT = "http://localhost:9090/mentoring";

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
                <a href="/mentoring">Mentoring</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Add Mentoring
              </li>
            </ol>
          </small>
        </nav>
        {/* <i class="fa-solid fa-plus fa-2x d-inline mr-2"></i> */}
        <small>
          <h1 class="d-inline">Add Mentoring</h1>
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
                      <label>Batch</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Batch"
                        name="batch"
                        v
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        required
                      ></input>
                    </div>
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
                      <label>Employee Name</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Employee Name"
                        name="emp_name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Employee Email</label>
                      <input
                        type="email"
                        class="form-control shadow-sm"
                        placeholder="Employee Email"
                        name="emp_email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>HackerEarth Score</label>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-danger" style={{ fontSize: 10 }}>
                        *Insert Only Numerical Data
                      </small>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="HackerEarth Score"
                        name="he_score"
                        onChange={(e) => setHeScore(e.target.value)}
                        value={heScore}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Date</label>
                      <input
                        type="date"
                        class="form-control shadow-sm"
                        placeholder="Date"
                        name="update_date"
                        onChange={(e) => setUpdateDate(e.target.value)}
                        value={updateDate}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>HackerEarth Rank</label>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-danger" style={{ fontSize: 10 }}>
                        *Insert Only Numerical Data
                      </small>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="HackerEarth Rank"
                        name="he_rank"
                        onChange={(e) => setHeRank(e.target.value)}
                        value={heRank}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Project</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Project"
                        name="project"
                        onChange={(e) => setProject(e.target.value)}
                        value={project}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Project Title</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Project Title"
                        name="project_title"
                        onChange={(e) => setProjectTitle(e.target.value)}
                        value={projectTitle}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Technology Stack</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Technology Stack"
                        name="tech_stack"
                        onChange={(e) => setTechStack(e.target.value)}
                        value={techStack}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Project Status</label>
                      {/* <input
                        class="form-control shadow-sm"
                        type="text"
                        placeholder="Project Status"
                        name="status"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        required
                      ></input> */}
                      <select
                        class="form-control shadown-sm"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Project Status--
                        </option>
                        <option value="In Progress">In Progress</option>
                        <option value="Started">Started</option>
                        <option value="Not Started">Not Started</option>
                      </select>
                    </div>
                    <button
                      class="btn btn-success mt-3"
                      onClick={(e) => saveMentoring(e)}
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

export default AddMentoring;
