import React from "react";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th scope='col'>Home starter hosting</th>
            <th scope='col'>Premium business hosting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Disk space</th>
            <td>250mb</td>
            <td>1gb</td>
          </tr>
          <tr>
            <th scope='row'>Bandwidth</th>
            <td>5gb per month</td>
            <td>50gb per month</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td colspan='2'>Sign up now and save 10%!</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
