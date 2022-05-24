import React from 'react'

function Alert(props) {
    const setCaps=(word)=>{
        const char=word.toLowerCase();
        return char.charAt(0).toUpperCase() + char.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.message} alert-dismissible fade show`} role="alert">
  <strong>{setCaps(props.alert.message)} : </strong>{props.alert.state}
</div>
  )
}

export default Alert
