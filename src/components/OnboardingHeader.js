'use client'

import Image from 'next/image';
import backchevronicon from '../../public/icons/Back-Chevron-Icon.svg';
import '@/app/globals.css'
import { useRouter } from 'next/navigation'


export default function OnboardingHeader({progressDisplay, progressWidth, page}) {
    const router = useRouter()
    return (
        <div className="onboarding-header">
            <button className="onboarding-header-back-button-div" onClick={() => router.back()}>
                <Image 
                    src={backchevronicon} 
                    alt='Back Chevron Icon' 
                    className="onboarding-header-back-chevron-icon"  
                />
            </button>
            <div className="onboarding-header-progress-container">
                {(progressDisplay) ? 
                    <>
                        <div className="onboarding-header-progress-outer-div">
                            <div className="onboarding-header-progress-inner-div" style={{width: `${progressWidth}%`}}></div>
                        </div>
                    </> :
                    null
                }
                
            </div>
        </div>
    )
}