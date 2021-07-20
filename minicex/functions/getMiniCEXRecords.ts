import {IMiniCEXData} from '../interfaces'
import {minicexRecords} from '../datasources'

export default ():IMiniCEXData[] => {
  return minicexRecords
}