import React from 'react'
import '../Styles/Chardham.css'

const Chardham = () => {
  return (
    <div>
      
   <div className="container d-flex">
     <div className="box-1 " style={{marginTop:'85px'}}>
       <h2 className='text-center'>SIGHTSEEING</h2>
     </div>
     <div className="mainbox" style={{border:'2px solid black', borderRadius:'8px', height:'100%', width:'auto',paddingLeft:'50px', paddingRight:'50px',boxsizing:'border-box' }}>


     <h2 className='text-center'>2 Night Haridwar</h2>
     <div className="box-2  mt-4"style={{border:'2px solid black', borderRadius:'8px',backgroundColor:'#989692', height:'100%', width:'auto', boxsizing:'border-box'}}>
       <h3 className='text-center'>SightSeeing</h3>
       <h4 className='text-center'>Har ki puri, Santikunj Gayatri pariwar, Mansadevi temple, Oavandham, Daksh mahadev temple, Saptrishi ashram, Chandi Devi temple, Bharat Mata temple, Pavandham, Bhimgoda Barrage, Vaishnodevi temple, Anandmayi ashram</h4>
     </div>
     <h2 className='text-center'>1 Night Rishikesh</h2>
     <div className="box-2  mt-4"style={{border:'2px solid black', borderRadius:'8px',backgroundColor:'#989692', height:'100px', width:'auto', boxsizing:'border-box'}}>
       <h3 className='text-center'>SightSeeing</h3>
       <h4 className='text-center'>Ram jhula, Laxman jhula, Neelkanth, mahadev temple, Beatles Ashram, Bharat mandir</h4>
     </div>
     <h2 className='text-center'>1 Night Mussoorie</h2>
     <div className="box-2  mt-4"style={{border:'2px solid black', borderRadius:'8px',backgroundColor:'#989692', height:'100px', width:'auto', boxsizing:'border-box'}}>
       <h3 className='text-center'>SightSeeing</h3>
       <h4 className='text-center'>Lake mist, Mall road, Kempty falls, Dhanaulti, jwalaji temple</h4>
     </div>
     <h2 className='text-center'>1 Night Kedarnath</h2>
     <div className="box-2  mt-4"style={{border:'2px solid black', borderRadius:'8px',backgroundColor:'#989692', height:'100px', width:'auto', boxsizing:'border-box'}}>
       <h3 className='text-center'>SightSeeing</h3>
       <h4 className='text-center'>Gaurikund temple, Gaurikund, Sonprayag, Bhairav temple</h4>
     </div>
     </div>
     {/* <div className="box-3"><img src='logo.png'/></div>
     <div className="box-4"><img src='logo.png'/></div> */}
   </div>
    </div>
  )
}

export default Chardham
