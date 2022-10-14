import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import RFPService from "../../Services/RFPService";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function AddRFP() {
  const navigate = useNavigate();

  const [rfpTitle, SetRfpTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [region, setRegion] = useState("");
  const [technology, setTechnology] = useState("");
  const [javaCapabilityRfpTeam, setJavaCapabilityRfpTeam] = useState("");
  const [dxcSolutioningLead, setDxcSolutioningLead] = useState("");
  const [type, setType] = useState("");
  const [totalDealValue, setTotalDealValue] = useState("");
  const [opxId, setOpxId] = useState("");
  const [dateOfEntry, setDateOfEntry] = useState("");
  const [etaToSubmitRfp, setEtaToSubmitRfp] = useState("");
  const [realizationDate, setRealizationDate] = useState("");
  const [tcvUsd, setTcvUsd] = useState("");
  const [effort, setEffort] = useState("");
  const [projectPlannedStatus, setProjectPlannedStatus] = useState("");
  const [notes, setNotes] = useState("");

  const saveRfp = (e) => {
    e.preventDefault();

    const rfp = {
      rfpTitle,
      client,
      status,
      region,
      technology,
      javaCapabilityRfpTeam,
      dxcSolutioningLead,
      type,
      totalDealValue,
      opxId,
      dateOfEntry,
      etaToSubmitRfp,
      realizationDate,
      tcvUsd,
      effort,
      projectPlannedStatus,
      notes,
    };

    RFPService.addRFP(rfp)
      .then((response) => {
        console.log("RFP Data Added Successfully", response.data);
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
                Add RFP Data
              </li>
            </ol>
          </small>
        </nav>

        {/* <i class="fa-solid fa-plus fa-2x d-inline mr-2"></i> */}
        <small>
          <h1 class="d-inline">Add RFP Data</h1>
          <div class="content-container">
            <div class="container-fluid">
              <div class="card shadow-sm mb-5 mt-3">
                <div className="card-body">
                  <form>
                    <div class="form-group mt-3">
                      <label>RFP Title</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="RFP Title"
                        name="rfpTitle"
                        value={rfpTitle}
                        onChange={(e) => SetRfpTitle(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Client</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Client"
                        name="client"
                        onChange={(e) => setClient(e.target.value)}
                        value={client}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Status</label>
                      {/* <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Status"
                        name="status"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        required
                      ></input> */}
                      <select
                        class="form-control shadow-sm"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Status--
                        </option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="New">New</option>
                        <option value="OnHold">OnHold</option>
                        <option value="Submitted">Submitted</option>
                        <option value="WIP">WIP</option>
                        <option value="Won">Won</option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label>Region</label>
                      {/* <input
                        type="email"
                        class="form-control shadow-sm"
                        placeholder="Region"
                        name="region"
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}
                        required
                      ></input> */}
                      <select
                        class="form-control shadow-sm"
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Region--
                        </option>
                        <option value="AMS">AMS</option>
                        <option value="APAC">APAC</option>
                        <option value="EMEA">EMEA</option>
                        <option value="India Domestic">India Domestic</option>
                        <option value="LATM">LATAM</option>
                        <option value="UK">UK</option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label>Technology</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Technology"
                        name="technology"
                        onChange={(e) => setTechnology(e.target.value)}
                        value={technology}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Java Capability RFP Team</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Java Capability RFP Team"
                        name="javaCapabilityRfpTeam"
                        onChange={(e) =>
                          setJavaCapabilityRfpTeam(e.target.value)
                        }
                        value={javaCapabilityRfpTeam}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>DXC Solution Lead</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="DXC Solution Lead"
                        name="dxcSolutioningLead"
                        onChange={(e) => setDxcSolutioningLead(e.target.value)}
                        value={dxcSolutioningLead}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Type</label>
                      {/* <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Type"
                        name="type"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        required
                      ></input> */}
                      <select
                        class="form-control shadow-sm"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option selected disabled>
                          --Select Type--
                        </option>
                        <option value="DLG">DLG</option>
                        <option value="Internal Migration">
                          Internal Migration
                        </option>
                        <option value="Potential RFP">Potential RFP</option>
                        <option value="Quote Prior to RFP">
                          Quote Prior to RFP
                        </option>
                        <option value="Resource_Augmentation">
                          Resource Augmentation
                        </option>
                        <option value="RFP">RFP</option>
                        <option value="RFP / Consultancy">
                          RFP/Consultancy
                        </option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label>Total Deal Value</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="Total Deal Value"
                        name="totalDealValue"
                        onChange={(e) => setTotalDealValue(e.target.value)}
                        value={totalDealValue}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>OPX ID</label>
                      <input
                        type="text"
                        class="form-control shadow-sm"
                        placeholder="OPX ID"
                        name="opxId"
                        onChange={(e) => setOpxId(e.target.value)}
                        value={opxId}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Date Of Entry</label>
                      <input
                        class="form-control shadow-sm"
                        type="date"
                        placeholder="Date Of Entry"
                        name="dateOfEntry"
                        onChange={(e) => setDateOfEntry(e.target.value)}
                        value={dateOfEntry}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>ETA To Submit RFP</label>
                      <input
                        class="form-control shadow-sm"
                        type="date"
                        placeholder="ETA To Submit RFP"
                        name="etaToSubmitRfp"
                        onChange={(e) => setEtaToSubmitRfp(e.target.value)}
                        value={etaToSubmitRfp}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Realization Date (Win)</label>
                      <input
                        class="form-control shadow-sm"
                        type="date"
                        placeholder="Realization Date (Win)"
                        name="realizationDate"
                        onChange={(e) => setRealizationDate(e.target.value)}
                        value={realizationDate}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>TCV USD</label>
                      <input
                        class="form-control shadow-sm"
                        type="text"
                        placeholder="TCV USD"
                        name="tcvUsd"
                        onChange={(e) => setTcvUsd(e.target.value)}
                        value={tcvUsd}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Effort (Person Hour)</label>
                      <input
                        class="form-control shadow-sm"
                        type="text"
                        placeholder="Effort (Person Hour)"
                        name="effort"
                        onChange={(e) => setEffort(e.target.value)}
                        value={effort}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Project Planned Status</label>
                      <input
                        class="form-control shadow-sm"
                        type="text"
                        placeholder="Project Planned Status"
                        name="projectPlannedStatus"
                        onChange={(e) =>
                          setProjectPlannedStatus(e.target.value)
                        }
                        value={projectPlannedStatus}
                        required
                      ></input>
                    </div>
                    <div class="form-group mt-3">
                      <label>Notes</label>
                      <textarea
                        class="shadow-sm form-control"
                        placeholder="Notes"
                        rows="4"
                        onChange={(e) => setNotes(e.target.value)}
                        value={notes}
                        required
                      ></textarea>
                      {/* <div className="App">
                        <CKEditor
                          editor={Editor}
                          data=""
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setNotes(data);
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div> */}
                    </div>
                    <button
                      class="btn btn-success mt-3"
                      onClick={(e) => saveRfp(e)}
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
