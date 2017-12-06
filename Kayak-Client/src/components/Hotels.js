import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import HotelSearchNavBar from "./HotelSearchNavBar";
import HotelOptions from "./HotelOptions";
import HotelCardP from "./HotelCardP";
import EmptyResults from "./EmptyResults";
class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelResults :[],
            totalHotelResults:[],
            emptyResults:false,
        }
    };


    HotelPayment=(hotelDetails) =>
    {
        this.props.HotelPayment(hotelDetails);
    };





    priceFilter = (filterPrice) => {
        console.log("filterPrice in Hotels: "+filterPrice);
        // this.setState({filterPrice: filterPrice});
        var priceFilterArray = this.state.totalHotelResults.filter(val => {return val.price < filterPrice;});
        if(priceFilterArray.length <= 0 ){
            console.log("Empty array ");
            this.setState({emptyResults: true});
        }
        else{
            this.setState({emptyResults: false});
        }
        console.log("After Filter in cars: "+priceFilterArray);
        this.setState({hotelResults: priceFilterArray});
    };
    starFilter = (numberOfStars) => {
        console.log("filterPrice in Hotels: "+numberOfStars);
        if(numberOfStars == 0){
            console.log("All results");
            // console.log('------------------');
            // console.log(this.props.hotelList);
            //   console.log('------------------');

            this.setState({hotelResults: this.props.hotelList});


        }
        else{
            var starFilterArray = this.state.totalHotelResults.filter(val => {return val.Ratings == numberOfStars;});
            if(starFilterArray.length <= 0 ){
                console.log("Empty array ");
                this.setState({emptyResults: true});
            }
            else{
                this.setState({emptyResults: false});
            }
            console.log("After Filter in cars: "+starFilterArray);
            this.setState({hotelResults: starFilterArray});
        }
    };
    componentWillMount()
    {
        this.setState({
            hotelResults:this.props.hotelList,
            totalHotelResults:this.props.hotelList,
        });
    }
    render() {
        return (
            <div className="container-fluid " style={{backgroundColor: '#E4E5EA'}}>
                <div className="row">
                    <HotelSearchNavBar/>
                </div>
                <div className="d-flex p-2">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            <div className="pt-2 pr-2"><img src="/images/car-map.png"/></div>
                            <div className="pt-2 pr-2"><HotelOptions priceFilter={this.priceFilter} starFilter={this.starFilter} /></div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="pt-2 pr-2"><img src="/images/hotel-extra1.png"/></div>
                            <div className="pt-2 pr-2">
                                {
                                    this.state.emptyResults
                                        ?<EmptyResults />
                                        :<HotelCardP HotelPayment={this.HotelPayment} hotelResults = {this.state.hotelResults}/>
                                }
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="pt-2 pr-2"><img src="/images/flight-extra1.png"/></div>
                            <div className="pt-3 pr-2"><img src="/images/hotel-extra.png"/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Hotel);
