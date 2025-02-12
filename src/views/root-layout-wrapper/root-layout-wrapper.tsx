
// to define a global layout for routes
// any nested layout for a specific  route can be defined in its route folder
// and any screen brake point for mobile and desktop can be defin here i.e list for mobile and table for desktop

import style from './root-layout-wrapper.module.scss'


type rootLayoutType = {
    children: React.ReactNode;
}


const RootLayoutWrapper = (props: rootLayoutType)=> {

    const { children } = props

    return(
       <div className={style['root-layout']}>
           {children}
       </div>
    )
}

export default RootLayoutWrapper;