export default class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state ={
            title:'Home'
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}