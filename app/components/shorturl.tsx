import { ShortURL as ShortURLType } from '@prisma/client'

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
import { useNavigate } from 'remix'
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
    <div className="flex flex-col items-start w-full py-2 rounded-md gap-y-1">
      <div className="flex items-center justify-between w-full">
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
      <div className="flex items-center justify-between w-full mt-2">
        <HStack>
          <Tag fontSize={'x-small'} colorScheme={'pink'}>
            Slug: {props.slug}
          </Tag>
          <Tag fontSize={'x-small'} colorScheme="purple">
            <Link href={props.url} isExternal>
              {props.url} <ExternalLinkIcon mx="2px" />
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
                  <Tag fontSize={'xx-small'} colorScheme="whatsapp" key={label.id}>
                    {label.label}
                  </Tag>
                )
              })
            : null} */}
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
