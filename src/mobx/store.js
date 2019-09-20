import {
  decorate,
  observable,
  computed,
  action
} from 'mobx';
import getCategories from './states/home';

class GlobalStore {
  categories = getCategories;
  balance = this.getPositiveTotalValue - this.getNegativeTotalValue || 0;
  nightMode = false;

  get getBalance() {
    return this.balance
  }

  get getPositiveTotalValue() {
    return this.categories && this.categories.length > 0 &&
      this.categories
      .filter(cat => cat.type === 'plus')
      .reduce((acc, curr) => acc + curr.value, 0);
  }

  get getNegativeTotalValue() {
    return this.categories && this.categories.length > 0 &&
      this.categories
      .filter(cat => cat.type === 'minus')
      .reduce((acc, curr) => acc + curr.value, 0);
  }

  addNewCategory({
    name,
    id
  }) {
    this.categories.push({
      id,
      name
    });
  }

  changeColorMode(checked) {
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
  getPositiveTotalValue: computed,
  getNegativeTotalValue: computed,
})