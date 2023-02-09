import * as React from 'react';
import { useState } from 'react';
import { JsxElement } from 'typescript';
import { SketchPicker } from 'react-color';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Line, Text } from 'react-konva';


export const Draw = (props: any) => {
    const [shapes, setShapes]: any = useState<JSX.Element[]>([]);
    const [shape, setShape] = useState<string>("point");

    const [showColor, setShowColor] = useState(false);
    const [activeShape, setActiveShape] = useState<any>(null)
    const [dragging, setDragging] = useState<boolean>(false);
    const [downX, setDownX] = useState<number>(0);
    //const [upX, setUpX] = useState<number>(0);

    const [downY, setDownY] = useState<number>(0);
    //const [upY, setUpY] = useState<number>(0);

    const [currentColor, setCurrentColor] = useState("#fff")

    const handleChangeComplete = (color: any) => {
        setCurrentColor(color.hex);
    };


    const HandleMouseDown = (event: any) => {
        var [x, y] = newClickCoords(event);

        setDownX(x);
        setDownY(y);

        switch (shape) {
            case 'point': {
                addPoint(x, y);
                break;
            }
            case 'rectangle': {
                setDragging(true);
                let newShape = (
                    <div
                        style={{ position: 'absolute', height: 5, width: 5, left: x, top: y, border: '1px solid black', backgroundColor: currentColor }}
                        key={shapes.length + 1}
                    />
                );
                setActiveShape(newShape);

                break;
            }
            case 'circle': {
                setDragging(true);
                let newShape = (
                    <div
                        style={{ position: 'absolute', height: 5, width: 5, left: x, top: y, border: '1px solid black', backgroundColor: currentColor, borderRadius: '100%' }}
                        key={shapes.length + 1}
                    />
                );
                setActiveShape(newShape);

                break;
            }
            case 'line': {
                setDragging(true);
                let newShape = (
                    <div
                        style={{ position: 'absolute', height: 0, width: 5, left: x, top: y, border: '1px solid black', backgroundColor: currentColor }}
                        key={shapes.length + 1}
                    />
                );
                setActiveShape(newShape);

                break;
            }
            default: {

            }
        }
    }
    const updateStyle = (newStyle: React.CSSProperties) => {
        if (activeShape) {
            setActiveShape({ ...activeShape, props: { ...activeShape.props, style: newStyle } });
        }


    };

    const HandleMouseMove = (event: any) => {
        if (dragging) {
            let thisShape: any = activeShape

            var x = event.clientX;
            var y = event.clientY;

            let width: number = 0;
            let height: number = 0;
            let finalX = downX;
            let finalY = downY;

            let rotation = 0;

            //0 and 180 are fine
            //90 moves up and to the right when up or down

            if (shape === 'line') {
                let lengthA = 0;
                let lengthB = 0;
                rotation = Math.atan2(y - downY, x - downX) * 180 / Math.PI;

                if (x >= downX) {
                    lengthA = x - downX;
                } else {
                    lengthA = downX - x;
                    //finalX = x;
                }

                if (y >= downY) {
                    lengthB = y - downY;
                } else {
                    lengthB = downY - y;
                    //finalY = y;
                }
                width = Math.sqrt((lengthA ** 2) + (lengthB ** 2));
                width = Math.round(width);

                if (rotation >= -90 && rotation < 0) {
                    finalX = (finalX - (width / ((180 / Math.abs(rotation))) - 1));
                    finalY = (finalY - (width / ((180 / Math.abs(rotation))) - 1));
                } else if (rotation >= 0 && rotation < 90) {
                    finalX = (finalX - (width * (rotation / 180)));
                    finalY = (finalY + (width * (rotation/180)));
                } else if (rotation >= 90 && rotation <= 180) {
                    finalX = (finalX - (width * (rotation / 180)));
                    finalY = (finalY + (width*(0.5 - (rotation - 90) * 0.005)));

                } else if (rotation >= -180 && rotation < -90) {
                    finalX = finalX-width+ (width*(0.5 - (Math.abs(rotation) - 90) * 0.005));
                    finalY = (finalY - (width*(0.5 - (Math.abs(rotation) - 90) * 0.005)));
                }
            } else {
                if (x >= downX) {
                    width = x - downX;
                } else {
                    width = downX - x;
                    finalX = x;
                }

                if (rotation) {
                    height = y - downY;
                } else {
                    height = downY - y;
                    finalY = y;
                }
            }


            switch (shape) {
                case 'point': {

                    break;
                }
                case 'rectangle': {
                    setActiveShape((prev: React.CSSProperties) =>
                        updateStyle({ height, width, top: finalY, left: finalX, border: '1px solid black', backgroundColor: currentColor, position: 'absolute' })
                    );
                    break;
                }
                case 'circle': {
                    setActiveShape((prev: React.CSSProperties) =>
                        updateStyle({ height, width, top: finalY, left: finalX, border: '1px solid black', backgroundColor: currentColor, position: 'absolute', borderRadius: '100%' })
                    );
                    break;
                }
                case 'line': {

                    setActiveShape((prev: React.CSSProperties) =>
                        updateStyle({ height: 0, width, top: finalY, left: finalX, border: '1px solid black', backgroundColor: currentColor, position: 'absolute', transform: `rotate(${rotation}deg)` })
                    );
                    break;
                }
                default: {

                    break;
                }
            }

        }


    }

    const HandleMouseUp = (event: any) => {
        switch (shape) {
            case 'point': {

                break;
            }
            default: {
                let allShapes = [...shapes, activeShape];
                setShapes(allShapes);
                console.log(activeShape)
                setActiveShape(null);
                setDragging(false);
                break;
            }
        }

    }


    const newClickCoords = (event: any) => {
        var x = event.clientX;
        var y = event.clientY;
        return [x, y];
    }

    const addPoint = (x: number, y: number) => {
        let newCircle = (
            <div
                style={{ position: 'absolute', borderRadius: '100%', height: '5px', width: '5px', left: x, top: y, border: '1px solid black', backgroundColor: currentColor }}
                key={shapes.length + 1}
            />
        );
        let allShapes = [...shapes, newCircle];
        setShapes(allShapes);
    };

    const Undo = () => {
        let allShapes = shapes.slice(0, -1)
        setShapes(allShapes);
    };

    return (
        <>
            {showColor && <div className="" style={{ position: 'absolute' }} ><SketchPicker
                color={currentColor}
                onChangeComplete={handleChangeComplete}
            /></div>}
            <div className="row">
                <button className="col" onClick={Undo}>Undo</button>
                <button className='col' onClick={() => setShowColor(!showColor)}>Color</button>
                <button className="col" onClick={() => setShape('rectangle')}>Rectangle</button>
                <button className="col" onClick={() => setShape('circle')}>Circle</button>
                <button className="col" onClick={() => setShape('point')}>Point</button>
                <button className="col" onClick={() => setShape('line')}>Line</button>
            </div>
            <div style={{ width: '100%', height: '90vh', background: 'beige' }} onMouseDown={HandleMouseDown} onMouseUp={HandleMouseUp} onMouseMove={HandleMouseMove}>


                {shapes}
                {activeShape}
            </div>
        </>
    );
}
