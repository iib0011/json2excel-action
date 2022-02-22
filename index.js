const core = require('@actions/core');
const github = require('@actions/github');
const xlsx = require('node-xlsx');
const fs = require("fs");
const {
    getZapSheetConfig
} = require('./zap');
const {
    getMobsfSheetConfig
} = require('./mobsf');
try {
    let zapRawData;
    let mobsfRawData;
    if (fs.existsSync(core.getInput("zap"))) {
        console.log("6666666666666666")
        zapRawData = fs.readFileSync(core.getInput("zap"));
    }
    if (fs.existsSync(core.getInput("mobsf"))) {
        console.log("77777777777777")
        mobsfRawData = fs.readFileSync(core.getInput("mobsf"));
    }
    const zap = zapRawData ? JSON.parse(zapRawData) : null;
    const mobsf = mobsfRawData ? JSON.parse(mobsfRawData) : null;
    console.log("8888888888888888")
    const sheets = []
    if (zap) {
        sheets.push({
            name: 'OWASP Zap',
            data: getZapSheetConfig(zap)
        })
    }
    if (mobsf) {
        sheets.push({
            name: 'Mobsf',
            data: getMobsfSheetConfig(mobsf)
        })
    }
    console.log("nnnnnnnnnnnn", sheets)
    const buffer = xlsx.build(sheets);
    console.log("9999999999999999")
    const path = "report.xlsx";
    fs.createWriteStream(path).write(buffer);
    console.log("100000000000000000")
} catch (error) {
    core.setFailed(error.message);
}