import Header from './components/Header'
import HeaderTablet from './components/HeaderTablet';
import useWindowWidth from './hooks/useWindowWidth';

function App(){
    const windowWidth = useWindowWidth();
    const isTablet = windowWidth < 1024;

    return(
        <>
            {isTablet ? null : <Header />}   
        </>
        
    )
}

export default App