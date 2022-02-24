import { LoaderFunction } from 'remix'
import { authenticator } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: '/' })
  return null
}

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form
        className="flex flex-col items-center justify-center rounded-full"
        action="/auth/github"
        method="post"
      >
        <h1 className="text-3xl font-bold text-white">Shared clipboard</h1>
        <button className="px-8 py-2 mt-4 text-white bg-yellow-600 rounded-md">
          Login (or Sign up) with Github
        </button>
      </form>
    </div>
  )
}
