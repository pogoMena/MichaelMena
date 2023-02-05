import * as React from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import styles from '../styles.module.css'

export interface IAppProps {
}

export default function Home(props: IAppProps) {
    const parallax = useRef<IParallax>(null!)
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={4}>
                <ParallaxLayer offset={0} speed={1} style={{ ...alignCenter, justifyContent: 'center', backgroundColor: '#87BCDE' }} >

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', borderRight: '1px solid black', borderLeft: '1px solid black' }}>
                </div>
            </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-2} style={{ ...alignCenter, marginLeft: '29%'}} >
                    <h1>M</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.1} style={{ ...alignCenter, marginLeft: '32%' }} >
                    <h1>I</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.2} style={{ ...alignCenter, marginLeft: '34%' }} >
                    <h1>C</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.3} style={{ ...alignCenter, marginLeft: '37%' }} >
                    <h1>H</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.4} style={{ ...alignCenter, marginLeft: '40%' }} >
                    <h1>A</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.5} style={{ ...alignCenter, marginLeft: '43%' }} >
                    <h1>E</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.6} style={{ ...alignCenter, marginLeft: '46%' }} >
                    <h1>L</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.7} style={{ ...alignCenter, marginLeft: '52%' }} >
                    <h1>M</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.2} style={{ ...alignCenter, marginLeft: '55%' }} >
                    <h1>E</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5} style={{ ...alignCenter, marginLeft: '58%' }} >
                    <h1>N</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.9} style={{ ...alignCenter, marginLeft: '61%' }} >
                    <h1>A</h1>
                </ParallaxLayer>


                <ParallaxLayer offset={1.2} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}><h1>Hello it is a project div</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}><h1>And another</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.8} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}><h1>And a third</h1></div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }} >
                    <div className={`${styles.card} ${styles.sticky}`} >
                        <h1>Projects</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1} style={{ ...alignCenter, justifyContent: 'Center', backgroundColor: '#87BCDE' }}>
                    <h1>
                        Cool things about ol' Mena
                    </h1>
                    </ParallaxLayer>

            </Parallax>
        </div>
    );
}
