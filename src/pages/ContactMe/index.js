import React, { useRef } from 'react'
import './contactMe.scss'

import emailjs from 'emailjs-com'
import { Input, Button, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'



function ContactMe() {
  const { t } = useTranslation()

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0bwblopdsadsa', 'template_9rp22kl', form.current, '-ZOPamhh08EoPestB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                        <Textarea name="message" style={{ marginBottom: '10px' }} />
                        <Button colorScheme='blackAlpha' type="submit" > {t('Отправить')}</Button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ContactMe