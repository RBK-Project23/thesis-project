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
      img: "/icons8-scout-100.png",
      data: "+57 millions",
      title: "Scouts et bénévoles",
    },
  
    {
        img: "/icons8-national-100 (1).png",
      data: "174",
      title: "Organisations Scoutes Nationales",
    },
    {
        img: "/icons8-service-100 (1).png",
      data: "+2.7 milliards",
      title: "Heures de service aux communautés",
    },
    {
        img: "/icons8-project-100 (1).png",
      data: "+16 millions",
      title: "Projets et actions de service",
    },
  ]

export default Awrapper
