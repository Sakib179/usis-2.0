import { redirect } from "next/navigation"
import Cookie from "js-cookie"

export default function Page() {

  let token = Cookie.get('token')

  if (token) {
  redirect('/dashboard')
} else {
  redirect('/auth/login')
}

  return (
    <></>
  )
}