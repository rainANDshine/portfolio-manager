import React from 'react';
import Positions from '../components/Portfolio/Positions';
import Stats from '../components/Portfolio/Stats';
import UUID from 'uuid';
import { Grid, Table } from 'semantic-ui-react'

class Portfolio extends React.Component {
  render() {
    //console.log(this.props.portfolio);

    let list = [];
    let betaList = [];

    //if (Object.keys(this.props.portfolio) !== []) {
      for(const quote in this.props.portfolio) {
        list.push(<Positions key={UUID()} {...this.props.portfolio[quote]} search={this.props.search} type={this.props.type}/>)
      }
    //}

    for(const quote in this.props.portfolio) {
      betaList.push({symbol: quote, price: this.props.portfolio[quote].price, beta: this.props.portfolio[quote].stats.beta, position_type: this.props.portfolio[quote].position_type})
    }

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column width={12}>
            <h3>Adjust Your Long / Short Positions:</h3>
            <Table color='blue'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Long or Short?</Table.HeaderCell>
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Beta</Table.HeaderCell>
                  <Table.HeaderCell>Short Interest</Table.HeaderCell>
                  <Table.HeaderCell>Short Date</Table.HeaderCell>
                  <Table.HeaderCell>Forward Dividend & Yield</Table.HeaderCell>
                  <Table.HeaderCell>Ex-Dividend Date</Table.HeaderCell>
                  <Table.HeaderCell>EPS (TTM)</Table.HeaderCell>
                  <Table.HeaderCell>5 Day % Change</Table.HeaderCell>
                  <Table.HeaderCell>30 Day % Change</Table.HeaderCell>
                  <Table.HeaderCell>1 Month % Change</Table.HeaderCell>
                  <Table.HeaderCell>3 Month % Change</Table.HeaderCell>
                  <Table.HeaderCell>6 Month % Change</Table.HeaderCell>
                  <Table.HeaderCell>YTD % Change</Table.HeaderCell>
                  <Table.HeaderCell>1 Year % Change</Table.HeaderCell>
                  <Table.HeaderCell>2 Year % Change</Table.HeaderCell>
                  <Table.HeaderCell>5 Year % Change</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {list}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={12}>
            <Stats betas={betaList}/>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default Portfolio;
