export default function NoItems({ title = 'No items found!.' }: { title: string }) {
  return (
    <div className="my-2 w-full rounded-md border p-8">
      <p className="text-center font-bold">{title}</p>
    </div>
  )
}
