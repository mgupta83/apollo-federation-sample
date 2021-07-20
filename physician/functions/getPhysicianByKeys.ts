import {IPhysicianData, IPhysicianKey} from '../interfaces'
import {physicians} from '../datasources'

export default (key: IPhysicianKey):IPhysicianData => {
  return physicians.filter(i => i.email === key.email)?.[0]
}