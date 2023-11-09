'use client'

import '@/app/globals.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import checkmark from '../../public/icons/Check-Mark.svg'
import forwardarrowicon from '../../public/icons/Forward-Arrow-Icon.svg'


export default function OnboardingActionButton({buttonDestination, buttonText, buttonIconType}) {
    const router = useRouter()
    return (
        <>
            <button className='onboarding-action-button' onClick={() => router.push(buttonDestination)}>
                <div className="onboarding-action-button-inner-div">
                    <span>{buttonText}</span>
                    {(buttonIconType === 'arrow') ? 
                        <Image 
                            src={forwardarrowicon} 
                            alt='Forward Arrow Icon'
                            className="onboarding-action-button-forward-arrow-icon"
                        /> : 
                        null
                    }
                    {(buttonIconType === 'check-mark') ? 
                        <Image
                            src={checkmark}
                            alt='Check Mark Icon'
                            className='onboarding-action-button-check-mark-icon'
                        /> : 
                        null
                    }
                </div>
            </button>
        </>
    )
}