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
                <ParallaxLayer offset={0} speed={.5} style={{ ...alignCenter, justifyContent: 'center', backgroundColor: '#87BCDE' }} >
                    <h1>Michael</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={.2} speed={1} style={{ ...alignCenter, justifyContent: 'center' }} >
                    <h1>Mena</h1>
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
