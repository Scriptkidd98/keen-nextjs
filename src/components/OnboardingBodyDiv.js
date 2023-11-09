import OnboardingActionButton from '@/components/OnboardingActionButton'
import '@/app/globals.css'


export default function OnboardingBodyDiv({onboardingBodyUpperDivHeading, onboardingBodyMiddleDivContent, buttonText, onboardingBodyUpperDivText, buttonDestination, buttonIconType}) {
    return (
        <div className="onboarding-body-div">
            <div className="onboarding-body-upper-div">
                <h1 className="onboarding-heading-text">{onboardingBodyUpperDivHeading}</h1>
                <p className="onboarding-info-text">{onboardingBodyUpperDivText}</p>
            </div>

            <div className="onboarding-body-middle-div">
                {onboardingBodyMiddleDivContent}
            </div>  

            <div className="onboarding-body-lower-div">
                <OnboardingActionButton 
                    buttonDestination={buttonDestination} 
                    buttonText={buttonText} 
                    buttonIconType={buttonIconType}
                />
            </div>
      </div>
    )
}