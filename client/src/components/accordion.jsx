import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

function Accordions(props) {
  return (
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'rgb(64, 131, 2)', color: 'white' }}>
          {props.title}
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
{props.body}
{props.img}
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  )
}

export default Accordions