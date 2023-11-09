'use client'

import {useState} from 'react'
import OnboardingHeader from '@/components/OnboardingHeader'
import '@/app/globals.css'
import OnboardingBodyDiv from '@/components/OnboardingBodyDiv'
import greycircleicon from '../../../../public/icons/Grey-Circle-Icon.svg'
import Image from 'next/image'
import styles from './page.module.css';
import selectedButtonRadioIcon from '../../../../public/icons/Radio.svg'



export default function Home() {
    const page = 'crew'
    const selectButtonDataArray = ['🧳 Solo', '👨‍👩‍👦 Family', '👬 Friends', '👫Couple']
    const[selection, setSelection] = useState(null)

  return (
    <main className="main">
      <OnboardingHeader page={page} progressDisplay={true} progressWidth={100}/>

      <OnboardingBodyDiv
        onboardingBodyUpperDivHeading = {"Who's Your Adventure Crew?"}
        onboardingBodyUpperDivText = {'Crafted Exclusively for Your Travel Crew!'}
        onboardingBodyMiddleDivContent = {
            <>
                {selectButtonDataArray.map((element, index) => {
                    return (
                        <div key={index}>
                            <button className={`${styles.onboardingcrewselectbutton} ${selection === index ? 'activeSelectButton' : ''}`} onClick={() => setSelection(index)}>
                                {selection === index ?
                                    <Image
                                        src={selectedButtonRadioIcon}
                                        alt='Radio Icon'
                                        className={'selectButtonRadio'}
                                    /> :
                                    <Image
                                        src={greycircleicon}
                                        alt='Grey Circle Icon'
                                        className={'selectButtonRadio'}
                                    />
                                }
                                <span>{element}</span>
                            </button>
                        </div>
                    )
                })}
            </>
        }
        buttonText = {'Confirm'}
        buttonIconType = {'check-mark'}
        buttonDestination = {'/onboarding/location'}
      />
    </main>
  )
}