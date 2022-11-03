import React, { useState} from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import SVG from 'react-inlinesvg'
import { useTranslation } from 'react-i18next'
import '../../i18next'
import fonMP3 from '../../assets/mp3/fon.mp3'


import './navbar.scss'

import soundSVG from '../../assets/img/sound.svg'

function Navbar() {

  const [audio] = useState(new Audio(fonMP3))
    audio.loop = true;
    
  const { t, i18n } = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleStartAudio = () => {
    audio.play();
    setPlay(false);
  }
  
  const handleStopAudio = () => {
      audio.pause()
      setPlay(true);
  }
const [play, setPlay] = useState(true)
const [activeLang, setActiveLang] = useState(2)
  return (
    <div className='navbar'>
             
      <span className='navbar-main'><a href="#main">{t('Главная')}</a></span>
      <div className='navbar-menu-help'>
      {play ? (
          <SVG
          className='navbar-menu-help-sound'
            src={soundSVG}
            alt=""
            onClick={handleStartAudio}
          />
        ) : (
          <>
          <SVG
          className='navbar-menu-help-sound'
            src={soundSVG}
            alt=""
            onClick={handleStopAudio}
          />
          </>
        )}
        <div className='navbar-menu-help-lang'>
          <span className={activeLang === 1 &&' activeLang'} onClick={() => {changeLanguage('bel')
        setActiveLang(1)}}>Рус</span>
          /
          <span className={activeLang === 2 &&' activeLang'} onClick={() => {changeLanguage('ru')
        setActiveLang(2)}}>Бел</span>
        </div>
        <span ref={btnRef} onClick={onOpen} >Меню</span>
      </div>
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='md'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><h1 style={{fontSize:'48px'}}>Меню</h1></DrawerHeader>
            <DrawerBody>
              <div className='navbar-menu'>
                <div><a href="#aboutWe" onClick={onClose}>{t('О нашей работе')}</a></div>
                <div><a href="#genocide" onClick={onClose}>{t('Геноцид белорусского народа')}</a></div>
                <div><a href="#prisoners" onClick={onClose}>{t('Малолетние узники нацизма, кто они?')}</a></div>
                <div><a href="#weNovopolock" onClick={onClose}>{t('Мы Новополочане')}</a></div>
                <div><a href="#kidFade" onClick={onClose}>{t('Судьбы детей, лишённых детства')}</a></div>
                <div><a href="#meaninghSite" onClick={onClose}>{t('Практическая значимость сайта')}</a></div>
                <div><a href="#conclusions" onClick={onClose}>{t('Выводы авторов')}</a></div>
                <div><a href="#audioDialog" onClick={onClose}>{t('Жизнь продолжается!')}</a></div>
                <div><a href="#anketa" onClick={onClose}>{t('Анкета')}</a></div>
                <div><a href="#contactMe" onClick={onClose}>{t('Обратная связь')}</a></div>
              </div>
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  )
}

export default Navbar