import { createSlice } from "@reduxjs/toolkit"

export const drives = [{
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
  }];

const initialState={
    drives:drives,
    loading:false,
    error:null,
}

const driveSlice=createSlice({
    name:'driveSlice',
    initialState,
    reducers:{
        fetchDrivesRequest:(state)=>{
            state.loading=true
            state.error=null
        },
        fetchDrivesSuccess:(state,action)=>{
            state.drives=action.payload
            state.loading=false
            state.error=null
        },
        fetchDrivesFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        addDrivesRequest:(state, _action)=>{
            console.log('gg')
            state.loading=true
        },
        addDrivesSuccess:(state,action)=>{
            console.log("hi");
            
            state.loading=false
            state.drives=[...state.drives,action.payload]
        },
        addDrivesFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
    }
})

export const {actions}=driveSlice
export default driveSlice.reducer