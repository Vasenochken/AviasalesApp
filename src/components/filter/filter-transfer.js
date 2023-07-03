import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators.js'
import classes from './filter-transfer.module.scss'

const FilterTransfer = ({ toggleFilter, filter }) => {
  const handleChange = (value) => {
    toggleFilter(value)
  }
  return (
    <div className={classes.filter}>
      <p className={classes.filter__title}>количество пересадок</p>
      <ul className={classes.filter__list}>
        {filter.map((item) => (
          <li className={classes.filter__item} key={item.value}>
            <label className={classes.filter__label}>
              <input
                className={classes.filter__button}
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.value)}
              />
              <span className={classes.filter__text}>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { filter: state.reducerFilter }
}

export default connect(mapStateToProps, actions)(FilterTransfer)
