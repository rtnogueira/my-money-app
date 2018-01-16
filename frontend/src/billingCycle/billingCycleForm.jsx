import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class BillingCycleForm extends Component {
  render() {
    return (
      <form role='form'>
        <div className='box-footer'>
        
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default BillingCycleForm
