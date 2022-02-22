const getMobsfSheetConfig = (mobsf) => {
    if (!mobsf) return
    const valuableFileInfo = {
        filename: mobsf.file_name,
        size: mobsf.size
    }
    const fileInformationConfig = [
        ["File information", ""], , ...Object.entries(valuableFileInfo)
    ]
    const valuableAppInfo = {
        App_name: mobsf.app_name,
        Identifier: mobsf.package_name,
        SDK_Name: mobsf.target_sdk,
        version: mobsf.version,
        Platform_version: mobsf.version_code,
    }
    const appInformationConfig = [
        ["App information", ""], , ...Object.entries(valuableAppInfo)
    ]
    const {
        appsec
    } = mobsf
    const appsecConfig = Object.entries(appsec).filter((risk) => {
        if (["high", "warning", "info"].includes(risk[0])) {
            return true
        } else return false
    })
    const valuableappsecInfoArr = appsecConfig.map(risk => {
        return risk[1].map(details => {
            return {
                title: details.title,
                description: details.description,
                riskType: risk[0]
            }
        })
    }).reduce((previous, current) => {
        return [...previous, ...current]
    })
    const appsecConfig1 = [
        ["AppSec", ""], , ...
        valuableappsecInfoArr.map(valuableappsecInfo => {
            return Object.entries(valuableappsecInfo).reduce((previous, current) => {
                return [...previous, ...current]
            })
        })
    ]
    return [...fileInformationConfig, ["", ""], ...appInformationConfig, ["", ""], ...appsecConfig1];
}
module.exports = {
    getMobsfSheetConfig
}