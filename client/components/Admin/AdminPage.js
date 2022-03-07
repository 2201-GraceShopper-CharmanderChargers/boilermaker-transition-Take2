import React, {useState} from 'react'
import {connect} from 'react-redux'
import { fetchAllUsers } from '../../store/users'



class AdminPage extends React.Component {
 

  render() {
   
    
    return (
      <div>
        hello
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapState, mapDispatch)(AdminPage)