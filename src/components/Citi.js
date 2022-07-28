function Citi(props) {
  const { capitol, language, population, country } = props
  return (
    <div>
      <p>Capitol:{props.citiData.capitol}</p>
      <p>Language:{props.citiData.language}</p>
      <p>Population:{props.citiData.population}</p>
      <p>Country:{props.citiData.country}</p>
      <p>Capitol222:{capitol}</p>
    </div>
  )
}

export default Citi
