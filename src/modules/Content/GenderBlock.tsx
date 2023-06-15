import './GenderBlock.css';

const GenderBlock = (props: any) => (
  <div className='genderBlock'>
    <img src={`/${props.gender}.jpg`} alt={props.gender} className='genderBlock__photo' />
    <div className='genderBlock__button__wrapper px-2'>
      <button className='genderBlock__button__content'>{props.caption}</button>
    </div>
  </div>
);

export default GenderBlock;
