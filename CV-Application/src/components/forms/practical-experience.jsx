/* eslint-disable react/prop-types */
const PracticalExperience = ({ data, editMode, onChange, onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => onChange('companyName', e.target.value)}
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              value={data.positionTitle}
              onChange={(e) => onChange('positionTitle', e.target.value)}
            />
          </label>
          <br />
          <label>
            Responsibilities:
            <textarea
              value={data.responsibilities}
              onChange={(e) => onChange('responsibilities', e.target.value)}
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="date"
              value={data.startDate}
              onChange={(e) => onChange('startDate', e.target.value)}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="date"
              value={data.endDate}
              onChange={(e) => onChange('endDate', e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {data.companyName}</p>
          <p>Position Title: {data.positionTitle}</p>
          <p>Responsibilities: {data.responsibilities}</p>
          <p>Start Date: {data.startDate}</p>
          <p>End Date: {data.endDate}</p>
          <button onClick={() => onSubmit()}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;