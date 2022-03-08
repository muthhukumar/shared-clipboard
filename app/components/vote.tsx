import { HStack, Tag, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Vote } from '@prisma/client'
import moment from 'moment'
import { BsArrowUp, BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs'
import { useFetcher, useNavigate } from 'remix'

export default function Vote(props: Vote) {
  const navigation = useNavigate()
  const upvotesFetcher = useFetcher()
  const downvoteFetcher = useFetcher()

  const isUpvoting = upvotesFetcher.state === 'submitting'
  const isDownvoting = downvoteFetcher.state === 'submitting'

  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <p className="text-lg">{props.title}</p>
      <div className="flex items-center justify-between w-full">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'purple'}>
            {props.upvotes + -props.downvotes} votes
          </Tag>
          <Tag fontSize={'x-small'} colorScheme={'twitter'}>
            {props.upvotes} upvotes
          </Tag>
          <Tag fontSize={'x-small'} colorScheme={'red'}>
            {props.downvotes > 0 ? -props.downvotes : props.downvotes} downvotes
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
          <upvotesFetcher.Form method="post" action={`/habits-rank/vote/${props.id}/upvote`}>
            <IconButton
              isLoading={isUpvoting}
              variant={'outline'}
              aria-label="Upvote"
              type="submit"
              icon={<BsArrowUp />}
              size="sm"
            />
          </upvotesFetcher.Form>
          <downvoteFetcher.Form method="post" action={`/habits-rank/vote/${props.id}/downvote`}>
            <IconButton
              variant={'outline'}
              isLoading={isDownvoting}
              type="submit"
              aria-label="Down vote"
              icon={<BsArrowDown />}
              size="sm"
            />
          </downvoteFetcher.Form>

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
