import instance from '@/lib/cloudfunctions/common'

interface HandleCommandRequest {
  cmd: 'push' | 'on' | 'off'
  pin: number
}

interface ErrorResponse {
  message: string
}

const handleCommand = async (
  req: HandleCommandRequest
): Promise<ErrorResponse | null> => {
  const res = await instance.post('/handleCommand', req)
  if (res.status !== 204) {
    return res.data
  }
  return null
}

export default handleCommand
