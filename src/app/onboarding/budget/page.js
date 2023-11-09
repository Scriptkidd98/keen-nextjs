'use client'

import styles from './page.module.css';
import OnboardingHeader from '@/components/OnboardingHeader'
import '@/app/globals.css'
import OnboardingBodyDiv from '@/components/OnboardingBodyDiv'
import BudgetSlider from './BudgetSlider';


export default function Home() {
    const page = 'budget'
  return (
    <main className="main budget-main">
      <OnboardingHeader page={page} progressDisplay={true} progressWidth={83}/>

      <OnboardingBodyDiv
        onboardingBodyUpperDivHeading = {'Plan Your Adventure, Your Way!'}
        onboardingBodyUpperDivText = {"What's your daily budget?"}
        onboardingBodyMiddleDivContent = {
            <>
                <BudgetSlider/>
            </>
        }
        buttonText = {'Next'}
        buttonIconType = {'arrow'}
        buttonDestination = {'/onboarding/crew'}
      />
    </main>
  )
}
