

type button = {
    appendStyle?: string
    children ?: React.ReactNode
    buttonHandler ? : ()=> void
}

const Button = (props: button)=> {
    const {children , appendStyle , buttonHandler } = props
    return (
        <button onClick={buttonHandler} className={``}>
           {children} 
        </button>
    )
}


export default Button;