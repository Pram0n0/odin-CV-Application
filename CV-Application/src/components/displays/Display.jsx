/* eslint-disable react/prop-types */
const DisplayForm = ({ generalInformation, educationalExperience, practicalExperience }) => {
    return (
      <div>
        <h2>Display Information</h2>
  
        {/* Display General Information */}
        <div>
          <h3>General Information:</h3>
          <p>Name: {generalInformation.name}</p>
          <p>Email: {generalInformation.email}</p>
          <p>Phone: {generalInformation.phoneNumber}</p>
        </div>
  
        {/* Display Educational Experience */}
        <div>
          <h3>Educational Experience:</h3>
          <p>School Name: {educationalExperience.schoolName}</p>
          <p>Study Title: {educationalExperience.studyTitle}</p>
          <p>Date of Study: {educationalExperience.studyDate}</p>
        </div>
  
        {/* Display Practical Experience */}
        <div>
          <h3>Practical Experience:</h3>
          <p>Company Name: {practicalExperience.companyName}</p>
          <p>Position Title: {practicalExperience.positionTitle}</p>
          <p>Responsibilities: {practicalExperience.responsibilities}</p>
          <p>Start Date: {practicalExperience.startDate}</p>
          <p>End Date: {practicalExperience.endDate}</p>
        </div>
      </div>
    );
  };
  
  export default DisplayForm;