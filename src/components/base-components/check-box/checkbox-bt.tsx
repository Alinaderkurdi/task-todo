import { useEffect, useState } from 'react';
import style from './checkbox-bt.module.scss';


type checkBox = {
  defaultChecked?: boolean
  id: number
  onCheckBoxIsClicked?: (state: boolean)=> void
  testID: string
}

const CheckBoxButton = (props:checkBox)=> {

  const { defaultChecked, onCheckBoxIsClicked, testID } = props
  const [ isCompleted, setIsCompleted ] = useState(defaultChecked)

  const ClikedCheckBox = (e:React.MouseEvent<HTMLInputElement>)=> {
    console.log(props.id)
    setIsCompleted(prev => !prev)
    onCheckBoxIsClicked(!isCompleted)
  }


  useEffect(()=>{
    console.log(isCompleted + 'useEffect')
  },[isCompleted])
  

  return(
    <div className={style["checkbox-wrapper-18"]}>
      <div className={style["round"]}>
        <input className={style['check-box']} type="checkbox" defaultChecked={isCompleted} id={testID} onClick={ClikedCheckBox}/>
        <label htmlFor={testID}></label>
      </div>
    </div>
  )
}

export default CheckBoxButton;