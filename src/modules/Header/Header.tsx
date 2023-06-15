import {default as Logo} from './Logo';
import {default as Category} from './Category';
import {default as Commands} from './Commands';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left-side'>
                <Logo />
                <Category />
            </div>
            <div className='header__right-side'>
                <Commands />
            </div>

        </div>
    );
}

export default Header;