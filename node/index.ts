import type { ClientsConfig } from '@vtex/api'
import { LRUCache, Service, method } from '@vtex/api'

import { Clients } from './clients'
import generateStyles from './middlewares/generareStyles'

const TIMEOUT_MS = 800
const memoryCache = new LRUCache<string, never>({ max: 5000 })

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

export default new Service({
  clients,
  routes: {
    globalStyleVars: method({
      GET: generateStyles,
    }),
  },
})
