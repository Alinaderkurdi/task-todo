
import style from './inputSection.module.scss'
import ModulesWrapper from '../../../components/compound-components/input-modules/modules-wrapper'


const InputSection = ()=> {
    return(
      <div className={style['input-section-main']}>
          <ModulesWrapper />
      </div>
    )
}

export default InputSection