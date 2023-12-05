import { IOClients } from '@vtex/api'

import StylesGraphqlClient from './stylesGraphQLClient'

export class Clients extends IOClients {
  public get stylesGraphql() {
    return this.getOrSet('stylesGraphql', StylesGraphqlClient)
  }
}
