import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Facebook, Mail, AlertCircle } from 'react-feather'
import HelmetSite from '@components/helmet/HelmetSite'
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Alert, Button } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import '@styles/base/pages/page-auth.scss'
import { SuccessToast } from '@components/toastalert'
import { toast } from 'react-toastify'

const schema = yup.object().shape({
    email: yup.string().email().required().min(3).max(200),
    password: yup.string().required().min(8).max(200)
})
const LoginUser = () => {
    const history = useHistory()
    const { register, handleSubmit, errors, formState } = useForm({
        resolver: yupResolver(schema)
    })
    const { isSubmitting } = formState
    const [message, setMessage] = useState('')

    const onSubmit = async (data, e) => {
        await axios.post(`${process.env.REACT_APP_SERVER_NODE_URL}/login`, data)
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem('userData', JSON.stringify(res.data))
                }
                toast.success(
                    <SuccessToast name={'Success'} description={'Welcome'} />, {
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true
                })
                history.push('/dashboard/')
            }).catch((error) => {
                setMessage(error.response.data.message)
            })
    }
    return (
        <>
            <HelmetSite title={'Login'} />
            <div className='auth-wrapper auth-v1 px-2'>
                <div className='auth-inner py-2'>
                    <Card className='mb-0'>
                        <CardBody>
                            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                                <h2 className='brand-text text-primary ml-1'>{process.env.REACT_APP_NAME}</h2>
                            </Link>
                            <CardTitle tag='h4' className='text-center mb-1'>
                                Connexion
                            </CardTitle>
                            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                                {message && (
                                    <Alert color='danger'>
                                        <div className='alert-body'>
                                            <AlertCircle size={15} />{' '}
                                            <span className='ml-1'>
                                                {message}
                                            </span>
                                        </div>
                                    </Alert>
                                )}
                                <FormGroup>
                                    <Label for='email'>
                                        Adresse e-mail
                                    </Label>
                                    <input className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        ref={register} />
                                    <span className='invalid-feedback'>
                                        <strong>{errors.email?.message}</strong>
                                    </span>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='password'>
                                         Mot de passe
                                    </Label>
                                    <input className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        ref={register} />
                                    <span className='invalid-feedback'>
                                        <strong>{errors.password?.message}</strong>
                                    </span>
                                </FormGroup>
                                <Button.Ripple disabled={isSubmitting} type="submit" color='primary' block>
                                    Se connecter
                                </Button.Ripple>
                            </Form>
                            <div className='divider my-2'>
                                <div className='divider-text'>or</div>
                            </div>
                            <div className='auth-footer-btn d-flex justify-content-center'>
                                <Button.Ripple color='facebook'>
                                    <Facebook size={14} />
                                </Button.Ripple>
                                <Button.Ripple color='google'>
                                    <Mail size={14} />
                                </Button.Ripple>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default LoginUser