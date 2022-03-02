import { ClipboardContent } from '@prisma/client'
import moment from 'moment'

export default function ClipboardContent(props: ClipboardContent) {
  return (
    <div className="w-full p-4 border rounded-md">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="truncate">{props.content}</p>
        <time className="text-sm text-gray-500">{moment(props.createdAt).calendar()}</time>
      </div>
      {/* <div className="flex items-center justify-end mt-2">
        <button
          className="px-2 py-1 text-white bg-blue-500 border rounded-md"
          onClick={() => navigation(`/clipboard/${props.id}`)}
        >
          Edit
        </button>
        <Form method="delete" action="/?index">
          <input type="hidden" value={props.id} name="clipboardContentId" />
          <button className="px-2 py-1 text-white bg-red-500 border rounded-md" type="submit">
            Delete
          </button>
        </Form>
      </div> */}
    </div>
  )
}
