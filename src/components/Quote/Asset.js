import React from 'react';
import Stats from './Stats.js';
import StockChart from './Chart.js';
import { Grid } from 'semantic-ui-react'
import { TypeChooser } from "react-stockcharts/lib/helper";

const Asset = (props) => {
  //console.log('in asset', props);
  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column width={12}>
          <h2>{props.quote.symbol} YTD Chart:</h2>
          <TypeChooser>
            {type => <StockChart type={type} data={props.chart} />}
          </TypeChooser>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12}>
          <h2>{props.quote.symbol} Summary:</h2>
          <Stats {...props.quote}/>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default Asset;
