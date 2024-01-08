import React from "react"


const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div >
                  <img src = {val.img} alt='' className= "icon" />
                </div>
                <div className='text' style={{ color: "#fa8a34"}}>
                  <h2>{val.data}</h2>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
const awrapper = [
    {
      // img: `${images.charite}`,
      data: "+57 millions",
      title: "Scouts et bénévoles",
    },
  
    {
      // img: `${images.travail-en-equipe}`,
      data: "174",
      title: "Organisations Scoutes Nationales",
    },
    {
      // img: `${images.charite}`,
      data: "+2.7 milliards",
      title: "Heures de service aux communautés",
    },
    {
      // img: `${images.charite}`,
      data: "+16 millions",
      title: "Projets et actions de service",
    },
  ]

export default Awrapper
