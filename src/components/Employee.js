import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
    console.log('constructor called');
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount is called');
  }
  
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(data => {
        this.setState({ userData: data.data })
      }
      );
    console.log('componentDidMount is called');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate is called');
    return true;
  }
  UNSAFE_componentWillUpdate() {
    console.log(
      "componentWillUpdate called. This method is set to be deprecated in React 16.3"
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called.");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called.");
  }
  render() {
    return (
      <>
        <br />
        <div className='container'>
          <table className='table table-bordered' style={{ width: "100%", border: "1px solid #CCC" }}>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Employee Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map((item, i) => (
                <tr key={i}>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_salary}</td>
                  <td>{item.employee_age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Employee;
