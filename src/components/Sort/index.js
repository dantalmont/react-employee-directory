import React, { Component } from  "react";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";
import directoryCatalog from "./directoryCatalog.json";
import "./style.css";

class Sort extends Component {
    
    state = {
        searchValue: "",
        directoryCatalog : [...directoryCatalog]
    }

    renderEmployee = (searchResults) => {
        // const { searchBoolean } = this.state;
        return searchResults.map( (employee, index)=>
        <Card
            key ={index}
            name = {employee.name}
            title = {employee.title}
            phone = {employee.phone}
            email = {employee.email}
            eDuration = {employee.eDuration}
        />
        );
    }

    onFilter = (event) =>{
        
        this.setState({
            searchValue: event.target.value
        });
        
    }

    onSort = (sortType) =>{
        
        this.setState({sortType});

    }

    render() {

        let {directoryCatalog, sortType, searchValue } = this.state;

        let searchBoolean = directoryCatalog.filter(employee => {
            return employee.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
        }); 

        searchBoolean.sort( (a,b) =>{

            const isReversed = (sortType === "asc") ? 1 : -1;
            return isReversed * a.name.localeCompare(b.name)
        });

        return (  
           <Row>
                <input className="search" type="text" placeholder="Search" onChange={(event)=>this.onFilter(event)}></input>
                <button className="button" onClick={()=>this.onSort("asc")}>Sort Names Ascending</button>
                <button className="button" onClick={()=>this.onSort("desc")}>Sort Names Descending</button>
                <Container>    
                    <Row>
                        {this.renderEmployee(searchBoolean)}
                    </Row>
                </Container>
           </Row>
        );
    }
}

export default Sort;

