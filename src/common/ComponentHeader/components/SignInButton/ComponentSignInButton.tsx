
import { SignInButtonIcon } from '../../../../assets/icons/SignInButtonIcon'

export const ComponentSignInButton = () => {
  return (
    <div className='flex items-center gap-[3px]'>
        <SignInButtonIcon/>
        <p className='text-white font-lato font-normal text-14 leading-5 whitespace-nowrap'>Sign in</p>
    </div>
  )
}
