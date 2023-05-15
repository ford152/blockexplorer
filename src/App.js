import {Alchemy, Network} from 'alchemy-sdk';
import {useEffect, useState} from 'react';
import Header from './components/Header';
import Transactions from './components/Transactions';

import './App.css';

// TODO: do not use API key in client production code
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [timestamp, setTimeStamp] = useState();
  const [transactions, setTxs] = useState();

  function refreshClicked() {
      console.log('refresh!');
      getBlockInfo();
  }

  async function getBlockInfo() {
    const blockData = await alchemy.core.getBlockWithTransactions();
    setBlockNumber(blockData.number);
    setTimeStamp(new Date(blockData.timestamp * 1000).toLocaleString());
    setTxs(blockData.transactions);
  }

  useEffect(() => {
    getBlockInfo();
  }, []);

  return (
    <div className="container"> 
      <Header refreshCallback={refreshClicked} />
      <div className="flex-container ">
        <div className="text-content">Block Number: {blockNumber}</div>
        <div className="text-content">Block Time: {timestamp}</div>
        <div className="text-content">Transaction Count: {transactions ? transactions.length : null}</div>
      </div>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;