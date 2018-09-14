import {decorate, observable, computed} from 'mobx'
// 第一种方式 
export default class appState{
    @observable price = 0;
    @observable amount = 1;

    constructor(price) {
        this.price = price;
    }

    @computed get total() {
        return this.price * this.amount
    }


}

// 第二种方式 使用 decorate