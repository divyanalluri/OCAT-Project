import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';
import './assessment.scss';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  const fetchAssessments = async () => {
    setAssessments(await AssessmentService.getList());
  };

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    fetchAssessments();
  }, []);

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
    ], []
  );

  const onDelete = async (id) => {
    await AssessmentService.delete({ id });
    fetchAssessments();
  };

  const tableInstance = useTable({
    columns,
    data: assessments,
  });
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } = tableInstance;
  return (
    <div className="assessment assessment-list">
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
                <td>
                  <Button onClick={() => onDelete(row.values.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
