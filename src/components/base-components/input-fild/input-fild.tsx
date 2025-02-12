
import style from './input-fild.module.scss'


type inputFild = {
    appendStyle?: string
    placeholder?: string
    onGetInputValue: (value: string)=> void
    inputValidator: (inputValue: string)=> boolean
}

const InputFild = ({ appendStyle , placeholder, onGetInputValue, inputValidator}: inputFild)=> {


    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        //invalidate input value based on the passed function 
        //if return false can set a element to indecate the invalid error type

        if(inputValidator(e.target.value)) {
           onGetInputValue(e.target.value)
        }else {
            //set wrong message logic
        }
    }

    return(
        <input
        onChange={getInputValue} 
        type="text"  
        className={`${style['input-main']} ${appendStyle ? appendStyle : ''}`} placeholder={placeholder}/>
    )
}

export default InputFild