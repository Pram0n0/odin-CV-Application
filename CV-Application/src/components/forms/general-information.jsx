/* eslint-disable react/prop-types */
const GeneralInformation = ({ data, editMode, onChange, onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2>General Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onChange('phoneNumber', e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phoneNumber}</p>
          <button onClick={() => onSubmit()}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInformation;