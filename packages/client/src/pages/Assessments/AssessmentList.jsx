import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';
import './assessment.scss';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  // eslint-disable-next-line no-console
  console.log(`assessments list`, assessments);
  const columns = React.useMemo(
    () => [
      {
        Headers: `Id`,
        accessor: `id`,
      },
      {
        Headers: `Instrument Type`,
        accessor: `instrumentType`,
      },
      {
        Headers: `Score`,
        accessor: `score`,
      },
      {
        Headers: `Risk Level`,
        accessor: `riskLevel`,
      },
      {
        Headers: `Cat Name`,
        accessor: `catName`,
      },
      {
        Headers: `Cat Date of Birth`,
        accessor: `catDateOfBirth`,
      },
      {
        Headers: `Created At`,
        accessor: `createdAt`,
      },
      {
        Headers: `Updated At`,
        accessor: `updatedAt`,
      },
      {
        Headers: `Deleted At`,
        accessor: `deletedAt`,
      },
    ], []
  );

  const tableInstance = useTable({
    columns,
    data: assessments,
  });
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } = tableInstance;
  return (
    <div className="assessment-list">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Headers`)}</th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
