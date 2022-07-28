import Citi from "./Citi"

function Main(props) {
  //togo throu data
  const { cities } = props
  return (
    <div>
      {cities.map((citi, index) => {
        return <Citi citiData={citi} key={index} />
      })}
    </div>
  )
}
export default Main
