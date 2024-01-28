/* eslint-disable react/prop-types */
const EducationalExperience = ({ data, editMode, onChange, onSubmit }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              value={data.schoolName}
              onChange={(e) => onChange('schoolName', e.target.value)}
            />
          </label>
          <br />
          <label>
            Study Title:
            <input
              type="text"
              value={data.studyTitle}
              onChange={(e) => onChange('studyTitle', e.target.value)}
            />
          </label>
          <br />
          <label>
            Date of Study:
            <input
              type="date"
              value={data.studyDate}
              onChange={(e) => onChange('studyDate', e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {data.schoolName}</p>
          <p>Study Title: {data.studyTitle}</p>
          <p>Date of Study: {data.studyDate}</p>
          <button onClick={() => onSubmit()}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;