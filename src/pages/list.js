/**
 * Created by Zephyr on 2/6/17.
 */
import React from "react";

class list extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            flights:[]
        };

    }

    componentWillMount(){
        fetch('http://localhost:3000/bfm')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    flights: res.FirstItinerary.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary
                    //flights: res
                });
            });

    }

    render() {
        const {flights} = this.state;
        return (
            <div>
                <main>
                    <table className="table table-bordered text-center">
                        <thead>
                            <th>ID</th>
                            <th>Flight</th>
                            <th>Segment 1 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Flight</th>
                            <th>Segment 2 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Flight</th>
                            <th>Segment 3 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Total Time</th>
                            <th>Flight</th>
                            <th>Segment 4 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Flight</th>
                            <th>Segment 5 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Flight</th>
                            <th>Segment 6 Depart Time</th>
                            <th>Depart Airport</th>
                            <th>Arrival Airport</th>
                            <th>Total Time</th>
                            <th>Total Price</th>
                        </thead>

                        <tbody>
                            {
                                flights.map((PricedItinerary) => {
                                  var FlightSegment = PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption;
                                  console.log(FlightSegment[0]);
                                  return(
                                      <tr key={PricedItinerary.SequenceNumber}>
                                          <td>{PricedItinerary.SequenceNumber}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 0 ? FlightSegment[0].FlightSegment[0].OperatingAirline.Code + ' / '+ FlightSegment[0].FlightSegment[0].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 0 ? FlightSegment[0].FlightSegment[0].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 0 ? FlightSegment[0].FlightSegment[0].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 0 ? FlightSegment[0].FlightSegment[0].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 1 ? FlightSegment[0].FlightSegment[1].OperatingAirline.Code + ' / '+ FlightSegment[0].FlightSegment[1].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 1 ? FlightSegment[0].FlightSegment[1].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 1 ? FlightSegment[0].FlightSegment[1].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 1 ? FlightSegment[0].FlightSegment[1].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 2 ? FlightSegment[0].FlightSegment[2].OperatingAirline.Code + ' / '+ FlightSegment[0].FlightSegment[2].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 2 ? FlightSegment[0].FlightSegment[2].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 2 ? FlightSegment[0].FlightSegment[2].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment[0].FlightSegment.length > 2 ? FlightSegment[0].FlightSegment[2].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 0 ? FlightSegment[0].ElapsedTime : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 0 ? FlightSegment[1].FlightSegment[0].OperatingAirline.Code + ' / '+ FlightSegment[1].FlightSegment[0].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 0 ? FlightSegment[1].FlightSegment[0].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 0 ? FlightSegment[1].FlightSegment[0].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 0 ? FlightSegment[1].FlightSegment[0].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 1 ? FlightSegment[1].FlightSegment[1].OperatingAirline.Code + ' / '+ FlightSegment[1].FlightSegment[1].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 1 ? FlightSegment[1].FlightSegment[1].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 1 ? FlightSegment[1].FlightSegment[1].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 1 ? FlightSegment[1].FlightSegment[1].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 2 ? FlightSegment[1].FlightSegment[2].OperatingAirline.Code + ' / '+ FlightSegment[1].FlightSegment[2].OperatingAirline.FlightNumber : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 2 ? FlightSegment[1].FlightSegment[2].DepartureDateTime : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 2 ? FlightSegment[1].FlightSegment[2].DepartureAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 && FlightSegment[1].FlightSegment.length > 2 ? FlightSegment[1].FlightSegment[2].ArrivalAirport.LocationCode : 'null'}</td>
                                          <td>{FlightSegment.length > 1 ? FlightSegment[1].ElapsedTime : 'null'}</td>
                                          <td>{PricedItinerary.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.Amount + ' + ' + PricedItinerary.AirItineraryPricingInfo[0].ItinTotalFare.TotalFare.CurrencyCode}</td>

                                      </tr>
                                  )
                                })
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        );
    }
}

export default list;
