import { HStack, Tag, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Vote } from '@prisma/client'
import moment from 'moment'
import { BsArrowUp, BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs'
import { Form, useNavigate } from 'remix'

export default function Vote(props: Vote) {
  const navigation = useNavigate()
  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <p className="text-lg">{props.title}</p>
      <div className="flex items-center justify-between w-full">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'purple'}>
            {props.votes} votes
          </Tag>
          {props.label ? (
            <Tag fontSize={'x-small'} colorScheme="whatsapp">
              {props.label}
            </Tag>
          ) : null}
        </HStack>
        <HStack pl="2" spacing={2}>
          {props.updatedAt ? (
            <Tag ml="auto" fontSize={'x-small'} colorScheme={'linkedin'}>
              {moment(props.updatedAt).calendar()}
            </Tag>
          ) : null}
          <Form method="post" action={`/habits-rank/vote/${props.id}/upvote`}>
            <IconButton
              variant={'outline'}
              aria-label="Upvote"
              type="submit"
              icon={<BsArrowUp />}
              size="sm"
            />
          </Form>
          <Form method="post" action={`/habits-rank/vote/${props.id}/downvote`}>
            <IconButton
              variant={'outline'}
              type="submit"
              aria-label="Down vote"
              icon={<BsArrowDown />}
              size="sm"
            />
          </Form>

          <Menu>
            <MenuButton>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigation(`/habits-rank/vote/${props.id}/edit`)}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => navigation(`/habits-rank/vote/${props.id}/delete`)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </div>
    </div>
  )
}
