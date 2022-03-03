import { ClipboardContent } from '@prisma/client'
import moment from 'moment'

export default function ClipboardContent(props: ClipboardContent) {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold truncate">{props.title}</h2>
        <p className="truncate">{props.content}</p>
        <time className="text-sm text-gray-500">{moment(props.createdAt).calendar()}</time>
      </div>
    </div>
  )
}