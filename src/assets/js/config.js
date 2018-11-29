let domain = process.env.NODE_ENV === 'development' ? 'sit.newton.net' : location.host.split(':')[0]
const config = {
  domain: domain,
  origin: `${window.location.protocol}//${domain}`,
  imageType: /\.(jpg|png|jpeg|bmp)/i,
  protocol: window.location.protocol === 'https:' ? 'wss://': 'ws://'
}

export default config
