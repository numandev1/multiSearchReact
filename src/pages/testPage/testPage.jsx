import React, { Component } from 'react';
import logo from './logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

const Background = {
  background: '#004272'
}

class InformesHeader extends Component {
    render() {
        return (
            <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75" style={{height:30,width:30}} />
            </header>
        )
    }
}

export class InformesBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          updatedItems: [],
          updatedItems: [],
          filterTitle: "",
          filterYear: "",
          filterReso: "",
          activePage: [],
          showItems: 10
        };      
        
        this.handlePageChange=this.handlePageChange.bind(this);
        
    }
    
    loadData = () => {
            this.setState({
            isLoaded: true,
            items: [
              {
                titulo: "titulo1",
                ano: "ano1",
                reso: "reso1",
              },
              {
                titulo: "titulo2",
                ano: "ano2",
                reso: "reso2",
              },
            ],
            updatedItems: [],
            filterTitle: "",
            filterYear: "",
            filterReso: "",
            });
            console.log(this.state);
      }
    
    componentDidMount = (items) => {
        this.loadData();
        var total_items = this.state.total_items;
        console.log(total_items);
        this.setState({total_pages: total_items / 10});
    }
    
    handlePageChange = (pageNumber) => {
        const {current_page} = this.state;
        console.log(pageNumber);
        this.setState({current_page: pageNumber});
        
    }
    
    
  handleSearchFilter = (event, key) => {
    const inputValue = event.target.value;
    this.setState({ [key]: inputValue }, () => {
      this.filterList();
    });
  };

    searchFilter = () => {
        return <form>
        <input
          name="filterTitle"
          type="text"
          value={this.filterTitle}
          onChange={(e) => this.handleSearchFilter(e, "filterTitle")}
        />
        <input
          name="filterYear"
          type="text"
          value={this.filterYear}
          onChange={(e) => this.handleSearchFilter(e, "filterYear")}
        />
        <input
          name="filterReso"
          type="text"
          value={this.filterReso}
          onChange={(e) => this.handleSearchFilter(e, "filterReso")}
        />
      </form>
    }
    
    filterList = () => {
        // const {items, updatedItems, filterTitle, filterYear, filterReso} = this.state;
        const itemsUpdate = this.state.items.filter(item => {
            var filterTitle = item.titulo.toLowerCase().indexOf(this.state.filterTitle.toLowerCase()) > -1;
            var filterYear = item.ano.toLowerCase().indexOf(this.state.filterYear.toLowerCase()) > -1;
            var filterReso = item.reso.toLowerCase().indexOf(this.state.filterReso.toLowerCase()) > -1;
            return filterTitle && filterYear && filterReso;
        })
        this.setState({ updatedItems: itemsUpdate }, () => {
          console.log(this.state.updatedItems);
        });
    }
    
    itemData = () => {
        return <Pagination activePage={this.state.current_page} itemsCountPerPage={this.state.itemsPerPage} pageRangeDisplayed={this.state.total_pages} totalItemsCount={this.state.total_items} pageRangeDisplayed={6} onChange={this.handlePageChange} />
    }
    
    itemList = () => {
              const { error, isLoaded, keys, total, current_page, per_page } = this.state;
              var { items, filterList, updatedItems } = this.state;
              //console.log(items);
              //console.log(filterTitle);
              //console.log(total);
              //this.fetchPages();
              return (
                    items = this.state.updatedItems.slice(0, this.state.showItems).map(item=>{
                    return (
                            <li key={item.titulo} className="list-group-item border-0">
                                <div className="wrapper">
                                    <div className="informes">
                                        <Link to={{pathname: `/informe/${item.nid}`, state: { params: {id: `${item.id}`, nid: `${item.nid}`} }}} className="App-link">
                                            <p className="text-left text-primary" id={item.id}>{item.titulo}</p>
                                        </Link>
                                    </div>
                                </div>
                            </li>                           
                    )
                }   
            )
        )
    }
    
    render(){
        return(
            <Container>
                <ul className="p-0">
                    {this.searchFilter()}
                    {this.itemList()}
                    {this.itemData()}
                </ul>
            </Container>
        )
    } 
}

export class Informes extends Component {

    render() {
      return (
        <React.Fragment>
          <InformesHeader />
          <div className="App">
              <InformesBody />           
          </div>
        </React.Fragment>
      );
    }
    
}

export default Informes;
