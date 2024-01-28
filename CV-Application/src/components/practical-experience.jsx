import { useState } from 'react';

const PracticalExperience = () => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div>
      <h2>Practical Experience</h2>
      <form>
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <br />
        <label>
          Position Title:
          <input type="text" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Responsibilities:
          <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default PracticalExperience;