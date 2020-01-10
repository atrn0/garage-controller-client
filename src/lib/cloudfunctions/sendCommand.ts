import { ErrorResponse, instance } from '@/lib/cloudfunctions/common'

interface SendCommandRequest {
  cmd: 'push' | 'on' | 'off'
  pin: number
}

const sendCommand = async (
  req: SendCommandRequest
): Promise<ErrorResponse | null> => {
  const res = await instance.post('/handleCommand', req, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
  if (res.status !== 204) {
    return res.data
  }
  return null
}

export default sendCommand
