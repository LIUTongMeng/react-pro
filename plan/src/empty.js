export default class EmptyList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    render() {
        return <div>
             没有数据
        </div>
    }
}