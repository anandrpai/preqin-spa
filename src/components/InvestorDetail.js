import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InvestorDetail = () => {
  const { id } = useParams();
  const [assetClass, setAssetClass] = useState('');
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    if (assetClass) {
      const fetchCommitments = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/investor/commitment/${assetClass}/${id}`);
        setCommitments(response.data);
      };
      fetchCommitments();
    }
  }, [assetClass, id]);

  return (
    <div>
      <h1>Investor Details for ID: {id}</h1>
      <select onChange={(e) => setAssetClass(e.target.value)} value={assetClass}>
        <option value="">Select Asset Class</option>
        <option value="pe">Private Equity</option>
        <option value="pd">Private Debt</option>
        <option value="re">Real Estate</option>
        <option value="inf">Infrastructure</option>
        <option value="nr">Natural Resources</option>
        <option value="hf">Hedge Funds</option>
      </select>
      {commitments.length > 0 && (
        <ul>
          {commitments.map((commitment, index) => (
            <li key={index}>Commitment Amount :{commitment.amount} , Currency : {commitment.currency} , Asset Class : {commitment.asset_class}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvestorDetail;
