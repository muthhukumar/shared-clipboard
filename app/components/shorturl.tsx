import type { ShortURL as ShortURLType } from '@prisma/client'

import * as React from 'react'
import {
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Tag,
  Link,
  useToast,
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useNavigate } from '@remix-run/react'
import moment from 'moment'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { copyToClipboard } from '~/utils/browser'
import { composeUrl } from '~/utils'

export default function ShortURL(props: ShortURLType) {
  const navigation = useNavigate()

  const toast = useToast()

  const [quickUrl, setQuickUrl] = React.useState<string>('')

  React.useEffect(() => {
    const url = new URL(`${window.location.href}`)
    setQuickUrl(`${composeUrl(url, { includePathname: false })}/r/${props.slug}`)
  }, [props.slug])

  const copy = (url: string) => {
    copyToClipboard(url, () => {
      toast({
        title: 'URL successfully copied to clipboard',
        status: 'success',
      })
    })
  }
  return (
    <div className="flex w-full flex-col items-start gap-y-1 rounded-md py-2">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg">{props.title}</p>
        <HStack>
          <Button onClick={() => copy(quickUrl)} size="xs">
            Copy Short URL
          </Button>
          <Menu>
            <MenuButton>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigation(`/shorturl/${props.id}/edit`)}>Edit</MenuItem>
              <MenuItem onClick={() => navigation(`/shorturl/${props.id}/delete`)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'pink'} p="1">
            Slug: {props.slug}
          </Tag>
          <Tag fontSize={'x-small'} colorScheme="purple" w="100%">
            <Link href={props.url} isExternal>
              <p className="overflow-clip break-all">{props.url}</p> <ExternalLinkIcon mx="2px" />
            </Link>
          </Tag>
          {/* {(isOverDue || isUpcoming) && !props.completed && (
            <Tag fontSize={'xx-small'} colorScheme={isUpcoming ? 'green' : 'red'}>
              {isOverDue ? `Overdue ${dueString}` : `Due ${dueString}`}
            </Tag>
          )} */}
          {/* {hasLabels
            ? labels.map((label) => {
                return (
                  <Tag  key={label.id} fontSize={'xx-small'} colorScheme="whatsapp">
                    {label.label}
                  </Tag>
                )
              })
            : null} */}
        </HStack>
        <HStack pl="2" spacing={2}>
          {props.updatedAt ? (
            <Tag ml="auto" fontSize={'xx-small'} colorScheme={'linkedin'} p="1">
              {moment(props.updatedAt).calendar()}
            </Tag>
          ) : null}
        </HStack>
      </div>
    </div>
  )
}
