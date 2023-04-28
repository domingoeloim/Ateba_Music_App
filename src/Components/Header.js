import React from 'react';


const Header = () => {
    return (
        <header>
            <nav>
            
                <h1>Ateba Music App</h1>

                <div tabindex="0" class="hamburger">

                    <label class="visually-hidden" for="ham-check">Ouvrir menu</label>
                    <input type="checkbox" name="hamburger" id="ham-check" class="ham-input"/>

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul class="top-nav" id="ham">
                        <li tabindex="0" class="ham-link">
                            <a href="#home">Accueil</a>
                        </li>
                        <li tabindex="0" class="ham-link">
                            <a href="#playlist">Playlist</a>
                        </li>

                        <li tabindex="0" class="ham-link">
                            <a href="#contact">Contacts</a>
                        </li>
                    </ul>
                    
                </div>

            </nav>
  
        </header>
    );
}




export default Header;