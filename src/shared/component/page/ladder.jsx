// @flow

import React from 'react'
import Helmet from 'react-helmet'
import ReactTable from 'react-table'

import { APP_NAME } from '../../config'

const data = [
 {
   pos: 1,
   club: 'Sydney FC',
   "P": 27,
   "W": 20,
   "D": 6,
   "L": 1,
   "GF": 55,
   "GA": 12,
   "GD": 43,
   "Pts": 66
 },
 {
   pos: 2,
   club: 'Melbourne Victory',
   "P": 27,
   "W": 15,
   "D": 4,
   "L": 8,
   "GF": 49,
   "GA": 31,
   "GD": 18,
   "Pts": 49
 },
 {
   pos: 3,
   club: 'Brisbane Roar FC',
   "P": 27,
   "W": 11,
   "D": 9,
   "L": 7,
   "GF": 43,
   "GA": 37,
   "GD": 6,
   "Pts": 42
 },
 {
   pos: 4,
   club: 'Melbourne City FC',
   "P": 27,
   "W": 11,
   "D": 6,
   "L": 10,
   "GF": 49,
   "GA": 44,
   "GD": 5,
   "Pts": 39
 },
 {
   pos: 5,
   club: 'Perth Glory',
   "P": 27,
   "W": 10,
   "D": 9,
   "L": 8,
   "GF": 53,
   "GA": 53,
   "GD": 0,
   "Pts": 39
 },
 {
   pos: 6,
   club: 'Western Sydney Wanderers FC',
   "P": 27,
   "W": 8,
   "D": 12,
   "L": 7,
   "GF": 35,
   "GA": 35,
   "GD": 0,
   "Pts": 36
 },
 {
   pos: 7,
   club: 'Wellington Phoenix',
   "P": 27,
   "W": 8,
   "D": 6,
   "L": 13,
   "GF": 41,
   "GA": 46,
   "GD": -5,
   "Pts": 30
 },
 {
   pos: 8,
   club: 'Central Coast Mariners',
   "P": 27,
   "W": 6,
   "D": 5,
   "L": 16,
   "GF": 31,
   "GA": 52,
   "GD": -21,
   "Pts": 23
 },
 {
   pos: 9,
   club: 'Adelaide United',
   "P": 27,
   "W": 5,
   "D": 8,
   "L": 14,
   "GF": 25,
   "GA": 46,
   "GD": -21,
   "Pts": 23
 },
 {
   pos: 10,
   club: 'Newcastle Jets',
   "P": 27,
   "W": 5,
   "D": 7,
   "L": 15,
   "GF": 28,
   "GA": 53,
   "GD": -25,
   "Pts": 22
 }
]

const columns = [
  {
    Header: 'Pos',
    accessor: 'pos' // String-based value accessors!
  },
  {
    Header: 'Club',
    accessor: 'club', // String-based value accessors!
    minWidth: 280
  },
  {
    Header: 'P',
    accessor: 'P' // String-based value accessors!
  },
  {
    Header: 'W',
    accessor: 'W' // String-based value accessors!
  },
  {
    Header: 'D',
    accessor: 'D' // String-based value accessors!
  },
  {
    Header: 'L',
    accessor: 'L' // String-based value accessors!
  },
  {
    Header: 'GF',
    accessor: 'GF' // String-based value accessors!
  },
  {
    Header: 'GA',
    accessor: 'GA' // String-based value accessors!
  },
  {
    Header: 'GD',
    accessor: 'GD' // String-based value accessors!
  },
  {
    Header: 'Pts',
    accessor: 'Pts' // String-based value accessors!
  },
]

const LadderPage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 mb-4">A-league Ladder</h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={10}
            showPagination={false}
          />
      </div>
    </div>
  </div>

export default LadderPage
