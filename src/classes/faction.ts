import FactionTrait from './faction-trait'

export default class Faction {
  symbol?: string
  name?: string
  description?: string
  headquarters?: string
  traits: FactionTrait[] = []
}
