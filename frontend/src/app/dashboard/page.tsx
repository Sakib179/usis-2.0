import { redirect } from "next/navigation"
import Cookie from "js-cookie"

export default function Page() {


    let accountType = Cookie.get('accountType')
  
    if (accountType == 'student') {
      redirect('/student')
    
    } else {

    }

  return (
    <></>
  )
}