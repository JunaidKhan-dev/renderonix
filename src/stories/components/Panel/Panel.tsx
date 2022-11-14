

interface PannelProps{
    
}

export const Pannel = ({
 
    size = "medium",
    
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