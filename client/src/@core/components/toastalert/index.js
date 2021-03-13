import Avatar from '@components/avatar'
import { X, Loader, AlertTriangle, Check, Info } from 'react-feather'

export const SuccessToast = ({ name, description, time }) => (
    <>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='text-success ml-50 mb-0'>{name}</h6>
            </div>
            <small className='text-muted'>{time}</small>
        </div>
        <div className='toastify-body'>
            <span>{description}</span>
        </div>
    </>
)

export const WarningToast = ({ name, description, time }) => (
    <>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />
                <h6 className='text-warning ml-50 mb-0'>{name}</h6>
            </div>
            <small className='text-muted'>{time}</small>
        </div>
        <div className='toastify-body'>
            <span>{description}</span>
        </div>
    </>
)

export const ErrorToast = ({ name, description, time }) => (
    <>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='danger' icon={<X size={12} />} />
                <h6 className='text-danger ml-50 mb-0'>{name}</h6>
            </div>
            <small className='text-muted'>{time}</small>
        </div>
        <div className='toastify-body'>
            <span>{description}</span>
        </div>
    </>
)

export const InfoToast = ({ name, description, time }) => (
    <>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='info' icon={<Info size={12} />} />
                <h6 className='text-info ml-50 mb-0'>{name}</h6>
            </div>
            <small className='text-muted'>{time}</small>
        </div>
        <div className='toastify-body'>
            <span>{description}</span>
        </div>
    </>
)
