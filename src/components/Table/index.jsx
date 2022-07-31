import * as React from 'react';

const Table = (data) => {
  return(
    <table className='table'>
      <tbody>
        <tr>
          <td>Birthdate:</td>
          <td>{data.data.nacimiento}</td>
        </tr>
        <tr>
          <td>Nickname:</td>
          <td>{data.data.apodo}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{data.data.estado}</td>
        </tr>
        <tr>
          <td>Actor:</td>
          <td>{data.data.actor}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
