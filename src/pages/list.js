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
        fetch('http://localhost:3000/flight')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    flights: res
                });
            });

    }

    render() {
        const {flights} = this.state;
        return (
            <div>
                <main>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Airline</th>
                            <th>Number</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                        </thead>

                        <tbody>
                            {
                                flights.map((flight) => {
                                return(
                                    <tr key={flight.id}>
                                        <td>{flight.id}</td>
                                        <td>{flight.airline}</td>
                                        <td>{flight.number}</td>
                                        <td>{flight.from}</td>
                                        <td>{flight.to}</td>
                                        <td>{flight.departure}</td>
                                        <td>{flight.arrival}</td>
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