import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

import * as API from '../api/API';
const states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];
class BlankProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        firstname:'',
        lastname:'',
        phoneNumber:'',
        streetAddress:'',
          email:'',
          Userstate:'',
        city:'',
        zipcode:'',
          results:[]
    }};

    submitDetails = () => {
        API.UpdateUserInfo(this.state)
            .then((status) => {
                if (status === 204) {
                    alert("profile updated");
                }

            });
      console.log("Profile Details: " + this.state);
  };



  componentWillMount(){
alert("in blank profile");
 API.getUserProfile()
     .then((results) => {
     console.log(results[0].firstname);
         this.setState({
             firstname:results[0].firstname,
             lastname:results[0].lastname,
             phoneNumber:results[0].phoneNumber,
             streetAddress:results[0].Address,
             email:results[0].username,
             Userstate:results[0].State,
             city:results[0].City,
             zipcode:results[0].zipcode
         })
     });
  }
    render() {
        return (
            <div className="container-fluid p-3" style={{backgroundColor:'#E9ECEF',height: '100vh'}}>

            <div className="justify-content-start Text-big Text-bold"><h4>Please Fill your Details: </h4>
            </div> <hr/>
            <form>
              <div className="form-group">
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="First Name"
                value={this.state.firstname}
                onChange={(event) => {this.setState({firstname: event.target.value});}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Last Name"
                value={this.state.lastname}
                onChange={(event) => {this.setState({lastname: event.target.value});}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email"
                value={this.state.email}
                onChange={(event) => {this.setState({email: event.target.value});}}/>
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={(event) => {this.setState({phoneNumber: event.target.value});}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Street Address"
                value={this.state.streetAddress}
                onChange={(event) => {this.setState({streetAddress: event.target.value});}}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="City"
                value={this.state.city}
                onChange={(event) => {this.setState({city: event.target.value});}}/>
              </div>
              <div className="form-group">
              <AutoComplete
                  floatingLabelText={"State: "+this.state.Userstate}
                  filter={AutoComplete.fuzzyFilter}
                  value={this.state.Userstate}
                  dataSource={states}
                  fullWidth={true}
                  maxSearchResults={10}
                />
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={(event) => {this.setState({zipcode: event.target.value});}}/>
              </div>
              <div className="form-group">
              <RaisedButton
                label="Make Payment"
                backgroundColor={'#FF690F'}
                label={<span style={{color:'#FFFFFF'}} >Submit Details</span>}
                onClick={this.submitDetails}
                />
              </div>
            </form>

            </div>
        );
    }
}

export default BlankProfile;
