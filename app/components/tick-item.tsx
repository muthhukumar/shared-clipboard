import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { TickList } from '@prisma/client'
import moment from 'moment'
import { Form, useNavigate, useSubmit } from 'remix'
import { BsThreeDots } from 'react-icons/bs'

export default function TickItem(props: TickList) {
  const submit = useSubmit()

  const navigation = useNavigate()

  return (
    <Form
      key={props.id}
      className="w-full"
      method="post"
      action={`/tick-list/${props.id}/toggle`}
      onChange={(target) => submit(target.currentTarget)}
    >
      <div className="flex flex-col items-start w-full">
        <div className="flex items-start gap-x-2">
          <Checkbox isChecked={props.completed}></Checkbox>
          <p className="max-w-4xl -mt-1 truncate-3-lines">{props.title}</p>
        </div>
        <div className="flex items-center justify-between w-full pl-6 mt-2">
          <data className="text-sm">{moment(props.dueDate).fromNow()}</data>
          <Menu>
            <MenuButton as={Button}>
              <BsThreeDots />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigation(`/tick-list/${props.id}/edit`)}>Edit</MenuItem>
              <MenuItem onClick={() => navigation(`/tick-list/${props.id}/delete`)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Form>
  )
}
