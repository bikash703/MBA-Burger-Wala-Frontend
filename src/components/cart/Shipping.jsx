import React from 'react';
import {Country,State} from 'country-state-city';

const Shipping = () => {
  return (
    <div className='shipping'>
    <main>
        <p>Shipping details</p>
        <form >
            <div>
                <label>H.No.</label>
                <input type="text" placeholder='Enter your House No.' />
            </div>
            <div>
                <label>City</label>
                <input type="text" placeholder='Enter City' />
            </div>
            <div>
                <label>Country</label>
                <select>
                    <option value="">Country</option>
                    {
                        Country && Country.getAllCountries().map((i)=>(
                    <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label>State</label>
                <select>
                    <option value="">State</option>
                    {
                        State && State.getStatesOfCountry("IN").map((i)=>(
                    <option value={i.isoCode} key={i.isoCode} >{i.name}</option>
                        ))
                    }
                </select>
            </div>
          
            <div>
                <label>Pin code</label>
                <input type="number" placeholder='Enter pincode' />
            </div>
            <div>
                <label>Phone No.</label>
                <input type="text" placeholder='Enter Phone No.' />
            </div>
            <button type='submit'>Confirm Order</button>
        </form>
    </main>
    </div>
  )
}

export default Shipping
