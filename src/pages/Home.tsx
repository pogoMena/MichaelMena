import * as React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef, useState } from 'react';
import styles from '../styles.module.css';
import MallBuddyProgif from '../images/MallBuddyProgif.gif';
import spongebobgif from '../images/spongebobgif.gif';
import SMDA from '../images/SMDA.gif'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';

export interface IAppProps {
}

export default function Home(props: IAppProps) {
    const parallax = useRef<IParallax>(null!)
    const alignCenter = { display: 'flex', alignItems: 'center' }

    const [showModal, setShowModal] = useState(false);
    const [modalSelect, setModalSelect] = useState("");

    const ModalHandler = () => {
        const handleClose = () => setShowModal(false);

        const DrawModal = () => {
            return (
                <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Draw App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row"><Link to='https://github.com/pogoMena/MichaelMena/blob/main/src/pages/Draw.tsx'>GitHub repository</Link></div>
                        <p>
                            Simple drawing application I made using ReactJS
                            <br />
                            Rather than using Canvas and built in methods, I made all of the shapes/Designs using classic CSS. If you do some drawing and then inspect elements, you will see what I mean.
                            <br />
                            Very fun thought experiment I intend to build on
                        </p>
                    </Modal.Body>
                </Modal>
            )
        }

        const MBPModal = () => {
            return (
                <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    size="lg"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>MallBuddy Pro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row"><Link to='https://github.com/pogoMena/MallBuddyPro'>GitHub repository</Link></div>
                        <p>
                            <strong>Backend:</strong> NodeJS with express and MySQL DB

                            <br /> <strong>Frontend:</strong> ReactJS with Google API's

                            <br />This application was designed for surveying different stores within a selected shopping mall. The user has the option to log in, make an account, or continue as a guest.

                            <br /><strong>Mall Search Page:</strong>

                            <br />After landing on the mall search page, the Google places API has been configured to only suggest different shopping malls based on what the user has entered, and closeness to current location. There is also an option to go to the users favorite mall, assuming it has already been set. Once a mall has been selected, the user is brough to the Item Search page.

                            <br /><strong>Item Search Page:</strong>

                            <br />The user will be brought to the mall that has been selected in the previous page and there will be a search bar at the top. This bar is used for entering the type of item that the user is shopping for. For example, if the user enters ‘hats’, a google text search API is used to return all of the stores that reference hats in its metadata. When scrolling down, all of the relevant stores are listed based on relevance of the search term. The user has an option to sort stores based on all questions currently on the survey. The user can take surveys for each store in the results, after taking the survey, the order displayed on the item search page will be updated accordingly. </p></Modal.Body>
                </Modal>
            )
        }

        const SMDAModal = () => {
            return (
                <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    size="sm"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Social Media Monitoring App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row"><Link to='https://github.com/pogoMena/SocialMediaMonitoring'>GitHub repository</Link></div>
                        <strong>Backend:</strong> NodeJS with express and MySQL DB

                        <br /> <strong>Frontend:</strong> ReactJS with Google API's
                        <p>This application simulates the sorting of different social media posts based of the severity of the disaster </p></Modal.Body></Modal>
            )
        }

        switch (modalSelect) {
            case 'draw':
                return <DrawModal />
            case 'mbp':
                return <MBPModal />
            case 'smda':
                return <SMDAModal />
            default:
                return <div>well this is quite the conundrum</div>
        }
    }

    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={4}>
                <ParallaxLayer offset={0} speed={1} style={{ ...alignCenter, justifyContent: 'center', backgroundColor: '#87BCDE' }} >

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', borderRight: '1px solid black', borderLeft: '1px solid black' }}>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-2} style={{ ...alignCenter, marginLeft: '29%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>M</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.1} style={{ ...alignCenter, marginLeft: '32%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>I</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.2} style={{ ...alignCenter, marginLeft: '34%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>C</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.3} style={{ ...alignCenter, marginLeft: '37%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>H</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.4} style={{ ...alignCenter, marginLeft: '40%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>A</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.5} style={{ ...alignCenter, marginLeft: '43%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>E</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.6} style={{ ...alignCenter, marginLeft: '46%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>L</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.8} style={{ ...alignCenter, marginLeft: '52%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>M</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-2.9} style={{ ...alignCenter, marginLeft: '55%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>E</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-3} style={{ ...alignCenter, marginLeft: '58%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>N</h1></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-3.1} style={{ ...alignCenter, marginLeft: '61%' }} >
                    <div style={{ textAlign: 'center', width: '3%' }} ><h1>A</h1></div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start', zIndex: -1 }} >
                    <div className={`${styles.projectcard} ${styles.sticky}`} >
                        <h1>Projects</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} factor={.5} style={{ ...alignCenter, justifyContent: 'flex-end', zIndex: 1 }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <div className="row">
                            <h1 className='col-10'>
                                <Link className="link" to='https://visionary-licorice-a0bf3c.netlify.app'>MallBuddy Pro</Link>
                            </h1>
                            <div className='col-2 p-0 align-middle'>
                                <Button className='p-0' onClick={() => { setModalSelect('mbp'); setShowModal(true) }}>Info</Button></div>
                        </div>
                        <div className='row'>
                            <img src={MallBuddyProgif} alt="loading..." />
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.99} speed={1} factor={.5} style={{ ...alignCenter, justifyContent: 'flex-end', zIndex: 1 }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <div className="row">
                            <h1 className='col-10'>
                                <Link className="link" to='/draw'>Drawing App</Link>
                            </h1>
                            <div className='col-2 p-0 align-middle'>
                                <Button className='p-0' onClick={() => { setModalSelect('draw'); setShowModal(true) }}>Info</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <img src={spongebobgif} alt="loading..." />
                        </div>
                    </div>
                </ParallaxLayer>

                

                <ParallaxLayer offset={2} speed={1} factor={.5} style={{ ...alignCenter, justifyContent: 'flex-end', zIndex: 1 }} >
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <div className="row">
                            <h1 className='col-10'>
                                <Link className="link" to='https://github.com/pogoMena/SocialMediaMonitoring'>Monitoring App</Link>
                            </h1>
                            <div className='col-2 p-0 align-middle'>
                                <Button className='p-0' onClick={() => { setModalSelect('smda'); setShowModal(true) }}>Info</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <img src={SMDA} alt="loading..." />
                        </div>
                    </div>
                </ParallaxLayer>

                <ModalHandler />
                <ParallaxLayer offset={3} speed={1} style={{ ...alignCenter, justifyContent: 'Center', backgroundColor: '#87BCDE' }}>
                    <h1>
                        Cool things about ol' Mena
                    </h1>
                </ParallaxLayer>

            </Parallax>
        </div>
    );


}

