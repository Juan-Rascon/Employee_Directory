import React from 'react';


export default class Table extends React.Component {
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
   
    getKeys = () => {
      try {
        return Object.getOwnPropertyNames(this.props.emp_directory[0]);
      }
      catch {
        return 
      }
    }
    
    getHeader = () => {
      let keys = this.getKeys();
      try {
        return keys.map((key, index)=>{
          return <th key={key}>{key.toUpperCase()}</th>
      })
      }catch {
        return
      }
    }
    sortData = (data) => {
      return data.sort((a,b) => (a.department>b.department) ?1 : -1)
    }
    getRowsData = () => {
           try{
          let items = this.props.sorted ? this.sortData(this.props.emp_directory) : this.props.emp_directory;
          let keys = this.getKeys();
          return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })}
        catch {
          return
      }
      
    }
    
    render() {
        return (
            <div>
            <table className = "table table-striped table-bordered">
              <caption>Employee Directory</caption>
            <thead className = "thead-dark">
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          )
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    if (typeof props.data[key] === "object"){
      let objStr = "";
      objStr = JSON.stringify(props.data[key],null,2)
      return <td key={props.data[key]}>{objStr}</td>
    }else{
      return <td key={props.data[key]}>{props.data[key]}</td>
    }
  })
}