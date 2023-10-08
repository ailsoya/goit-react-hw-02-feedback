import { Component } from 'react'

export class App extends Component {
  static defaultProps  = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <li><button type="button" onClick={this.goodClick}>Good</button></li>
            <li><button type="button">Neutral</button></li>
            <li><button type="button">Bad</button></li>
          </ul>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
      </>
    );
  }
}
