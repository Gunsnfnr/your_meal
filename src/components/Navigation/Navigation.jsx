import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../store/category/categorySlice.js'
import { Container } from '../Container/container.jsx'
import style from './Navigation.module.css'


export const Navigation = () => {

  const { category, activeCategory } = useSelector( (state) => state.category)
  const dispatch = useDispatch 


    return (
        <nav className={style.navigation}>
        <Container className={style.container}>
          <ul className={style.list}>
            {category.map ((item,i) => 
              <li className={style.item} key={i}>
                <button
                className={classNames(
                    style.button,
                    activeCategory === i ? style.button_active : '')}
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={ () => {
                    dispatch(changeCategory({indexCategory: i}))
                  }}
                >
                  {item.rus}
                  </button>
              </li>
            )}
            
          </ul>
        </Container>
      </nav>
    )
}