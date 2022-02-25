const core = require('@actions/core');
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
        zapRawData = fs.readFileSync(core.getInput("zap"));
    }
    if (fs.existsSync(core.getInput("mobsf"))) {
        mobsfRawData = fs.readFileSync(core.getInput("mobsf"));
    }
    const zap = zapRawData ? JSON.parse(zapRawData) : null;
    const mobsf = mobsfRawData ? JSON.parse(mobsfRawData) : null;
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
    const buffer = xlsx.build(sheets);
    const path = "report.xlsx";
    fs.createWriteStream(path).write(buffer);
} catch (error) {
    core.setFailed(error.message);
}