import { HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag } from '@chakra-ui/react'
import { TickList } from '@prisma/client'
import moment from 'moment'
import { Form, useNavigate } from 'remix'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'

export default function TickItem(props: TickList) {
  const navigation = useNavigate()

  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <p className="text-lg">{props.title}</p>
      <div className="flex items-center justify-between w-full">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'purple'}>
            {props.priority} PRIORITY
          </Tag>
          {/* {props.labels ? (
              <Tag fontSize={'x-small'} colorScheme="whatsapp">
                {props.labels}
              </Tag>
            ) : null} */}
        </HStack>
        <HStack pl="2" spacing={2}>
          {props.updatedAt ? (
            <Tag ml="auto" fontSize={'x-small'} colorScheme={'linkedin'}>
              {moment(props.updatedAt).calendar()}
            </Tag>
          ) : null}
          <Form method="post" action={`/tick-list/${props.id}/toggle`}>
            <IconButton
              variant={'ghost'}
              type="submit"
              aria-label="Toogle task completion"
              icon={
                props.completed ? (
                  <HiCheckCircle size={20} />
                ) : (
                  <RiCheckboxBlankCircleLine size={20} />
                )
              }
              size="sm"
            />
          </Form>

          <Menu>
            <MenuButton>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigation(`/tick-list/${props.id}/edit`)}>Edit</MenuItem>
              <MenuItem onClick={() => navigation(`/tick-list/${props.id}/delete`)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </div>
    </div>
  )
}
