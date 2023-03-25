function List() {
    const arr = ['a', 'b', 'c']
    return (
      <div>
        {
          arr.map(val => {
            return (
              <div>
                {val}
                {
                  val==='a' ? [1,2,3].map(num => {
                    return <div>{num}</div>
                  })
                  : null
                }
              </div>
            )
          }
        )}
      </div>
    )
  }