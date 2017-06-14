// @flow

import React from 'react'

const items = [
  {value: "201516", label: "2015/16 Season"},
  {value: "201617", label: "2016/17 Season"},
]

type Props = {
  handleClick: Function,
}

const Select = ({ handleClick }: Props) =>
<select className="form-control" onChange={handleClick}>
  {items.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
</select>

export default Select
