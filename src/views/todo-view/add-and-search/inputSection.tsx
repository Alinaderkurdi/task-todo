
import style from './inputSection.module.scss'

import { IoSearch } from "react-icons/io5"
import { RiAddLargeFill } from "react-icons/ri";

import InputFild from '../../../components/base-components/input-fild/input-fild';
import Button from '../../../components/base-components/button/button';
import useDebounce from '../../../hooks/useDebounce.tsx';
import { inputStatues } from '../interfaces/statues.ts';

import { useEffect, useState } from 'react';



type  inputsection = {
  onGetInputStatus: (statues:inputStatues)=> void
}


const InputSection = ({ onGetInputStatus}: inputsection)=> {

  const [inputAction, setInputAction] = useState('ADD')
  const [inputValue, setInputValue] = useState('')
  const [detectAppBtClick,setDetectAppBtClick] = useState(false)


  const debouncedValue = useDebounce(inputValue, 1100);
  
  const inputValidator = (inputValue: string)=> {
    if (inputValue.trim()){//juest a simple input validation !
      return true
    }else {
      return false
    }
  }
  
  const getInputValue = (value:string)=>{
    setInputValue(value)
  }

  useEffect(()=>{
    console.log('detectAppBtClick')
    if(inputAction === 'ADD' && inputValue){
      console.log('send HTTP ' + inputValue )
      // if the responce is 200 trigger the a useEffect on the todos section
      // call Api for add new todo during request/responce the todos section can be updated optimistically 
      // the result of this api call snd with onGetInputStatus()
      // i.e  
      // onGetInputStatus({
      // inputValue for update todos  optimistically
      // asyncResult for rerun the useEffect on todoSection
      // })
      // 

    }
  },[detectAppBtClick])
  


  useEffect(()=> {
    if(inputAction === 'SEARCH'){
     onGetInputStatus({
        inputValue,
        query: inputValue
     })
     //the query prameter must add here when this property change the useMemo hook for search rerun
    }
  }, [debouncedValue])

  const addAction = (action:string)=>{
    console.log('add action')
    setDetectAppBtClick(prev => !prev)
    setInputAction(action)
  } 

  const searchAction = (action: string)=> {
    setInputAction(action)
  }


  const setPlaceholder = ()=> {
    if(inputAction === 'ADD') {
      return 'Please add new todo'
    }else if (inputAction === 'SEARCH') {
      return 'Search by title, date, key word ...'
    }else {
      return 'Please add new todo'
    }
  }

  return(
  <div className={style['input-section-main']}>
    <InputFild 
    placeholder={setPlaceholder()}
    onGetInputValue={getInputValue}
    inputValidator={inputValidator}/>
    <Button buttonHandler={searchAction.bind(this,'SEARCH')} appendStyle={`${style['function-bt-search']} ${style['function-bt']}`}>
     <IoSearch  fontSize={'1.8rem'} />
    </Button>
    <Button buttonHandler={addAction.bind(this,'ADD')} appendStyle={`${style['function-bt-add']} ${style['function-bt']}`}>
      <RiAddLargeFill  fontSize={'2rem'} />
    </Button>
  </div>
  )
}

export default InputSection