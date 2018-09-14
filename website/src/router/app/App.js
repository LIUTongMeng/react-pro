import {Link, Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    const { main, sidebar } = this.props
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/website">Home</Link></li>
          <li><Link to="/website/accounts">Accounts</Link></li>
          <li>
            <ul>
              <li><Link to="/website/accounts/list">Accounts list</Link></li>
              <li><Link to="/website/accounts/add">Accounts add</Link></li>
            </ul>
          </li>
          <li><Link to="/website/abouts">Abouts</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}