import { decorate, observable, computed, action } from 'mobx';
import getCategories from './states/index/categories';

class GlobalStore {
  categories = getCategories;
  balance = 0;

  get getBalance(){
    return this.balance
  }

  addNewCategory({name, id}){
    this.categories.push({id, name});
  }

}

export default decorate(GlobalStore, {
  categories: observable,
  balance: observable,
  getBalance: computed,
  addNewCategory: action
})