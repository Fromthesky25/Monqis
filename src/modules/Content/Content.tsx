import { default as GenderBlock } from './GenderBlock';

import './Content.css';

const Content = () => (
  <div className='content'>
    <GenderBlock gender='man' caption='Мужское' />
    <div className='pr-2'></div>
    <GenderBlock gender='woman' caption='Женское' />
  </div>
);

export default Content;