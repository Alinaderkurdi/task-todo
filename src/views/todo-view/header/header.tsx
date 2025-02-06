import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";


import style from './header.module.scss';
import Button from '../../../components/base-components/button/button';

//buttons on this section could open a overlay or a link to open anothr route but for simplicity i decide to go with button


const Header = ()=> {

  return (
    <header className={style['header-main']}>
      <Button>
       <IoIosArrowBack fontSize={'1.7rem'}/>
      </Button>
      <h1 className={style['app-name']}>Todo APP</h1>
      <Button>
       <IoSettingsSharp fontSize={'1.5rem'} />
      </Button>
    </header>
  )
}

export default Header