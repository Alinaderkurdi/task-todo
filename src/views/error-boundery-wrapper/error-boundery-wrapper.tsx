
import { ErrorBoundary } from "react-error-boundary";
import FallBackUI from "./fall-back-ui/fall-back-ui";



type errorBoundery = {
    children: React.ReactNode;
    Fallback ?: React.ReactNode
}


const ErrorBounderyWrapper = (props: errorBoundery)=> {
    const { children}  = props
    
    return(
        <ErrorBoundary FallbackComponent={FallBackUI}>
          {children}
        </ErrorBoundary>
    )
}

export default ErrorBounderyWrapper