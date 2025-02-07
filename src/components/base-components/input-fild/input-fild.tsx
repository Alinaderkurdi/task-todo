import style from './input-fild.module.scss'


type inputFild = {
    appendStyle?: string
    placeholder?: string
}


const InputFild = (props: inputFild)=> {

    const { appendStyle , placeholder} = props
    return(
        <input type="text" className={`${style['input-main']} ${appendStyle ? appendStyle : ''}`} placeholder={placeholder}/>
    )
}

export default InputFild