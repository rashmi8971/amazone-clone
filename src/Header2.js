import React from 'react'

function Header2() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  
        navbar-light bg-primary"> 
          
        <button class="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"> 
              
            <span class="navbar-toggler-icon"></span> 
        </button> 
  
        <div class="collapse navbar-collapse" 
            id="navbarNavAltMarkup"> 
            
              
            <ul class="navbar-nav ml-auto"> 
                <li class="nav-item nav-link" 
                    href="#">About Us 
                </li> 
                  
                <li class="nav-item nav-link" 
                    href="#">Contact Us 
                </li> 
                  
                <li class="nav-item nav-link" 
                    href="#">Explore 
                </li> 
            </ul> 
        </div> 
    </nav> 
        </div>
    )
}

export default Header2
