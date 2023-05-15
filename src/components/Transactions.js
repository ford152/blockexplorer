import {Utils} from 'alchemy-sdk';
import './Transactions.css';

function Transactions({transactions}) {

  if(!transactions) {
    return <div>No data yet</div>;
  }

  const tx = transactions[0];
  console.log(Utils.formatEther(tx.value).toString().slice(0,5));

  return (
    <div className="main"> 
     <div className="grid-body">
        <div className="grid-header">
            <label className="col1">Block Hash</label>
            <label className="col2"># Confirmations</label>
            <label className="col3">Value (ETH)</label>
        </div>
        { transactions.map(function(tx, i) {
            return (
                <div className="grid-content">
                    <label className="col1">{tx.blockHash}</label>
                    <label className="col2">{tx.confirmations}</label>
                    <label className="col3">{Utils.formatEther(tx.value).toString().slice(0,5)}</label>
                </div>
            )
            })
        }
      </div>
    </div>
  );
}

export default Transactions;