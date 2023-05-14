import {BiErrorAlt} from 'react-icons/bi';
import {GrValidate} from 'react-icons/gr';
import {AiOutlineWarning} from 'react-icons/ai';

const AlertIcons = ({type}: {type: string}) => {

    if (type === 'Success'){
        return <>
            <GrValidate />
        </>
    }
    else if (type === 'Warning'){
        return (<>
            <AiOutlineWarning />
        </>);
    }else{
        return (<>
            <BiErrorAlt />
        </>);
    }
};

const Alert = ({type, message}: {type: string, message: string}) => {
    console.log (type)
    const alertType = type === 'Error' ? 'alert-error' : (type === 'Warning' ? 'alert-warning' : 'alert-success');


  return (
    <div className={`shadow-lg alert ${alertType}`}>
        <div>
            <AlertIcons type={type} />
            <span>{message}</span>
        </div>
    </div>
  );
};

export default Alert;
