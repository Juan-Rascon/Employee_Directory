import React from "react";
import Container from "../components/Container";
import EmployeeList from "../directory";
import Table from "../components/Table";


function Employees() {
  const directory = EmployeeList;
  return (
    <Container>
      <Table emp_directory = {directory}></Table>
    </Container>
  );
}

export default Employees;
