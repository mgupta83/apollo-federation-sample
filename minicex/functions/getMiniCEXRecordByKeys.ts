import {IMiniCEXData, IMiniCEXKey} from '../interfaces'
import {minicexRecords} from '../datasources'

export default (key: IMiniCEXKey):IMiniCEXData => {
  return minicexRecords.filter(i => i.encounterId === key.encounterId)?.[0]
}