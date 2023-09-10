const Status = () => {
  const status = true
  return (
  <h3 style={{
    color: status? "#00ff9f" : "#f64348"
  }}>
    Current Status: {status?"ON":"OFF"}
  </h3>
  )
}

export {Status};