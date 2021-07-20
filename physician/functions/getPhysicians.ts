import {IPhysicianData} from '../interfaces'
import {physicians} from '../datasources'

export default ():IPhysicianData[] => {
  return physicians
}