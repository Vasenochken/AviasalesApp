import React from 'react'
import { connect } from 'react-redux'
import classes from './tabs-sort.module.scss'
import * as actions from '../../redux/actions/actionCreators'

const TabsSort = ({ onSortCheap, onSortFast, onSortOptimal, active }) => {
  return (
    <div className={classes.tabs}>
      <button
        onClick={() => onSortCheap()}
        className={`${classes.tabs__tab_cheap} ${
          active === 'cheap' ? classes.tabs__tab_cheap_active : ''
        }`}
      >
        самый дешевый
      </button>
      <button
        onClick={() => onSortFast()}
        className={`${classes.tabs__tab_fast} ${
          active === 'fast' ? classes.tabs__tab_fast_active : ''
        }`}
      >
        самый быстрый
      </button>
      <button
        onClick={() => onSortOptimal()}
        className={`${classes.tabs__tab_optimal} ${
          active === 'optimal' ? classes.tabs__tab_optimal_active : ''
        }`}
      >
        оптимальный
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { active: state.reducerSortTab.sort }
}

export default connect(mapStateToProps, actions)(TabsSort)
