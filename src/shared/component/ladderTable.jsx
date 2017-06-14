// @flow

import React from 'react'
import ReactTable from 'react-table'

type Props = {
  table: array,
}

const columns = [
  {
    Header: 'Pos',
    accessor: 'pos'
  },
  {
    Header: 'Club',
    accessor: 'club',
    minWidth: 280
  },
  {
    Header: 'P',
    accessor: 'P'
  },
  {
    Header: 'W',
    accessor: 'W'
  },
  {
    Header: 'D',
    accessor: 'D'
  },
  {
    Header: 'L',
    accessor: 'L'
  },
  {
    Header: 'GF',
    accessor: 'GF'
  },
  {
    Header: 'GA',
    accessor: 'GA'
  },
  {
    Header: 'GD',
    accessor: 'GD'
  },
  {
    Header: 'Pts',
    accessor: 'Pts'
  },
]

const LadderTable = ({ table }: Props) =>
<ReactTable
  table={table}
  columns={columns}
  defaultPageSize={10}
  showPagination={false}
/>

export default LadderTable
