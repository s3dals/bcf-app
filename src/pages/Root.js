import {Outlet} from 'react-router-dom';

import MainHeader from '../components/MainHeader/MainHeader';
import classes from './Root.module.css';

function RootLayout(){
    return(
        <>
        <MainHeader />
        <main className={classes.content}>
        <Outlet/>
        </main>
        </>
    );
}

export default  RootLayout;