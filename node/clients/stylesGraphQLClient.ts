import type { InstanceOptions, IOContext } from '@vtex/api'
import { AppGraphQLClient } from '@vtex/api'
import { path } from 'ramda'
import type { Colors, Style } from 'vtex.styles-graphql'

const selectedStyleQuery = `query selectedStyle {
  selectedStyle(appMetaInfoStr:"") {
    config {
      semanticColors {
        background {
          base
          base__inverted
          action_primary
          action_secondary
          emphasis
          disabled
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        hover_background {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        active_background {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        text {
          action_primary
          action_secondary
          link
          emphasis
          disabled
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        visited_text {
          link
        }
        hover_text {
          action_primary
          action_secondary
          link
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
        }
        active_text {
          link
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
        }
        border {
          action_primary
          action_secondary
          emphasis
          disabled
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        hover_border {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        active_border {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        on {
          base
          base__inverted
          action_primary
          action_secondary
          emphasis
          disabled
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
          muted_1
          muted_2
          muted_3
          muted_4
          muted_5
        }
        hover_on {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
        }
        active_on {
          action_primary
          action_secondary
          emphasis
          success
          success__faded
          danger
          danger__faded
          warning
          warning__faded
        }
      }
    }
  }
}
`

export default class StylesGraphqlClient extends AppGraphQLClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.styles-graphql@1.x', context, options)
  }

  public async getStyles(): Promise<Colors | undefined> {
    const response = await this.graphql.query<Style, Record<string, unknown>>({
      query: selectedStyleQuery,
      variables: {},
    })

    return path(
      ['selectedStyle', 'config', 'semanticColors'],
      response.data ?? {}
    )
  }
}
