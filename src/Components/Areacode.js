import React, { useEffect, useState } from 'react'
import { Data1 } from './Data1';
const Areacode = () => {

    const [GetPin, SetPin] = useState()
    const [GetValue, SetValue] = useState('')

    let HandleEvent = (e) => {
        SetValue(e.target.value)
    }


    let GetPinData = (e) => {
        e.preventDefault();
        if (Data1.includes(parseInt(GetValue))) {
            SetPin(true);
        } else {
            SetPin(false);
        }


    }


    useEffect(() => {
        console.log("Useeffect")
    }, [GetPin])


    return (
        <>

            <div className='container' style={{ marginTop: "100px" }} >
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='form-group'>
                            <label htmlFor='check'>Check Availablity</label>
                            <input type="number" onChange={HandleEvent} className='form-control form-control-sm' placeholder='Enter Number To Check Availablity' />
                            <button className='btn btn-sm btn-dark mt-3' onClick={GetPinData}>Check Availablity</button>
                        </div>
                    </div>

                    {
                        GetPin == true && <p className='text-success success '>Our Dilvery Is Avaialble In Your Area</p>

                    }
                    {
                        GetPin == false && GetPin !== null && <p className='text-danger success '>Our Dilvery Is Not Avaialble In Your Area</p>
                    }
                </div>
            </div>


          


        </>
    )




}

export default Areacode