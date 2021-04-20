import React, { useState } from 'react'

function Login(props) {
  const { value } = props
  return (
    <div>
      <input type="text" value={value} onChange={({ target: { value } }) => {
        props.setValue(value)
      }} />
      <button type="submit"
        onClick={() => {
          if(value){
            props.history.go(-1)
          }else{
            alert('请登录')
          }
        }}
      >
        登录
      </button>
    </div>
  )
}

export default Login
