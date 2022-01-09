import React from "react";
import {Component} from "react";
import Search from "./Search";
import Todo from "./Todo";

class Sidebar extends Component {

    render() {
        return (
            <aside id="App-sidebar">
                <Todo></Todo>
                <Search></Search>
            </aside>
        );
    }

}

export default Sidebar;