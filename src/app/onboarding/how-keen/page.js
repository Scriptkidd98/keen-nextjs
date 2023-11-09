'use client'

import { useState } from 'react'
import OnboardingHeader from '@/components/OnboardingHeader'
import '@/app/globals.css'
import OnboardingBodyDiv from '@/components/OnboardingBodyDiv'
import greycircleicon from '../../../../public/icons/Grey-Circle-Icon.svg'
import Image from 'next/image'
import styles from './page.module.css';
import selectedButtonRadioIcon from '../../../../public/icons/Radio.svg'



export default function Home() {
    const page = 'how-keen'
    const selectButtonDataArrayOne = ['😌 Chill', '🙂 Balanced', '🤪 Thrilled']
    const selectButtonDataArrayTwo = ['For a laid-back, relaxing day', 'A mix of relaxation and adventure', 'Adrenaline-packed day full of activity']
    const[selection, setSelection] = useState(null)
    
  return (
    <main className="main">
      <OnboardingHeader page={page} progressDisplay={false}/>

      <OnboardingBodyDiv
        onboardingBodyUpperDivHeading = {
            <>
                How <span className={styles.keenspan}>Keen</span> are you today?
            </>
        }
        onboardingBodyUpperDivText = {'Let us know about your current mood'}
        onboardingBodyMiddleDivContent = {
            <>
                {selectButtonDataArrayOne.map((element, index) => {
                    return (
                        <div key={index}>
                            <button className={`${styles.onboardinghowkeenselectbutton} ${selection === index ? 'activeSelectButton' : ''}`} onClick={() => setSelection(index)}>
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
                                <div>
                                    <p className={styles.howkeenselectbuttonheadingtext}>{element}</p>
                                    <p className={styles.howkeenselectbuttoninfotext}>{selectButtonDataArrayTwo[index]}</p>
                                </div>
                            </button>
                        </div>
                    )
                })}
            </>
        }
        buttonText = {'Next'}
        buttonIconType = {'arrow'}
        buttonDestination = {'/onboarding/budget'}
      />
    </main>
  )
}