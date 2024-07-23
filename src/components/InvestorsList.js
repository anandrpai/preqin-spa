import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const InvestorsList = () => {
  const [investors, setInvestors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/investors');
        setInvestors(response.data);
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };
    fetchInvestors();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/investors/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FirmId</th>
            <th>FirmName</th>
            <th>Type</th>
            <th>DateAdded</th>
            <th>Address</th>	   
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr key={investor.firm_id} onClick={() => handleRowClick(investor.firm_id)}>
              <td>{investor.firm_id}</td>
              <td>{investor.firm_name}</td>
              <td>{investor.firm_type}</td>
              <td>{investor.date_added}</td>
              <td>{investor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorsList;
