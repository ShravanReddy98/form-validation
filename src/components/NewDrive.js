import React, { useState } from "react";
import Input from "../utils/input";
import "./NewDrive.css";
import { useDispatch } from "react-redux";
import { actions } from "../redux/drives/driveSlice";
import Select from "../utils/Select";

const dummyData = {
  jobId: "1463",
  companyName: "Aatral Technologies India Pvt ltd",
  jobTitle: "Backend Developer",
  jobRole: "Backend Developer",
  jobLocation: "Bengaluru",
  Package: "Upto 6 LPA",
  skills: [
    "data structures and algorithms",
    "C",
    "C++",
    "java",
    "Springboot",
    "Mysql",
  ],
  genderPreference: "Male & Female",
  qualification: "BE/B.Tech",
  yearOfPassing: "2022, 2023",
  stream: "",
  backlogAllowed: false,
  sslcPer: "80",
  diplomaPer: "80",
  graduateMinPer: "80",
  gapInEducation: true,
  noOfPositions: 5,
  interviewRounds: [
    "Screening Round",
    "coding test (online)",
    "Technical round f2f (Hybrid)",
    "Technical round f2f",
  ],
  modeOfInterview: "offline",
  serviceAgreement: true,
  deposit: "",
  relocation: true,
  certificateSubmission: true,
  shifts: "based on project",
  blockingPeriod: "6 months",
  firstRoundDate: "23-09-2024 ",
  expiresIn: "19-09-2024 : 19:15",
  minEmployabilityScore: "50",
  interviewType: "F2F",
  UploadJd: "",
};

const companies = [
  "Aastra Technologies",
  "ABJIMA IT Consulting Pvt. Ltd",
  "Accelirate®",
];

const jobLocations = ["bangalore", "hyderabad", "pune"];

const genderPreferences = ["male", "female", "male & female"];

const qualifications=["BCA","BCOM","BSc","BTech","MCA","MTech"]

const streams=["computer science","electrical","mechanical"]

const yearOfPassings=["2018","2019","2020","2021","2022","2023","2024"];

const backlogAlloweds=["yes","no"]

const gapInEducations=["allowed","notAllowed"]

const modeOfInterviews=["online","offline","online & offline"]

const relocations=["Yes","No"]

const certificateSubmission=["Yes","No"]

const shifts=["morning","night","based on project","rotational shift"]

const interviewType=["technical","nonTechnical"]

const NewDrive = () => {
  const dispatch = useDispatch();
  const initialDrive={
    jobId: "",
    companyName: "",
    jobTitle: "",
    jobRole: "",
    jobLocation: "",
    Package: "",
    skills: [],
    genderPreference: "",
    qualification: "",
    yearOfPassing: "",
    stream: "",
    backlogAllowed: "",
    sslcPer: "",
    diplomaPer: "",
    graduateMinPer: "",
    gapInEducation: "",
    noOfPositions: "",
    interviewRounds: "",
    modeOfInterview: "",
    serviceAgreement: "",
    deposit: "",
    relocation: "",
    certificateSubmission: "",
    shifts: "",
    blockingPeriod: "",
    firstRoundDate: "",
    expiresIn: "",
    minEmployabilityScore: "",
    interviewType: "",
    UploadJd: "",
  }
  const [jobDetails, setJobDetails] = useState(initialDrive);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDummy = () => {
    setJobDetails({ ...dummyData });
  };


  const handleCreate = () => {
    const {
      companyName,
      jobTitle,
      jobRole,
      jobLocation,
      Package,
      skills,
      genderPreference,
      qualification,
      yearOfPassing,
      stream,
      backlogAllowed,
      sslcPer,
      diplomaPer,
      graduateMinPer,
      gapInEducation,
      interviewRounds,
      modeOfInterview,
      firstRoundDate,
      expiresIn,
    } = jobDetails;

    if (
      companyName !== "" &&
      jobTitle !== "" &&
      jobRole !== "" &&
      jobLocation !== "" &&
      Package !== "" &&
      skills.length > 0 &&
      genderPreference !== "" &&
      qualification !== "" &&
      yearOfPassing !== "" &&
    //   stream !== "" &&
      backlogAllowed !== "" &&
      sslcPer !== "" &&
      diplomaPer !== "" &&
      graduateMinPer !== "" &&
      gapInEducation !== "" &&
      interviewRounds !== "" &&
      modeOfInterview !== "" &&
      firstRoundDate !== "" &&
      expiresIn !== "" 
    ) {

      dispatch(actions.addDrivesRequest(jobDetails));
      
      setJobDetails({
        jobId: "",
        companyName: "",
        jobTitle: "",
        jobRole: "",
        jobLocation: "",
        Package: "",
        skills: "",
        genderPreference: "",
        qualification: "",
        yearOfPassing: "",
        stream: "",
        backlogAllowed: "",
        sslcPer: "",
        diplomaPer: "",
        graduateMinPer: "",
        gapInEducation: "",
        noOfPositions: "",
        interviewRounds: "",
        modeOfInterview: "",
        serviceAgreement: "",
        deposit: "",
        relocation: "",
        certificateSubmission: "",
        shifts: "",
        blockingPeriod: "",
        firstRoundDate: "",
        expiresIn: "",
        minEmployabilityScore: "",
        interviewType: "",
        UploadJd: "",
      })
    }
    else{
        alert("fill all required fields")
    }
  };

  const handleCancel = () => {};

  return (
    <div>
      <h2>Create new Job</h2>
      <div className="driveForm">
        <div>
          Company Details :
          <div>
            <Input
              name={"jobId"}
              type={"text"}
              value={jobDetails.jobId}
              fun={handleChange}
              required={true}
            />
            <Select name={"companyName"} value={jobDetails.companyName} array={companies} fun={handleChange} />
          </div>
        </div>
        <div>
          Job Details :
          <div>
            <Input
              name={"jobTitle"}
              type={"text"}
              value={jobDetails.jobTitle}
              fun={handleChange}
              required={true}
            />
            <Input
              name={"jobRole"}
              type={"text"}
              value={jobDetails.jobRole}
              required={true}
              fun={handleChange}
            />
            <Select name={"jobLocation"} value={jobDetails.jobLocation} array={jobLocations} fun={handleChange} />
            <Input
              name={"Package"}
              type={"text"}
              value={jobDetails.Package}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"skills"}
              type={"text"}
              value={jobDetails.skills}
              required={true}
              fun={handleChange}
            />
          </div>
        </div>
        <div>
          Job Criteria Details:
          <div>
            <Select name={"genderPreference"} value={jobDetails.genderPreference} array={genderPreferences} fun={handleChange} />
            
            <Select name={"qualification"} value={jobDetails.qualification} array={qualifications} fun={handleChange} />
            
            <Select name={"stream"} value={jobDetails.stream} array={streams} fun={handleChange} />
            
            <Select name={"yearOfPassing"} value={jobDetails.yearOfPassing} array={yearOfPassings} fun={handleChange} />
            
            <Select name={"backlogAllowed"} value={jobDetails.backlogAllowed} array={backlogAlloweds} fun={handleChange} />
            <Input
              name={"sslcPer"}
              type={"text"}
              value={jobDetails.sslcPer}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"diplomaPer"}
              type={"text"}
              value={jobDetails.diplomaPer}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"graduateMinPer"}
              type={"text"}
              required={true}
              value={jobDetails.graduateMinPer}
              fun={handleChange}
            />
            <Select name={"gapInEducation"} value={jobDetails.gapInEducation} array={gapInEducations} fun={handleChange} />
            <Input
              name={"noOfPositions"}
              type={"text"}
              value={jobDetails.noOfPositions}
              fun={handleChange}
            />
          </div>
        </div>
        <div>
          Interview Details :
          <div>
            <Input
              name={"interviewRounds"}
              type={"text"}
              value={jobDetails.interviewRounds}
              fun={handleChange}
              required={true}
            />
            <Select name={"modeOfInterview"} value={jobDetails.modeOfInterview} array={modeOfInterviews} fun={handleChange} />
            
            {/* <select value={jobDetails.serviceAgreement}>
                <option onChange={()=>setJobDetails(prev=>({...prev,serviceAgreement:"yes"}))}>"yes"</option>
                <option onChange={()=>setJobDetails(prev=>({...prev,serviceAgreement:"No"}))}>"No"</option>
            </select> */}
            {/* <Select name={"serviceAgreement"} value={jobDetails.serviceAgreement} array={serviceAgreements} fun={handleChange} /> */}
            <Input
              name={"deposit"}
              type={"text"}
              value={jobDetails.deposit}
              fun={handleChange}
            />
            <Select name={"relocation"} value={jobDetails.relocation} array={relocations} fun={handleChange} />
            <Input
              name={"certificateSubmission"}
              type={"text"}
              value={jobDetails.certificateSubmission}
              fun={handleChange}
            />
            <Select name={"shift"} value={jobDetails.shift} array={shifts} fun={handleChange} />
            <Input
              name={"blockingPeriod"}
              type={"text"}
              value={jobDetails.blockingPeriod}
              fun={handleChange}
            />
            <Input
              name={"firstRoundDate"}
              type={"date"}
              value={jobDetails.firstRoundDate}
              fun={handleChange}
            />
            <Input
              name={"expiresIn"}
              type={"date"}
              value={jobDetails.expiresIn}
              fun={handleChange}
            />
          </div>
        </div>
        <div>
          Others :
          <div>
            <Input
              name={"minEmployabilityScore"}
              type={"text"}
              value={jobDetails.minEmployabilityScore}
              fun={handleChange}
            />
            <Input
              name={"interviewType"}
              type={"text"}
              value={jobDetails.interviewType}
              fun={handleChange}
            />
            <Input
              name={"UploadJd"}
              type={"text"}
              value={jobDetails.UploadJd}
              fun={handleChange}
            />
          </div>
        </div>

        <button onClick={handleAddDummy}>Add Dummy Details</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default NewDrive;
