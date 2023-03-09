import styled from "styled-components"
import {MoonIcon} from "@heroicons/react/solid"
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const StyledLabel = styled.label`
    input{
        position:fixed;
        left:-9999999px
    }

    input ~ div {
        width:70px;
        height:30px;
        background:#eee;
        border-radius:16px;
        position:relative;
    }
    svg{
        height:28px;
        color:#fff;
        background-color:#ccc;
        border-radius:20px;
        position:absolute;
        top:1px;
        left:1px;
        transition:all .4s ease;
    }
    input:checked ~ div{
        background:#668;
        svg{
            background-color:#224;
            left:40px;
        }
    }
`

function Toggler() {
    const theme = useContext(ThemeContext)
    return(
        <StyledLabel>
            <input type="checkbox" checked={theme.darkMode} 
            onChange={()=>theme.setDarkMode(oldValue => !oldValue)}/>
            <div>
                <MoonIcon/>
            </div>
        </StyledLabel>
    )
}

export default Toggler;