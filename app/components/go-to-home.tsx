import { Button } from '@chakra-ui/react'
import { useNavigate } from 'remix'

export default function GoToHome() {
  const navigation = useNavigate()
  return (
    <Button onClick={() => navigation('/')} rounded={'md'} colorScheme="purple">
      Go to Home
    </Button>
  )
}
