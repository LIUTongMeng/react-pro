import createBrowserHistory from 'history/createBrowserHistory'
import FbRouter from './router/FbRouter'

console.log( 'browserHistory', )
const history = createBrowserHistory()
ReactDOM.render(<FbRouter history={history}/>, document.getElementById('app'))