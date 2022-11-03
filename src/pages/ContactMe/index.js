import React, { useRef, useState } from 'react'
import './contactMe.scss'

import emailjs from 'emailjs-com'
import {
    Input, Button, Textarea, useToast
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'



function ContactMe() {

    const [text, setText] = useState('')
    const toast = useToast()
    const { t } = useTranslation()

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        if (text.length > 0) {

            emailjs.sendForm('service_0bwblopdsadsa', 'template_9rp22kl', form.current.length !== 0 && form.current, '-ZOPamhh08EoPestB')
                .then((result) => {
                    console.log(result.text);
                    toast({
                        title: 'Отправлено',
                        description: "Ваше сообщение было успешно отправлено!",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            toast({
                title: 'Ошибка',
                description: "Заполните все поля!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }



    return (
        <div className='contactMe' id='contactMe'>
            <div data-aos="fade-up" data-aos-delay="300">

                <div className='contactMe-content'>
                    <h2>{t('Обратная связь')}</h2>
                    <form ref={form} onSubmit={sendEmail}  >
                        <label>{t('Почта')}</label>
                        <Input type="email" name="user_email" />
                        <label>{t('Сообщение')}</label>
                        <Textarea onChange={(e) => setText(e.target.value)} name="message" style={{ marginBottom: '10px' }} />
                        <Button colorScheme='blackAlpha' type="submit" > {t('Отправить')}</Button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ContactMe