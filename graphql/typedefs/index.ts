import base from './base'
import * as typedefs from './typedefs'

import {  DocumentNode } from 'graphql';

export const typeDefs = (): DocumentNode[] =>  {
  var typeDefArray = (Object.values<DocumentNode>(typedefs))
  typeDefArray.unshift(base);
  return typeDefArray;
}