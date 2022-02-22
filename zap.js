const getZapSheetConfig = (zap) => {
    console.log("2222222")
    if (!zap) return
    const alerts = zap.site[0].alerts
    const valuable = alerts.map((alert) => {
        return {
            risk: alert.riskdesc.split(" ")[0],
            desc: alert.desc.slice(3, -4),
            name: alert.name
        }
    })
    console.log("333333333333")

    const riskOccurences = valuable.map(alert => alert.risk).reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    const alertsSummaryConfig = [
        ["Summary of alerts", ""],
        ["Risk level", "Number of alerts"], ...Object.entries(riskOccurences)
    ]
    const valuableTable = valuable.map((valuable) => {
        return [
            [valuable.risk, valuable.name],
            ["Description", valuable.desc]
        ]
    })
    const alertDetailsConfig = [
        ["Alert details", ""], ...valuableTable.reduce((previous, current) => {
            return [...previous, ...current]
        })
    ]
    return [...alertsSummaryConfig, ["", ""], ...alertDetailsConfig];
}

module.exports={getZapSheetConfig}