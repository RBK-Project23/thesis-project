import React from "react"
import Heading from "./Heading";
import "./BCard.css"
// import homeAbout from "../constants/data"
import Grid from "@mui/material/Grid";
// import  Awrapper from "./Awrraper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'  >
      <Grid  style={{ margin: "50px", backdropFilter: "blur(29px)", boxShadow:"rgb(253,220,186) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",backgroundColor: "white", borderRadius: "30px"}}
          container spacing={3} className="container flexSB">
          <Grid item xs={12} md={6} className="left row" >
            <img src='imm.jpg' alt='' />
            </Grid >
            <Grid className='right row'>
            <Heading subtitle='BE PREPARED' title='About Scout Membre' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'  style={{ borderRadius: "20px"}}>
                    <div className='img'>
                      <img src={val.cover} alt=''      onError={(e) => {
                        console.error(`Error loading image: ${val.cover}`, e);
                      }} />
                    </div>
                    <div className='text' >
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
          </div>
          </Grid>
        </Grid>
      </section>
    
    </>
  )
};

const homeAbout = [
    {
        id: 1,
        cover: "/mountain.png",
        title: "Scout Mission",
        desc: "The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.",
      },
  
    {
      id: 1,
      cover: "https://img.icons8.com/ios/80/000000/law.png",
      title: "Scout Law",
      desc: "A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.",
    },
   

    {
      id: 1,
      cover: "/oath.png",
      title: "Scout Oath",
      desc: "“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”",
    },
  ];

export default AboutCard
