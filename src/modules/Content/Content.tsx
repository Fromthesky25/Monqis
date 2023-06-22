import { default as GenderBlock } from './GenderBlock';
import { default as News } from './News';
import { default as NewGoods } from './NewGoods';

import './Content.css';

const Content = () => (
  <div className='content'>
    <div className='content__choice-gender'>
      <GenderBlock gender='men' caption='Мужское' />
      <div className='pr-2'></div>
      <GenderBlock gender='women' caption='Женское' />
    </div>
    <News />
    <NewGoods />
  </div>

);

export default Content;