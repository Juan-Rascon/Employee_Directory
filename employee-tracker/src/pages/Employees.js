import React from "react";
import Container from "../components/Container";
import EmployeeList from "../directory";
import Form from "../components/Form";



function Employees() {
  const directory = EmployeeList;
  return (
    <Container>
        <Form emp_directory = {directory}></Form>
    </Container>
  );
}

export default Employees;
