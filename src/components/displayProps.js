import React from "react";

class DisplayProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsData: props.propsData
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps is called');
        console.log(nextProps);
        this.setState({
            propsData: nextProps.propsData
        })
    }
    render() {
        return (
            <>
                <h6>{this.state.propsData}</h6>
            </>
        );
    }
}
export default DisplayProps;
