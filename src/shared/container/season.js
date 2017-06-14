// @flow

import { connect } from 'react-redux'

import { setSeason } from '../action/season'
import Select from '../component/select'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  handleClick: (event) => {
    dispatch(setSeason(event.target.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Select)
