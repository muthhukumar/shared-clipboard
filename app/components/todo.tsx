import { HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag } from '@chakra-ui/react'
import { Label, LabelsOnTodo, Priority, Todo } from '@prisma/client'
import moment from 'moment'
import { useFetcher, useNavigate } from 'remix'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'
import { capitalCase } from 'change-case'

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

export default function Todo(
  props: Todo & {
    labels: (LabelsOnTodo & {
      Label: Label | null
    })[]
  },
) {
  const navigation = useNavigate()
  const today = moment().format('YYYY-MM-DD')
  const dueDate = moment(props.dueDate).format('YYYY-MM-DD')

  const isOverDue = moment(today).isAfter(dueDate)
  const isUpcoming = moment(today).isBefore(dueDate)

  const fetcher = useFetcher()

  const isSubmitting = fetcher.state === 'submitting'

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
            {capitalCase(`${props.priority} PRIORITY`)}
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
          <fetcher.Form method="post" action={`/todo/${props.id}/toggle`}>
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
          </fetcher.Form>

          <Menu>
            <MenuButton>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigation(`/todo/${props.id}/edit`)}>Edit</MenuItem>
              <MenuItem onClick={() => navigation(`/todo/${props.id}/delete`)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </div>
    </div>
  )
}
