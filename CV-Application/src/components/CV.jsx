import GeneralInformation from './forms/general-information'
import EducationalExperience from './forms/educational-experience'
import PracticalExperience from './forms/practical-experience'
import Display from './displays/Display';
import { useState } from 'react';

import '../style.css'

function CV() {
    const [generalInformation, setGeneralInformation] = useState({
      name: '',
      email: '',
      phoneNumber: '',
    });
  
    const [educationalExperience, setEducationalExperience] = useState({
      schoolName: '',
      studyTitle: '',
      studyDate: '',
    });
  
    const [practicalExperience, setPracticalExperience] = useState({
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
  
    const [editMode, setEditMode] = useState({
      generalInfo: true,
      education: true,
      experience: true,
    });
  
    const handleChange = (section, field, value) => {
      switch (section) {
        case 'generalInfo':
          setGeneralInformation((prevInfo) => ({
            ...prevInfo,
            [field]: value,
          }));
          break;
        case 'education':
          setEducationalExperience((prevData) => ({
            ...prevData,
            [field]: value,
          }));
          break;
        case 'experience':
          setPracticalExperience((prevData) => ({
            ...prevData,
            [field]: value,
          }));
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = (section, data) => {
      switch (section) {
        case 'generalInfo':
          console.log('General Info Toggled:', data);
          break;
        case 'education':
          console.log('Education Toggled:', data);
          break;
        case 'experience':
          console.log('Experience Toggled:', data);
          break;
        default:
          break;
      }
      
      setEditMode((prevEditMode) => ({
        ...prevEditMode,
        [section]: !prevEditMode[section],
      }));
    };
  
    return (
      <div className="container">
        <div className="forms">
          <GeneralInformation
            data={generalInformation}
            editMode={editMode.generalInfo}
            onChange={(field, value) => handleChange('generalInfo', field, value)}
            onSubmit={() => handleSubmit('generalInfo', generalInformation)}
          />
          <EducationalExperience
            data={educationalExperience}
            editMode={editMode.education}
            onChange={(field, value) => handleChange('education', field, value)}
            onSubmit={() => handleSubmit('education', educationalExperience)}
          />
          <PracticalExperience
            data={practicalExperience}
            editMode={editMode.experience}
            onChange={(field, value) => handleChange('experience', field, value)}
            onSubmit={() => handleSubmit('experience', practicalExperience)}
          />
        </div>
        <div className="display">
          <Display
            generalInformation={generalInformation}
            educationalExperience={educationalExperience}
            practicalExperience={practicalExperience}
          />
        </div>
      </div>
    );
  }
  
  export default CV;