export const generateUuid = async () => {
  const { DeviceUUID } = await import('device-uuid')
  const navigatorInfo = window.navigator
	const screenInfo = window.screen
  const infoUa = navigatorInfo.userAgent
	const infoPixel = screenInfo.pixelDepth || ''
  const uuid = new DeviceUUID().get()
  const du = new DeviceUUID().parse()
  const dua = [
    infoUa,
    du.language,
    du.platform,
    du.os,
    du.cpuCores,
    du.isAuthoritative,
    du.silkAccelerated,
    du.isKindleFire,
    du.isDesktop,
    du.isMobile,
    du.isTablet,
    du.isWindows,
    du.isLinux,
    du.isLinux64,
    du.isMac,
    du.isiPad,
    du.isiPhone,
    du.isiPod,
    du.isSmartTV,
    du.pixelDepth,
    du.isTouchScreen,
    infoPixel
  ]
  const uuidNext = du.hashMD5(dua.join(':'))
  return [uuid, uuidNext].join('-')
}
