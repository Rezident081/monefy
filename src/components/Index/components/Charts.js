import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';

export default class Charts extends PureComponent {
  static propTypes = {
    data: PropTypes.array
  }

  state = {
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  }

  render() {
    const {data} = this.props;
    // const data = [{name : 'q', value : 22}, {name : '2', value : 33}];

    return (
      <div className="chart-container">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={79}
              outerRadius={150}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.state.colors[index % this.state.colors.length]} />)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
