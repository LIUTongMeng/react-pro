import {Router, Route, Redirect} from 'react-router-dom'
import App from './app/App'
import Home from './home'
import Accounts from './accounts'
import Abouts from './abouts'

console.log(Accounts)

export default class FbRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {history} = this.props
        console.log('this.props === ', this.props)
        return (
            <Router history={history}>
                <App>
                    <Route exact path="/website/" component={Home}/>
                    <Route path="/website/accounts/" component={Accounts}/>
                    <Route path="/website/abouts/" component={Abouts}/>
                    <Redirect to="/website/"/>
                </App>
            </Router>
        )
    }
}