import {
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Tag,
} from '@chakra-ui/react'
import type { Label, LabelsOnTodo, Todo } from '@prisma/client'
import { Priority } from '@prisma/client'
import moment from 'moment'
import { useFetcher, useNavigate } from '@remix-run/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'
import { capitalCase } from 'change-case'
import { getToday, getTomorrow } from '~/utils'
import Calendar from 'react-calendar'

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

export default function TodoItem(
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

  const rescheduleFether = useFetcher()

  const isSubmitting =
    fetcher.state === 'submitting' ||
    (fetcher.state === 'loading' && fetcher.type === 'actionReload')

  const isRescheduling =
    rescheduleFether.state === 'submitting' ||
    (rescheduleFether.state === 'loading' && rescheduleFether.type === 'actionReload')

  const labels = props.labels.map((label) => ({ label: label.Label?.label, id: label.labelId }))

  const hasLabels = labels.length > 0

  const dueString = isOverDue
    ? moment(props.dueDate).startOf('day').fromNow()
    : moment(props.dueDate).endOf('day').fromNow()

  const reschule = (dueDate: string) => {
    rescheduleFether.submit(
      { dueDate },
      {
        method: 'post',
        action: `/todo/${props.id}/reschedule`,
      },
    )
  }

  return (
    <div className="flex w-full flex-col items-start gap-y-1 rounded-md py-2">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg">{props.title}</p>
        <HStack spacing={2}>
          {isOverDue && !props.completed && (
            <Menu>
              <MenuButton as={Button} size="xs" disabled={isRescheduling} colorScheme="purple">
                {isRescheduling ? 'Rescheduling...' : 'Reschedule'}
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem onClick={() => reschule(getToday())}>Today</MenuItem>

                  <MenuItem onClick={() => reschule(getTomorrow())}>Tomorrow</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem closeOnSelect={false}>
                  <div className="bg-white">
                    <Calendar
                      // TODO - fix this in future
                      // @ts-ignore
                      onChange={(value: Date) => {
                        const newDueDate = new Date(value)
                        reschule(moment(newDueDate).format('YYYY-MM-DD'))
                      }}
                      minDate={new Date(getToday())}
                    />
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          )}

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
      <div className="mt-2 flex w-full items-center justify-between">
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
                  <Tag key={label.id} fontSize={'xx-small'} colorScheme="whatsapp">
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
        </HStack>
      </div>
    </div>
  )
}
