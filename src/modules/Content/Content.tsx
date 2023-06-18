import { default as GenderBlock } from './GenderBlock';
import { default as News } from './News';

import './Content.css';

const Content = () => (
  <div className='content'>
    <div className='content__choice-gender'>
      <GenderBlock gender='mens' caption='Мужское' />
      <div className='pr-2'></div>
      <GenderBlock gender='womens' caption='Женское' />
    </div>
    <News />
  </div>

);

export default Content;