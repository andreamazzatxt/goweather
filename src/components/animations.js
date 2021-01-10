export const arrow = (direction) =>{
    switch(direction){
        case 'right':
            return {x : 20}
        case 'left':
            return {x : -20}
        case 'up':
            return {y : -20}
        case 'down':
            return {y : 20}
        default:
            return {}
    }
}
export const swift = (deg) =>{
    return {transform: `rotate(${deg}deg)`}
}

// animate Exit

export const offScreen = (axe) =>{
    if (axe === 'x') { 
        return {
        x: 300, 
        opacity: 0   
        }
    } else {
        return {
        y: 300, 
        opacity: 0   
        } 
    }
    
} 
export const onScreen = (axe) => {

    if (axe === 'x') { 
        return {
        x: 0, 
        opacity: 1   
        }
    } else {
        return {
        y: 0, 
        opacity: 1   
        } 
    }

}

export const exitScreen = (axe) => {
    if (axe === 'x') { 
        return {
        x: -300, 
        opacity: 0 
        }
    } else {
        return {
        y: -300, 
        opacity: 0  
        } 
    }

}

export const spring = {
    type: "spring",
    stiffness: 700,
    damping: 20
  };