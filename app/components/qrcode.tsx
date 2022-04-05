import * as React from 'react'
import ReactQRCode from 'qrcode.react'
import { toPng } from 'html-to-image'
import { Button, useToast } from '@chakra-ui/react'

export default function QRCode({ value }: { value: string }) {
  const ref = React.useRef<HTMLDivElement>(null)

  const toast = useToast()

  const downloadQRcode = React.useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'qr-code.png'
        link.href = dataUrl
        link.click()
      })
      .catch(() => {
        toast({
          title: 'Unable to download QR code',
          status: 'error',
        })
      })
  }, [ref, toast])

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center rounded-md border p-4">
        <div className="fit-content mx-auto min-h-[200px] min-w-[200px]">
          <div ref={ref} className="rounded-md bg-white p-4">
            <ReactQRCode value={value} size={200} renderAs="svg" />
          </div>
        </div>
      </div>
      <Button mt={4} w={['full', 'initial', 'initial', 'initial']} onClick={() => downloadQRcode()}>
        Download QR code
      </Button>
    </div>
  )
}
