export interface iGraph {
  power: number
  magic: number
  sense: number
  charm: number
}

export interface ICharacter {
  characterName: string
  type: 'power' | 'magic' | 'sense' | 'charm'
  level: number
  grahp: iGraph
  class: number
  className: string | null
  thirdClassType: 'pure' | 'hybrid' | null
}
