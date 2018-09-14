export default class AccountAdd extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>姓名</label>
                        <input name='name'/>
                    </div>
                    <div>
                        <label>年龄</label>
                        <input name='age'/>
                    </div>
                    <div>
                        <label>性别</label>
                        <input name='gender'/>
                    </div>
                    <button>提交</button>
                </form>
            </div>
        )
    }
}