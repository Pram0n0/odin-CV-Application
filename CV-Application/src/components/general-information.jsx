import { useState } from 'react';

const GeneralInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // const [generalInformation, setGeneralInformation] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  // })

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default GeneralInformation;