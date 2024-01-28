import { useState } from 'react';

const EducationalExperience = () => {
  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDate, setStudyDate] = useState('');

  return (
    <div>
      <h2>Educational Experience</h2>
      <form>
        <label>
          School Name:
          <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
        </label>
        <br />
        <label>
          Title of Study:
          <input type="text" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Study:
          <input type="text" value={studyDate} onChange={(e) => setStudyDate(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default EducationalExperience;