import style from './checkbox-bt.module.scss';


type checkBox = {
  defaultChecked?: boolean
}

const CheckBoxButton = (props:checkBox)=> {

  const { defaultChecked } = props
    return(
      <div className={style["checkbox-wrapper-18"]}>
        <div className={style["round"]}>
          <input className={style['check-box']} type="checkbox" defaultChecked={defaultChecked} id="checkbox-18" onClick={(e:any)=> {
            console.log(e.target.checked)
            console.log(e)
          }} />
          <label htmlFor="checkbox-18"></label>
        </div>
      </div>
    )
}

export default CheckBoxButton;