import { ShareOption, Vote } from '@prisma/client'

import { HStack, Tag, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsArrowUp, BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs'
import { useFetcher, useNavigate } from 'remix'
import { capitalCase } from 'change-case'
import moment from 'moment'

interface VoteProps extends Vote {
  editable?: boolean
}

export default function VoteItem(props: VoteProps) {
  const navigation = useNavigate()
  const upvotesFetcher = useFetcher()
  const downvoteFetcher = useFetcher()

  const isUpvoting =
    upvotesFetcher.state === 'submitting' ||
    (upvotesFetcher.state === 'loading' && upvotesFetcher.type === 'actionReload')
  const isDownvoting =
    downvoteFetcher.state === 'submitting' ||
    (downvoteFetcher.state === 'loading' && downvoteFetcher.type === 'actionReload')

  return (
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <div className="flex items-center justify-between w-full">
        <p className="text-lg">{props.title}</p>
        {props.editable ? (
          <HStack>
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
        ) : (
          <Tag colorScheme={'cyan'} fontSize={'x-small'}>
            {props.userEmail}'s
          </Tag>
        )}
      </div>
      <div className="flex items-center justify-between w-full mt-2">
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
        <HStack>
          {props.editable ? (
            <HStack pl="2" spacing={2}>
              {props.shareWith === ShareOption.FRIENDS || props.shareWith === ShareOption.PUBLIC ? (
                <Tag colorScheme={'green'} fontSize={'x-small'}>
                  Shared with {capitalCase(props.shareWith)}
                </Tag>
              ) : null}
            </HStack>
          ) : null}
          {props.updatedAt ? (
            <Tag ml="auto" fontSize={'x-small'} colorScheme={'linkedin'}>
              {moment(props.updatedAt).calendar()}
            </Tag>
          ) : null}
        </HStack>
      </div>
    </div>
  )
}
