import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'

import btnRemove from "../../img/btn-remove.svg";

import googleIcon from "../../img//socialMedia/google.svg";
import twitterIcon from "../../img//socialMedia/twitter.svg";
import vkIcon from "../../img//socialMedia/vkontakte.svg";

export const ModalWindow = (props) => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const [emailDirty, setEmailDirty] = useState(false) //При активации input значение - true
    const [passwordDirty, setPasswordDirty] = useState(false) //При активации input значение - true

    const [emailError, setEmailError] = useState('Поле email не заполнено!') 
    const [passwordError, setPasswordError] = useState('Поле password не заполнено!')
    
    const [formValid, setFormValid] = useState(false)

    useEffect( () => { //Если какой-то элемент из массива изменяется, то функция из первого параметра будет вызываться
        if (emailError || passwordError) { //Если какая-то из ошибок не пуста
            setFormValid(false) //Форма не валидна
        }
        else {
            setFormValid(true) //Форма валидна
        }
    }, [emailError, passwordError]) //Первый параметр - функция; Второй - массив зависимостей

    const blurHandler = (e) => { //Срабатывает тогда, когда пользователь убрал курсор из поля
        switch (e.target.name) {
            case 'email': //Если состояние == 'email', то для EmailDirty делаем true
                setEmailDirty(true)
                break
            case 'password': //Если состояние == 'password', то для passwordDirty делаем true
                setPasswordDirty(true) 
                break
        }
    }

    const emailHandler = (e) => { 
        setEmail(e.target.value) //Когда пользователь что-то вводит, состояние email меняется на то, которое вводит пользователь в инпуте
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неккоректный email');
        }
        else {
            setEmailError('');
        }
    }

    const passwordHadler = (e) => {
        setpassword(e.target.value)
        if (e.target.value.length < 3 || (e.target.value.length > 18)) {
            setPasswordError('Пароль должен быть длинее 3 и меньше 18');
            if(!e.target.value) { //Если пароль пустой
                setPasswordError('Поле password не заполнено!')
            }
        }
        else {
            setPasswordError('');
        }
    }

  return (
    <div className={styles.modalWrapper}>
        <div className={styles.modalWindow}> 
            <div className={styles.enterWrapper}>
                <div></div>
                <p>Авторизируйтесь</p>
                <img className={styles.btnRemove} src={btnRemove} alt="Remove" onClick={props.onCloseModal} />
            </div>

            <div className={styles.socialMedia}>
                <img src={googleIcon} alt="googleIcon"/>
                <img src={vkIcon} alt="vkIcon"/>
                <img src={twitterIcon} alt="twitterIcon"/>
            </div>

            <div className={styles.titleOrWrap}>
                <div></div>
                <p>ИЛИ</p>
                <div></div>
            </div>
            <div>
                <form action="#" className={styles.btnsAuth}>
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>} {/* Если отловятся ошибки, выдавать emailError */}
                    <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Email...'/>
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input value={password} onChange={e => passwordHadler(e)} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Пароль...'/>
                    <button disabled={!formValid}> Войти </button>  {/*Если форма не валидна, то кнопка не доступна */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalWindow;