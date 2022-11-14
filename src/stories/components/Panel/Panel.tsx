import React from "react"


interface PannelProps{
    size:string,
    

}

export const Pannel = ({
 
 
    
    children,
    
  }: PannelProps) => {
   
    return (
   
      <StyledPannel
        type="panel"
        size={size}
      >
        {children}
      </StyledPannel>
  
    )
  }

  export default Pannel