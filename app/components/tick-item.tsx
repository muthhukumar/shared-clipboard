import { HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag } from '@chakra-ui/react'
import { TickList } from '@prisma/client'
import moment from 'moment'
import { Form, useNavigate, useTransition } from 'remix'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'

export default function TickItem(props: TickList) {
  const navigation = useNavigate()
  const today = moment().format('YYYY-MM-DD')
  const dueDate = moment(props.dueDate).format('YYYY-MM-DD')

  const isOverDue = moment(today).isAfter(dueDate)

  const transition = useTransition()

  const isSubmitting =
    transition.location?.pathname === `/tick-list/${props.id}/toggle` &&
    transition.state === 'submitting' &&
    transition.type === 'actionSubmission'

  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <p className="text-lg">{props.title}</p>
      <div className="flex items-center justify-between w-full">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'purple'}>
            {props.priority} PRIORITY
          </Tag>
          {isOverDue && !props.completed && (
            <Tag fontSize={'x-small'} colorScheme={'red'}>
              Overdue
            </Tag>
          )}
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
              isLoading={isSubmitting}
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
