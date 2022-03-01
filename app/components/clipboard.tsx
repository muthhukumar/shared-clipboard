import { Form, useNavigate } from 'remix'
import { ClipboardContent } from '@prisma/client'
import moment from 'moment'

export default function ClipboardContent(props: ClipboardContent) {
  const navigation = useNavigate()
  return (
    <div className="p-4 border rounded-md">
      <h2 className="mb-2 text-xl font-bold">{props.title}</h2>
      <p className="truncate">{props.content}</p>
      <time className="text-sm text-gray-500">{moment(props.createdAt).calendar()}</time>
      <div className="flex items-center justify-end mt-2">
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
      </div>
    </div>
  )
}
