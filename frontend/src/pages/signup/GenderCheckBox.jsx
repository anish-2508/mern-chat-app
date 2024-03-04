import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex ml-4 mb-4'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==='male' ? "selected" : ""}`}>
                <span className='lebel-text'>
                    Male
                </span>
                <input type='checkbox' className='checkbox border-white'
                checked= {selectedGender==='male'}
                onChange={()=> onCheckboxChange("male")}/>
            </label>
        </div>
            
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender==='female' ? "selected" : ""}`}>
                <span className='lebel-text'>
                    Female
                </span>
                <input type='checkbox' className='checkbox border-white'
                checked= {selectedGender==='female'}
                onChange={()=> onCheckboxChange("female")}/>
            </label>
        </div>

        
    </div>
  )
}

export default GenderCheckBox





// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex ml-4 mb-4'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='lebel-text'>
//                     Male
//                 </span>
//                 <input type='checkbox' className='checkbox border-white'/>
//             </label>
//         </div>
            
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//                 <span className='lebel-text'>
//                     Female
//                 </span>
//                 <input type='checkbox' className='checkbox border-white'/>
//             </label>
//         </div>

        
//     </div>
//   )
// }

// export default GenderCheckBox
