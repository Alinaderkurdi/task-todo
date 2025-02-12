
import Button from '../../../components/base-components/button/button';
import style from './fall-back-ui.module.scss';

const FallBackUI = ({error, resetErrorBoundary, errorMessage}:any)=> {
    
    return(
        <div role="alert" className={style['fall-back']}>
          <p>{`${errorMessage ? errorMessage: 'Oops, something went wrong!'}`}</p>
          <p>{error.message}</p>
          <Button appendStyle={style['rest-button']} buttonHandler={resetErrorBoundary}>Try Again</Button>
        </div>
    )
}

export default FallBackUI

