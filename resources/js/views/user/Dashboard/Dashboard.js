import React, {Component} from 'react'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }

render() {
    return (
      <div>
          <span>Logged In</span> <br/>
      </div>
      )
    }
  }
export default Home