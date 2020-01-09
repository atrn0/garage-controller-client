import { ErrorResponse, instance } from '@/lib/cloudfunctions/common'

interface SendCommandRequest {
  cmd: 'push' | 'on' | 'off'
  pin: number
}

const sendCommand = async (
  req: SendCommandRequest
): Promise<ErrorResponse | null> => {
  console.log(sessionStorage.token)
  const res = await instance.post('/handleCommand', req, {
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`
    }
  })
  if (res.status !== 204) {
    return res.data
  }
  return null
}

export default sendCommand
