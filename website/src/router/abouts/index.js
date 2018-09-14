export default class Abouts extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state ={
            title:'Abouts'
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}