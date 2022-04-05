import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { Form, useSubmit } from 'remix'

export default function SearchBar() {
  const submit = useSubmit()

  return (
    <Form
      className="flex items-center justify-between w-full"
      method="get"
      onChange={(target) => submit(target.currentTarget)}
    >
      <InputGroup size="md">
        {/* eslint-disable-next-line react/no-children-prop*/}
        <InputLeftElement pointerEvents="none" children={<RiSearchLine color="gray.300" />} />
        <Input pr="4.5rem" type="text" name="q" placeholder="Search..." />
      </InputGroup>
    </Form>
  )
}
