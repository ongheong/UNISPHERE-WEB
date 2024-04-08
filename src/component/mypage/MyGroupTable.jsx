import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const GroupTable = styled.table`
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 600px;
    text-align: center;
    th {
        border: 1px solid lightgray;
        border-top: 0;
        border-bottom: 0;
        border-left: 0;
        color: #6d6d6d;
    }
    th:last-child {
      border-right: 0;
    }
    td {
        border: 1px solid lightgray;
        border-left: 0;
        border-bottom: 0;
    }
    td:last-child {
      border-right: 0;
    }
    tr td:nth-child(1), tr td:nth-child(2){
      width: 120px;
    }
    tr td:nth-child(3), tr td:nth-child(4){
      width: 80px;
    }
`;

const MoveButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5%;
    background: ${props => props.color};
    border: 0;
    font-size: 12px;
    font-family: 'Godo', sans-serif;
    color: white;

    &:active, &:hover {
        cursor: pointer;
        background: #ebebeb;
        color: black;
    }
    /* &:hover {
        cursor: pointer;
        background: #ebebeb;
    } */
`;

function MyGroupTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <GroupTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()}>
                  {cell.render("Cell")}
                  {(index === 2) && (<MoveButton color="green">단체홈피로 이동</MoveButton>)}
                  {(index === 3) && (<MoveButton color="red">단체탈퇴</MoveButton>)}
                  </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </GroupTable>
  );
}

export default MyGroupTable;


  