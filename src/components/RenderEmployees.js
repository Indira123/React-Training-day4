import React from "react";
import Employee from "./Employee";
import ReactDOM from "react-dom";
import DisplayProps from './displayProps';
class RenderEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsData: 'Vijaya'
        }
    }
    mountEmployeeComp(type) {
        if (type === "mount") {
            ReactDOM.render(<Employee />, document.getElementById("employee"));
        } else if (type === "unmount") {
            ReactDOM.unmountComponentAtNode(document.getElementById("employee"));
        } else {
            this.setState({
                propsData: 'Smita'
            })
        }
    }
    render() {
        return (
            <>
                <div className="App">
                    <h2>Lifecycle Example</h2>
                    <button className='btn btn-primary' onClick={() => this.mountEmployeeComp("mount")}>
                        Mount Employee component
      </button>
                    <button className='btn btn-primary' onClick={() => this.mountEmployeeComp("unmount")}>
                        Unmount Employee component
      </button>
                    <button className='btn btn-primary' onClick={() => this.mountEmployeeComp("props")}>
                        Change Props
      </button>
                    <DisplayProps propsData={this.state.propsData} />
                    <div id="employee"></div>
                    <hr />
                </div>
            </>
        );
    }
}
export default RenderEmployee;
