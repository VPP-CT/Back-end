import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Hi there!</h1>
                </header>
                <main>
                    <div>Click the link below to check data in the database</div>
                    <Link to="/list">Flights List</Link>
                </main>
            </div>
        );
    }
}

export default Home;