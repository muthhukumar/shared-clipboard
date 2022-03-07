import { HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag } from '@chakra-ui/react'
import { Label, LabelsOnTickList, Priority, TickList } from '@prisma/client'
import moment from 'moment'
import { Form, useNavigate, useTransition } from 'remix'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'

function getPriorityColor(priority: Priority) {
  const priorityColor = {
    [Priority.HIGH]: 'red',
    [Priority.MEDIUM]: 'yellow',
    [Priority.NORMAL]: 'green',
    [Priority.LOW]: 'blue',
  }

  if (!priorityColor[priority]) {
    return priorityColor['LOW']
  }

  return priorityColor[priority]
}

export default function TickItem(
  props: TickList & {
    labels: (LabelsOnTickList & {
      Label: Label | null
    })[]
  },
) {
  const navigation = useNavigate()
  const today = moment().format('YYYY-MM-DD')
  const dueDate = moment(props.dueDate).format('YYYY-MM-DD')

  const isOverDue = moment(today).isAfter(dueDate)
  const isUpcoming = moment(today).isBefore(dueDate)

  const transition = useTransition()

  const isSubmitting =
    transition.location?.pathname === `/tick-list/${props.id}/toggle` &&
    transition.state === 'submitting' &&
    transition.type === 'actionSubmission'

  const labels = props.labels.map((label) => ({ label: label.Label?.label, id: label.labelId }))

  const hasLabels = labels.length > 0

  const dueString = isOverDue
    ? moment(props.dueDate).startOf('day').fromNow()
    : moment(props.dueDate).endOf('day').fromNow()

  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <p className="text-lg">{props.title}</p>
      <div className="flex items-center justify-between w-full">
        <HStack>
          <Tag fontSize={'xx-small'} colorScheme={getPriorityColor(props.priority)}>
            {props.priority} PRIORITY
          </Tag>
          {(isOverDue || isUpcoming) && !props.completed && (
            <Tag fontSize={'xx-small'} colorScheme={isUpcoming ? 'green' : 'red'}>
              {isOverDue ? `Overdue ${dueString}` : `Due ${dueString}`}
            </Tag>
          )}
          {hasLabels
            ? labels.map((label) => {
                return (
                  <Tag fontSize={'xx-small'} colorScheme="whatsapp" key={label.id}>
                    {label.label}
                  </Tag>
                )
              })
            : null}
        </HStack>
        <HStack pl="2" spacing={2}>
          {props.updatedAt ? (
            <Tag ml="auto" fontSize={'xx-small'} colorScheme={'linkedin'}>
              {moment(props.updatedAt).calendar()}
            </Tag>
          ) : null}
          <Form method="post" action={`/tick-list/${props.id}/toggle`}>
            <IconButton
              variant={'ghost'}
              type="submit"
              aria-label="Toogle task completion"
              isLoading={isSubmitting}
              colorScheme={props.completed ? 'green' : 'gray'}
              icon={
                props.completed ? (
                  <HiCheckCircle size={24} />
                ) : (
                  <RiCheckboxBlankCircleLine size={24} />
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
