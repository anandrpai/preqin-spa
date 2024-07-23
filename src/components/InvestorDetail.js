import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const InvestorDetail = () => {
  const { id } = useParams();
  const [investor, setInvestor] = useState(null);
  const [assetClass, setAssetClass] = useState('');
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/investors');
        const investorList = response.data;
        const selectedInvestor = investorList.find((inv) => inv.firm_id === parseInt(id));
        setInvestor(selectedInvestor);
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };
    fetchInvestors();
  }, [id]);

  const handleAssetClassChange = async (event) => {
    const selectedAssetClass = event.target.value;
    setAssetClass(selectedAssetClass);
    if (selectedAssetClass) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/investor/commitment/${selectedAssetClass}/${id}`
        );
        setCommitments(response.data);
      } catch (error) {
        console.error('Error fetching commitment data:', error);
      }
    } else {
      setCommitments([]);
    }
  };

  if (!investor) {
    return <div>Loading investor details...</div>;
  }

  return (
    <div className="investor-details">
      <h2>Investor Details</h2>
      <p><strong>FirmName:</strong> {investor.firm_name}</p>
      <p><strong>Type:</strong> {investor.firm_type}</p>
      <p><strong>DateAdded:</strong> {investor.date_added}</p>
      <p><strong>Address:</strong> {investor.address}</p>

      <h3>Select Asset Class</h3>
      <select value={assetClass} onChange={handleAssetClassChange}>
        <option value="">Select an asset class</option>
        <option value="pe">Private Equity</option>
        <option value="pd">Private Debt</option>
        <option value="re">Real Estate</option>
        <option value="inf">Infrastructure</option>
        <option value="nr">Natural Resources</option>
        <option value="hf">Hedge Funds</option>
      </select>

      {commitments.length > 0 && (
        <div>
          <h3>Commitment Information</h3>
          <ul>
            {commitments.map((commitment, index) => (
              <li key={index}>
                Commitment Amount: {commitment.amount}, Currency: {commitment.currency}, Asset Class: {commitment.asset_class}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InvestorDetail;
