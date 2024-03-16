import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Fetch data from the JSON file
    fetch('../../Data/empschedule')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Scheduled</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
