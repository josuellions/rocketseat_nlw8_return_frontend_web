import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
//import { useState } from 'react';

import { WidgetForm } from './WidgetForm'

export function Widget () {
  /**Sem Popover */
  /*const [ isWidgetOpen, setIsWidgetOpen ] = useState(false);

  function toggleWidgetVisibility () {
    setIsWidgetOpen(!isWidgetOpen);
  }


  return (
    <div className="absolute bottom-5 right-5">
      { isWidgetOpen &&
        <p>Click Button</p>
      }

      <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
          <ChatTeardropDots size={32} weight="thin" className='w-6 h-6'/>
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs translate-all duration-500 ease-linear'>
            <span className='pl-2'>Feedback</span>
          </span>
        </button>
    </div>
  )
  */

  /**Com Popover */
  return (
    <Popover className="absolute bottom-5 md:bottom-8 right-5 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>

      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
          <ChatTeardropDots size={32} weight="thin" className='w-6 h-6'/>
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs translate-all duration-500 ease-linear'>
            <span className='pl-2'>Feedback</span>
          </span>
        </Popover.Button>
    </Popover>
  )
}