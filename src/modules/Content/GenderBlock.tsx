import { useNavigate } from "react-router-dom";

import './GenderBlock.css';

const GenderBlock = (props: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.gender}`);
  }

  return (
    <div className='genderBlock'>
      <img src={`/${props.gender}.jpg`} alt={props.gender} className='genderBlock__photo' />
      <div className='genderBlock__button__wrapper px-2'>
        <button className='genderBlock__button__content' onClick={handleClick}>{props.caption}</button>
      </div>
    </div>
  );
}

export default GenderBlock;
