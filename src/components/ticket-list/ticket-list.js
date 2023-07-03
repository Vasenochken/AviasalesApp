import React, { useEffect } from 'react'
import * as actions from '../../redux/actions/actionCreators'
import { connect } from 'react-redux'
import classes from './ticket-list.module.scss'
import Spinner from '../spin-load/spin-load'
import { AlertAttention, AlertError } from '../alert-error/alert-error'
import Ticket from '../ticket/ticket'

const TicketList = (props) => {
  const { reducerSortTab, reducerFilter, reducerTickets } = props
  const { sort } = reducerSortTab
  const { tickets, counter, loading, error } = reducerTickets
  const { viewMore } = props

  let sortTickets = [...tickets]

  useEffect(() => {
    const { getDataId } = actions
    getDataId(props)
  }, [])

  const onSortTickets = (tickets, sort) => {
    switch (sort) {
      case 'cheap':
        return tickets.sort((a, b) => (a.price > b.price ? 1 : -1))

      case 'fast':
        return tickets.sort((a, b) => {
          const aSum = a.segments[0].duration + a.segments[1].duration
          const bSum = b.segments[0].duration + b.segments[1].duration
          return aSum > bSum ? 1 : -1
        })

      case 'optimal':
        return tickets.sort((a, b) => {
          const aSum = a.segments[0].duration + a.segments[1].duration
          const bSum = b.segments[0].duration + b.segments[1].duration
          return aSum + a.price > bSum + b.price ? 1 : -1
        })
      default:
        return tickets
    }
  }

  sortTickets = onSortTickets(tickets, sort)

  const filterTickets = (reducerFilter, sortTickets) => {
    let newArr = []
    reducerFilter.forEach((element) => {
      if (element.checked) newArr.push(element.value)
    })
    return sortTickets.filter((ticket) => {
      const count =
        ticket.segments[0].stops.length + ticket.segments[1].stops.length
      return newArr.includes(count.toString())
    })
  }

  const sortFilterTickets = filterTickets(reducerFilter, sortTickets).slice(
    0,
    counter,
  )

  return (
    <div>
      {!loading ? <Spinner /> : null}
      {error ? <AlertError /> : null}
      <ul className={classes.ticket_list}>
        {sortFilterTickets.map((el, id) => {
          return <Ticket key={id} item={el} />
        })}
        {!sortFilterTickets.length ? <AlertAttention /> : null}
      </ul>
      {sortFilterTickets.length ? (
        <button onClick={() => viewMore()} className={classes.button_view}>
          показать ещё 5 билетов
        </button>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    reducerSortTab: state.reducerSortTab,
    reducerFilter: state.reducerFilter,
    reducerTickets: state.reducerTickets,
  }
}

export default connect(mapStateToProps, actions)(TicketList)
