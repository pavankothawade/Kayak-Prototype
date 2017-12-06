import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import * as API from '../api/API';

const states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];
class AdminProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        adminID:'',
        firstname:'',
        lastname:'',
        phoneNumber:'',
        streetAddress:'',
        email:'',
        Adminstate:'',
        city:'',
        zipcode:'',
    }};
    submitDetails = () => {
      console.log(" Admin Profile AdminID: " + this.state.adminID);
  };
  componentWillMount(){
    this.setState({
      adminID:33,
      firstname:'John',
      lastname:'Smith',
      phoneNumber:'436734753',
      streetAddress:'San Jose',
      email:'john.smith@gmail.com',
      Adminstate:'California',
      city:'San Jose',
      zipcode:'674344'
    });

          API.getAdminSession()
              .then((data) => {
                  //console.log(data.user);
                  if(data==401)
                  {
                      this.props.history.push("/");
                  }

              });
  }



    render() {
        return (
            <div className="container-fluid p-3" style={{backgroundColor:'#E9ECEF',height: '100vh'}}>

              <div className=" row col-md-6 justify-content-start Text-big Text-bold"><h4>Please Fill your Details: </h4>
              </div> <hr/>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Admin ID" type="number"
                  value={this.state.adminID}
                  onChange={(event) => {this.setState({adminID: event.target.value});}}/>
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
                    floatingLabelText={"State: "+this.state.Adminstate}
                    filter={AutoComplete.fuzzyFilter}
                    value={this.state.Adminstate}
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

export default AdminProfile;
