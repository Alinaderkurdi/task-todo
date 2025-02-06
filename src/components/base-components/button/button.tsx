import style from './button.module.scss';

type button = {
    appendStyle?: string
    children ?: React.ReactNode
    buttonHandler ? : ()=> void
}

const Button = (props: button)=> {
    const {children , appendStyle , buttonHandler } = props
    return (
        <button className={`${style['bt-main-style']} ${appendStyle ? appendStyle : ''}`} onClick={buttonHandler}>
           {children} 
        </button>
    )
}


export default Button;