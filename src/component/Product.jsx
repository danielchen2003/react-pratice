function Product(props) {
  //empty tags = fragments

  // ;<Product
  //   title="Apple AirPods"
  //   description="Lorem ipsum dolor sit amet, graecis intellegat pertinacia cum et"
  //   image="https://cdn0.iconfinder.com/data/icons/household-items-2/100/airpod2-512.png"
  // />

  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      {/* <img src={props.image}><img/> */}
      {/* <img src={props.image} /> */}
      <img src={props.image} alt="logo" />
    </>
  )
}

export default Product

// {same as div aka css}
