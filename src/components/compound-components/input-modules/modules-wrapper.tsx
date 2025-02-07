import style from './modules-wrapper.module.scss';
import { IoSearch } from "react-icons/io5"
import { IoAddOutline } from "react-icons/io5"

import InputFild from '../../base-components/input-fild/input-fild';
import Button from '../../base-components/button/button';


const ModulesWrapper = ()=> {

    return(
        <div className={style['module-wrapper']}>
            <InputFild />
            <Button appendStyle={`${style['function-bt-search']} ${style['function-bt']}`}>
               <IoSearch fontSize={'1.5rem'} />
            </Button>
            <Button appendStyle={`${style['function-bt-add']} ${style['function-bt']}`}>
                <IoAddOutline fontSize={'2rem'} />
            </Button>
        </div>
    )
}

export default ModulesWrapper;