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
          <data className="text-sm">{moment(props.dueDate).calendar()}</data>
          <Menu>
            <MenuButton
              as={Button}
              // px={4}
              // py={2}
              // transition="all 0.2s"
              // borderRadius="md"
              // borderWidth="1px"
              // _hover={{ bg: 'gray.400' }}
              // _expanded={{ bg: 'blue.400' }}
              // _focus={{ boxShadow: 'outline' }}
            >
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

{
  /* <ButtonGroup size="sm" isAttached variant="outline">
                        <Link to={`/tick-list/${props.id}/edit`}>
                          <IconButton
                            aria-label="Edit Tick List"
                            size={'sm'}
                            icon={<MdModeEdit />}
                          />
                        </Link>
                        <Link to={`/tick-list/${props.id}/delete`}>
                          <IconButton
                            size={'sm'}
                            type="submit"
                            bg="red.500"
                            aria-label="Delete Tick List"
                            icon={<MdDeleteForever />}
                          />
                        </Link>
                      </ButtonGroup> */
}
{
  /* <HStack mt="2" ml="auto">
                        <Link to={`/tick-list/${props.id}/edit`}>
                          <IconButton
                            aria-label="Edit Tick List"
                            size={'sm'}
                            icon={<MdModeEdit />}
                          />
                        </Link>
                        <Link to={`/tick-list/${props.id}/delete`}>
                          <IconButton
                            size={'sm'}
                            type="submit"
                            bg="red.500"
                            aria-label="Delete Tick List"
                            icon={<MdDeleteForever />}
                          />
                        </Link>
                      </HStack> */
}
