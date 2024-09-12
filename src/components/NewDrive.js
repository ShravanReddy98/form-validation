import React, { useState } from "react";
import Input from "../utils/input";
import "./NewDrive.css";
import { useDispatch } from "react-redux";
import { actions } from "../redux/drives/driveSlice";
import Select from "../utils/Select";

const dummyData = {
  jobId: "1463",
  companyName: "Aastra Technologies",
  jobTitle: "Backend Developer",
  jobRole: "Backend Developer",
  jobLocation: "bangalore",
  Package: "Upto 6 LPA",
  skills: [
    "data structures and algorithms",
    "C",
    "C++",
    "java",
    "Springboot",
    "Mysql",
  ],
  genderPreference: "male & female",
  qualification: "BCA",
  yearOfPassing: "2022",
  stream: "mechanical",
  backlogAllowed: "yes",
  sslcPer: "80",
  diplomaPer: "80",
  graduateMinPer: "80",
  gapInEducation: 'allowed',
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
  firstRoundDate: "2024-09-23",
  expiresIn: "2024-09-22",
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

const qualifications = ["BCA", "BCOM", "BSc", "BTech", "MCA", "MTech"];

const streams = ["computer science", "electrical", "mechanical"];

const yearOfPassings = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

const backlogAlloweds = ["yes", "no"];

const gapInEducations = ["allowed", "notAllowed"];

const modeOfInterviews = ["online", "offline", "online & offline"];

const relocations = ["Yes", "No"];

const certificateSubmission = ["Yes", "No"];

const shifts = ["morning", "night", "based on project", "rotational shift"];

const interviewType = ["technical", "nonTechnical"];

const NewDrive = () => {
  const dispatch = useDispatch();
  const initialDrive = {
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
  };
  const initialErrors = {
    companyName: null,
    jobTitle: null,
    jobRole: null,
    jobLocation: null,
    Package: null,
    genderPreference: null,
    qualification: null,
    yearOfPassing: null,
    backlogAllowed: null,
    sslcPer: null,
    stream: null,
    diplomaPer: null,
    graduateMinPer: null,
    gapInEducation: null,
    interviewRounds: null,
    modeOfInterview: null,
    firstRoundDate: null,
    expiresIn: null,
  };
  const [jobDetails, setJobDetails] = useState(initialDrive);
  const [jobErrors, setJobErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setJobErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
    console.log(jobDetails[name],jobErrors[name]);
  };

  const handleAddDummy = () => {
    setJobDetails(prev=>({...prev, ...dummyData }));
    setJobErrors(prev=>({...prev,initialErrors}));
  };

  const validate = (field, value) => {
    if (value === "") {
      const error = `${field} is required`;
      setJobErrors((prev) => ({ ...prev, [field]: error }));
      return false;
    }
    return true;
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
      validate("companyName", companyName) &&
      validate("jobTitle", jobTitle) &&
      validate("jobRole", jobRole) &&
      validate("jobLocation", jobLocation) &&
      validate("Package", Package) &&
      skills.length > 0 &&
      validate("genderPreference", genderPreference) &&
      validate("qualification", qualification) &&
      validate("yearOfPassing", yearOfPassing) &&
        validate("stream",stream) &&
      validate("backlogAllowed", backlogAllowed) &&
      validate("sslcPer", sslcPer) &&
      validate("diplomaPer", diplomaPer) &&
      validate("graduateMinPer", graduateMinPer) &&
      validate("gapInEducation", gapInEducation) &&
      validate("interviewRounds", interviewRounds) &&
      validate("modeOfInterview", modeOfInterview) &&
      validate("firstRoundDate", firstRoundDate) &&
      validate("expiresIn", expiresIn)
      //  && expiresIn<firstRoundDate
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
      });
    } else {
      validate("companyName", companyName);
      validate("jobTitle", jobTitle);
      validate("jobRole", jobRole);
      validate("jobLocation", jobLocation);
      validate("Package", Package);
      validate("genderPreference", genderPreference);
      validate("qualification", qualification);
      validate("yearOfPassing", yearOfPassing);
      validate("backlogAllowed", backlogAllowed);
      validate("sslcPer", sslcPer);
      validate("diplomaPer", diplomaPer);
      validate("graduateMinPer", graduateMinPer);
      validate("gapInEducation", gapInEducation);
      validate("interviewRounds", interviewRounds);
      validate("modeOfInterview", modeOfInterview);
      validate("firstRoundDate", firstRoundDate);
        validate("stream",stream) ;
        validate("expiresIn", expiresIn);
        if(
      skills.length <= 0 
      ){
        const error = 'skills are required*';
      setJobErrors((prev) => ({ ...prev, skills: error }));
      return false;
      }
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
            />
            <Select
              name={"companyName"}
              value={jobDetails.companyName}
              array={companies}
              fun={handleChange}
              error={jobErrors.companyName}
              required={true}
            />
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
              error={jobErrors.jobTitle}
              required={true}
            />
            <Input
              name={"jobRole"}
              type={"text"}
              value={jobDetails.jobRole}
              error={jobErrors.jobRole}
              required={true}
              fun={handleChange}
            />
            <Select
              name={"jobLocation"}
              value={jobDetails.jobLocation}
              array={jobLocations}
              fun={handleChange}
              error={jobErrors.jobLocation}
              required={true}
            />
            <Input
              name={"Package"}
              type={"text"}
              value={jobDetails.Package}
              error={jobErrors.Package}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"skills"}
              type={"text"}
              value={jobDetails.skills}
              error={jobErrors.skills}
              required={true}
              fun={handleChange}
            />
          </div>
        </div>
        <div>
          Job Criteria Details:
          <div>
            <Select
              name={"genderPreference"}
              value={jobDetails.genderPreference}
              array={genderPreferences}
              fun={handleChange}
              error={jobErrors.genderPreference}
              required={true}
            />

            <Select
              name={"qualification"}
              value={jobDetails.qualification}
              array={qualifications}
              fun={handleChange}
              error={jobErrors.qualification}
              required={true}
            />

            <Select
              name={"stream"}
              value={jobDetails.stream}
              array={streams}
              fun={handleChange}
              error={jobErrors.stream}
              required={true}
            />

            <Select
              name={"yearOfPassing"}
              value={jobDetails.yearOfPassing}
              array={yearOfPassings}
              fun={handleChange}
              error={jobErrors.yearOfPassing}
              required={true}
            />

            <Select
              name={"backlogAllowed"}
              value={jobDetails.backlogAllowed}
              array={backlogAlloweds}
              fun={handleChange}
              error={jobErrors.backlogAllowed}
              required={true}
            />
            <Input
              name={"sslcPer"}
              type={"text"}
              value={jobDetails.sslcPer}
              error={jobErrors.sslcPer}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"diplomaPer"}
              type={"text"}
              value={jobDetails.diplomaPer}
              error={jobErrors.diplomaPer}
              required={true}
              fun={handleChange}
            />
            <Input
              name={"graduateMinPer"}
              type={"text"}
              error={jobErrors.graduateMinPer}
              required={true}
              value={jobDetails.graduateMinPer}
              fun={handleChange}
            />
            <Select
              name={"gapInEducation"}
              value={jobDetails.gapInEducation}
              array={gapInEducations}
              fun={handleChange}
              error={jobErrors.gapInEducation}
              required={true}
            />
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
              error={jobErrors.interviewRounds}
              required={true}
            />
            <Select
              name={"modeOfInterview"}
              value={jobDetails.modeOfInterview}
              array={modeOfInterviews}
              fun={handleChange}
              error={jobErrors.modeOfInterview}
              required={true}
            />
            <Input
              name={"deposit"}
              type={"text"}
              value={jobDetails.deposit}
              fun={handleChange}
            />
            <Select
              name={"relocation"}
              value={jobDetails.relocation}
              array={relocations}
              fun={handleChange}
            />
            <Input
              name={"certificateSubmission"}
              type={"text"}
              value={jobDetails.certificateSubmission}
              fun={handleChange}
            />
            <Select
              name={"shift"}
              value={jobDetails.shift}
              array={shifts}
              fun={handleChange}
            />
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
