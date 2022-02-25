# Json to excel action

This action returns the excel report from zap and mobsf json results.

## Inputs

## `zap`

**Required** Path to Zap Json report.
## `mobsf`

**Required** Path to Mobsf Json report.

## Outputs

## `report.xlsx`

The excel report
## Example usage

```uses: actions/iib0011/json2excel-action@main
with:
  zap: path/to/zap
  mobsf: path/to/mobsf