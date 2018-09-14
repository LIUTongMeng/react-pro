import {Route} from 'react-router-dom'
import SeatList from './seatlis'
import EmptyList from './empty'
export default class PlanList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showSeat:false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            showSeat:true
        })
    }

    render() {
        return <div>
            <div style={{height:150, paddingTop:'50'}}>
                 <span style={{fontSize:64, transform:"translateY(-50%)"}}></span>
            </div>
            <button>查看舱位</button>
            <div>
                <SeatList/>
            {/* {
                this.state.showSeat ? <Route path='seatlist' component={SeatList}></Route> : <Route component={EmptyList}></Route>
            } */}
            <Route exact path="/plan/list/" />
            </div>
        </div>
    }
}