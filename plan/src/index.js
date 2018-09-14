import {BrowserRouter, Route} from "react-router-dom" 
import createBrowserHistory from "history/createBrowserHistory"
import {observer} from 'mobx-react'
import appState from './store'
import PlanList from './list'

const RootRouter =observer( (props) =>{
      console.log(props)
      return (
        <BrowserRouter history={props.history}>
          <div>
            <Route path="/plan/list/" component={PlanList}></Route>
            <Route exact path='/plan/' component={PlanList}></Route>
          </div>
        </BrowserRouter>
    )
  }
)

ReactDOM.render(<RootRouter appState={appState} />, document.getElementById("app"))


if (module.hot) {
  module.hot.accept('./index', () => {
    var NewTodoApp = require('./index').default;
    ReactDOM.render(
      <NewTodoApp appState={appState}/>,
      document.getElementById('app')
    );
  });
}