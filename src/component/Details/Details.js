
"use client"
import { useState } from 'react';
import styles from './Detail.module.css'

  const Details = () => {
    const [tableData, setTableData] = useState([
      { srNo: 1, itemCode: 'ABC123', itemName: 'Item A', qty: 10, rate: 20.00, amount: 200.00 },
      { srNo: 2, itemCode: 'XYZ456', itemName: 'Item B', qty: 5, rate: 15.00, amount: 75.00 },
    ]);
  
    const handleInputChange = (event, index, column) => {
      const updatedData = [...tableData];
      updatedData[index][column] = event.target.value;
      setTableData(updatedData);
      console.log(tableData)
    };
    const addTableRow = () => {
      const newRow = {
        srNo: tableData.length + 1,
        itemCode: 'NewCode',
        itemName: 'NewItem',
        qty: 0,
        rate: 0.00,
        amount: 0.00,
      };
  
      setTableData([...tableData, newRow]);
    };
    
  
    return (
      <div>
         <h2 style={{backgroundColor:'orange', textAlign:'center', padding:'10px'}}>Detail</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead style={{ text:'black', backgroundColor:'gray'}}>
            <tr>
              <th className={styles.tableHeaderStyle}>Sr. No</th>
              <th className={styles.tableHeaderStyle}>Item Code</th>
              <th className={styles.tableHeaderStyle}>Item Name</th>
              <th className={styles.tableHeaderStyle}>Qty</th>
              <th className={styles.tableHeaderStyle}>Rate</th>
              <th className={styles.tableHeaderStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
         
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className={styles.tableCellStyle}>
                  <input
                    type="number"
                    value={row.srNo}
                    onChange={(e) => handleInputChange(e, index, 'srNo')}
                  />
                </td>
                <td className={styles.tableCellStyle}>
                  <input
                    type="text"
                    value={row.itemCode}
                    onChange={(e) => handleInputChange(e, index, 'itemCode')}
                  />
                </td>
                <td className={styles.tableCellStyle}>
                  <input
                    type="text"
                    value={row.itemName}
                    onChange={(e) => handleInputChange(e, index, 'itemName')}
                  />
                </td>
                <td className={styles.tableCellStyle}>
                  <input
                    type="number"
                    value={row.qty}
                    onChange={(e) => handleInputChange(e, index, 'qty')}
                  />
                </td>
                <td className={styles.tableCellStyle}>
                  <input
                    type="number"
                    value={row.rate}
                    onChange={(e) => handleInputChange(e, index, 'rate')}
                  />
                </td>
                <td className={styles.tableCellStyle}>
                  <input
                    type="number"
                    value={row.amount}
                    onChange={(e) => handleInputChange(e, index, 'amount')}
                  />
                </td>
                 
              </tr>
            ))}
          </tbody>
        </table>
        <button  onClick={addTableRow}>Insert</button>
      </div>
    );
  };

export default Details;

  