'use client'

import { useEffect } from 'react';
import styles from './page.module.css';
import OnboardingHeader from '@/components/OnboardingHeader'
import '@/app/globals.css'
import Image from 'next/image'
import locationicon from '../../../../public/icons/Location-Icon.svg'
import OnboardingActionButton from '@/components/OnboardingActionButton';


export default function Home() {

  useEffect(() => {
    document.querySelector('body').style.overflow = 'auto'
  },[]) 

  const page = 'location'
  return (
    <div className={styles.onboardinglocationbodydiv}>
      <div className={styles.upperlocationdiv}>

        <div className="location-onboarding-header-container">
          <OnboardingHeader page={page} progressDisplay={false}/>
        </div>
        
        <div className="onboarding-body-upper-div" style={{marginTop: '23.400px'}}>
          <h1 className="onboarding-heading-text">Lets start Your Adventure!</h1>
          <p className="onboarding-info-text">Share Your Starting Point</p>
        </div>

        <div className={styles.locationsearchdiv}>
          <input placeholder="Enter your location"></input>
          <Image
            src={locationicon}
            alt="Map Marker Icon"
            className={styles.locationicon}
          />
        </div>
      </div>
      <div className={styles.borderradiusmapdiv}>
        <OnboardingActionButton buttonText="Next" buttonIconType="arrow" buttonDestination={'/onboarding/how-keen'} />
      </div>
    </div>
  )
}