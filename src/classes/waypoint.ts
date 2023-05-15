import Orbital from './orbital'
import Trait from './trait'
import Chart from './chart'
import Faction from './faction'

export default class Waypoint {
  systemSymbol?: string
  symbol?: string
  type?: string
  x?: number
  y?: number
  orbitals: Orbital[] = []
  traits: Trait[] = []
  chart: Chart = new Chart()
  faction: Faction = new Faction()
}
