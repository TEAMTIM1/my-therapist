
import { useState } from 'react'
import useDarkSide from '../../hooks/useDarkSide';
import {MdOutlineDarkMode} from 'react-icons/md'
const DarkMode = () => {

    const [ colorTheme, setTheme ] = useDarkSide();
    const [darkSide, setDarkSide] = useState (colorTheme === 'dark' ? true : false);
    console.log(darkSide);
    const ToggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

  return (
<>
   

<button>
    <MdOutlineDarkMode 

onClick={ToggleDarkMode}
 size={50} 
 />
</button>

 <h1 className='text-gray-800 dark:text-gray-300 pt-4'>{ colorTheme === 'light' ? "dark mode" : "Light mode"}</h1>
    </>
  )
}

export default DarkMode