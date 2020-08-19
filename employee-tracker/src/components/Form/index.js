import React, { Component } from "react";
import "./style.css";
import Table from "../Table";

class Form extends Component {
  // Setting the component's initial state

  state = {
    searchTerm: "",
    data: this.props.emp_directory,
    sortByDepartment: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let search = event.target.value;

    const filteredEmp = this.props.emp_directory.filter(item => item.firstName.toLowerCase().includes(search.toLowerCase()))
    this.setState({
      searchTerm: search
    });

    this.setState({
      data: filteredEmp
    })

  };

  handleSort = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    this.setState( prevState => ({
      sortByDepartment: !prevState.sortByDepartment
    }));
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search by first name"
          />
          <button onClick={this.handleSort}>Sort By Department</button>
        </form>
        <Table emp_directory = {this.state.data} sorted = {this.state.sortByDepartment}></Table>
      </div>
    );
  }
}

export default Form;
