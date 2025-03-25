import CryptoJS from 'crypto-js'

// 自动登录
export async function autoLogin ({ store, router }, user, token, timestamp, redirect) {
  if (user && token && timestamp) {
    // 时间戳校验（5分钟内有效）
    // console.log('时间戳校验', Date.now(), parseInt(timestamp))
    if (Date.now() - parseInt(timestamp) < 300000) {
      // console.log('5分钟内有效')
      const secret = 'cucmp_salt' // 固定盐值
      const hash = generateToken(user, parseInt(timestamp), secret)
      const expectedToken = hash.toString().substring(0, 16)
      console.log('expectedToken', expectedToken)
      console.log('token', token)

      if (token === expectedToken) {
        try {
          await store.dispatch('auth/login', {
            username: user,
            password: 'UWhmNFJmNFNXR0dZbVRicHDwdOwm2sWslxrE2lrxlBuAQPOmyWspm21M/lbWiENL',
            domain: 'default',
          })
          router.replace(redirect || '/')
          return true
        } catch (e) {
          console.error({ message: '自动登录失败' })
          return false
        }
      }
    }
  }
}

// token生成方法
export function generateToken (user, timestamp, secret) {
  const data = CryptoJS.MD5(`${user}|${timestamp}|${secret}`)
  return data
}
