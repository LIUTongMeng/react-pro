export default class AccountList extends React.PureComponent {
   constructor(props) {
       super(props)
   }

   data = [
       {id:1, name:'name1', age:12, gender:'男'},
       {id:2, name:'name2', age:13, gender:'女'},
       {id:3, name:'name3', age:14, gender:'男'},
       {id:4, name:'name4', age:15, gender:'女'},
       {id:5, name:'name5', age:16, gender:'男'}
   ]
    
   render() {
       console.log('AccountList render')
       return (
           <ul>
               {
                   this.data.map((item, index) => <li key={index}>{item.name}</li>)
               }             
           </ul>
       )
   }
}