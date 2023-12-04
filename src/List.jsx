const pokemon = [
  'Bulbasaur',
  'Charmander',
  'Squirtle',
  'Pikachu',
  'Jigglypuff',
  'Meowth',
  'Eevee',
  'Snorlax'
]

const List = () => {
  return (
    <div>
      <ul>{pokemon.map(mon=> {
        return <li key={mon}>{mon}</li>
        })}
      </ul>
    </div>
  )
}

export default List