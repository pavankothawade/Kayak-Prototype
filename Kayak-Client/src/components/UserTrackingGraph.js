import React, {Component} from 'react';
import * as API from '../api/API';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
class UserTrackingGraph extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username:'o@o.com'
        };
    }

    componentDidMount(){
        API.UserTrackingGraph(this.state.username)
            .then((data) => {
                this.setState({
                    data: data
                });



                console.log(data)
            });
        // this.setState({data:this.props.PageStats});
        // console.log(this.state.data)
    }


    render () {
        return (
            <div>

                <LineChart width={1000} height={200} data={this.state.data} syncId="anyId"
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="Pagename"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line type='monotone' dataKey='seconds' stroke='#8884d8' fill='#8884d8' />
                </LineChart>


            </div>
        );
    }
}

export default UserTrackingGraph;