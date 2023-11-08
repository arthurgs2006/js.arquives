import {Button, Toast, ToastBody} from 'reactstrap'

const SucessToast = (props: {
    toastIsOpen: boolean
    setToastIsOpen: (isOpen: boolean) => void
}) => {
    return(
        <Toast
        className='bg-success text-while fixed-bottom ms-auto me-4 mb-4'
        isOpen={props.toastIsOpen}
        fade
        >
            <ToastBody className='d-flex justify-content-between'>
                Produto adicionado ao carrinho.
            <Button
            close 
            className='btn-close-white'
            onClick={() => props.setToastIsOpen(false)}
            ></Button>
            </ToastBody>
        </Toast>
    )
}

export default SucessToast;