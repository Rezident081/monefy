import React, { useState, memo } from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import {inject} from 'mobx-react';


function Footer(props){
  const {categories, balance} = props.store;
  const [isCollapse, onCollapse] = useState(false); 
  const categoryExist = categories &&  categories.length > 0;

  // Go to spend page
  const goToSpendPage = () => {
    const {history} = props;
    history.push('/spend');
  }

  // Render category list
  const renderCategoriesList = () => {
    return (
      <ul>
      { categoryExist && 
        getSortedCategories().filter(cat => cat.value > 0).map((cat, indx) => <li key={indx}>
          <span className="cat-name">{cat.name}</span> 
          <span className={cn({
              green : cat.type === 'plus',
              red: cat.type === 'minus'
            },'cat-value')}>
            {cat.value}
          </span>
        </li>) 
      }
      </ul>
    )
  }

  // Sorting by value
  const getSortedCategories = () => {
    return categoryExist && categories.sort((a,b) => b.value - a.value);
  }

  return (
    <footer>
      <div className='footer-container'> 
        <div className='footer-container-inner'>
          <div className={cn({isOpen : isCollapse},'balance-block')}>
            <div className='balance-inner' onClick={() => onCollapse(!isCollapse)}>
              Balance : { balance } $
            </div>
            {
              isCollapse && (
                <div className='categories-list'>
                  {
                    renderCategoriesList()
                  }
                </div>
              )
            }
          </div>
        </div>
        <div className='plus-minus-block'>
            <button className='minus'><span>-</span></button>
            <button className='plus' onClick={() => goToSpendPage()}><span>+</span></button>
          </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
}

export default inject('store')(memo(Footer));
