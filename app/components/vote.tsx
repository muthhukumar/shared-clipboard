import type { Vote } from '@prisma/client'
import { ShareOption } from '@prisma/client'

import {
  HStack,
  Tag,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { BsArrowUp, BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs'
import { useFetcher, useNavigate } from '@remix-run/react'
import { capitalCase } from 'change-case'
import moment from 'moment'

interface VoteProps extends Vote {
  editable?: boolean
}

export default function VoteItem(props: VoteProps) {
  const navigation = useNavigate()
  const upvotesFetcher = useFetcher()
  const downvoteFetcher = useFetcher()

  const archiveFetcher = useFetcher()

  const isArchiving =
    archiveFetcher.state === 'submitting' ||
    (archiveFetcher.state === 'loading' && archiveFetcher.type === 'actionReload')

  const isUpvoting =
    upvotesFetcher.state === 'submitting' ||
    (upvotesFetcher.state === 'loading' && upvotesFetcher.type === 'actionReload')
  const isDownvoting =
    downvoteFetcher.state === 'submitting' ||
    (downvoteFetcher.state === 'loading' && downvoteFetcher.type === 'actionReload')

  return (
    <div className="flex w-full flex-col items-start gap-y-1 rounded-md py-2">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg">{props.title}</p>
        {props.editable ? (
          <HStack>
            <archiveFetcher.Form
              method="post"
              action={`/habits-rank/vote/${props.id}/archive/toggle`}
            >
              <Button
                size="xs"
                type="submit"
                colorScheme={props.isArchived ? 'cyan' : 'gray'}
                isLoading={isArchiving}
                loadingText={props.isArchived ? 'Un Archiving' : 'Archiving'}
              >
                {props.isArchived ? 'Un Archive' : 'Archive'}
              </Button>
            </archiveFetcher.Form>
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
      <div className="mt-2 flex w-full items-center justify-between">
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
