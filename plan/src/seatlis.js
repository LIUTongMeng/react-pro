export default class PlanSeatList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data:['经济舱',"一等舱"]
        }
    }

    render() {
        return <div>
             <ul>
                 {
                     this.state.data.map((item, index) => <li key={index}>{item}</li>)
                 }
             </ul>
        </div>
    }
}