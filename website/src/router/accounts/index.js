import { Switch, Route } from "react-router-dom";
import AccountList from './list'
import AccountAdd from './add'

export default class Accounts extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { match } = this.props
        return (
            <div>
                <h3>APP</h3>
                <Switch>
                    <Route path={`${match.url}/add(/:id)`} component={AccountAdd} />
                    <Route path={`${match.url}`} component={AccountList} />
                </Switch>
            </div>
            
        )
    }
}
