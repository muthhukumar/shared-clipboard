import { Button } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'remix'

export default function AddButton({ url, name }: { url: string; name?: string }) {
  const navigation = useNavigate()
  return (
    <Button
      leftIcon={<IoMdAdd />}
      variant="solid"
      size="md"
      w="17%"
      onClick={() => navigation(url)}
    >
      Add {name}
    </Button>
  )
}
