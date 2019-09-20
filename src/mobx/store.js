import { decorate, observable, computed, action } from 'mobx';
import getCategories from './states/home';

class GlobalStore {
  categories = getCategories;
  balance = 0;
  nightMode = false;

  get getBalance(){
    return this.balance
  }

  addNewCategory({name, id}){
    this.categories.push({id, name});
  }

  changeColorMode(checked){
    this.nightMode = checked;
  }
}

export default decorate(GlobalStore, {
  nightMode: observable,
  categories: observable,
  balance: observable,
  getBalance: computed,
  addNewCategory: action,
  changeColorMode: action.bound,
})