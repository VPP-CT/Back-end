import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Hello!</h1>
                </header>
                <main>
                    <div>Hello World!</div>
                    <Link to="/list">Flights List</Link>
                </main>
            </div>
        );
    }
}

export default Home;