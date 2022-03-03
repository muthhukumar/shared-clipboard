import ReactQRCode from 'qrcode.react'

export default function QRCode({ value }: { value: string }) {
  return (
    <div className="flex items-center justify-center w-full p-4 border rounded-md">
      <div className="p-4 mx-auto bg-white rounded-md fit-content">
        <ReactQRCode value={value} size={200} />
      </div>
    </div>
  )
}
