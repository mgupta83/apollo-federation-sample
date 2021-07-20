import * as typedefs from './typedefs'

import {  DocumentNode } from 'graphql';
import _ from 'underscore'


export const typeDefs = (): DocumentNode[] =>  {
  return _.flatten(_.values(typedefs).map(rec => { return _.values(rec)}))
}