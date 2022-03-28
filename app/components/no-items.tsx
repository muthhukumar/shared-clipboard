export default function NoItems({ title = 'No items found!.' }: { title: string }) {
  return (
    <div className="w-full p-8 my-2 border rounded-md">
      <p className="font-bold text-center">{title}</p>
    </div>
  )
}
