import * as React from 'react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { JsxElement } from 'typescript';

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


    const HandleMouseDown = (event: any) => {
        var [x,y] = newClickCoords(event);

        setDownX(x);
        setDownY(y);

        console.log("down x"+x);
        switch (shape) {
            case 'point': {
                addPoint(x, y);
                break;
            }
            case 'rectangle': {
                setDragging(true);
                let newShape = (
                    <div
                        style={{ position: 'absolute', height: 5, width: 5, left: x, top: y, border: '1px solid black', backgroundColor: 'red' }}
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
                        style={{ position: 'absolute', height: 5, width: 5, left: x, top: y, border: '1px solid black', backgroundColor: 'red', borderRadius: '100%' }}
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
        setActiveShape({ ...activeShape, props: { ...activeShape.props, style: newStyle } });

        console.log(activeShape);
    };

    const HandleMouseMove = (event: any) => {
        if(dragging){
            let thisShape: any = activeShape
            
            var x = event.clientX;
            var y = event.clientY;

            let width: number = 0;
            let height: number = 0;
            let finalX = downX;
            let finalY = downY;

            if (x >= downX) {
                width = x - downX;

            } else {
                width = downX - x;
                finalX = x;
            }

            if (y >= downY) {
                height = y - downY;
            } else {
                height = downY - y;
                finalY = y;
            }

            switch (shape) {
                case 'point': {

                    break;
                }
                case 'rectangle': {
                    setActiveShape((prev: React.CSSProperties) =>
                        updateStyle({ height, width, top: finalY, left: finalX, border: '1px solid black', backgroundColor: 'red', position: 'absolute' })
                    );
                    break;
                }
                case 'circle': {
                    setActiveShape((prev: React.CSSProperties) =>
                        updateStyle({ height, width, top: finalY, left: finalX, border: '1px solid black', backgroundColor: 'red', position: 'absolute', borderRadius: '100%' })
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
            case 'rectangle': {
                
                let allShapes = [...shapes, activeShape];
                setShapes(allShapes);
                setActiveShape(null);
                setDragging(false);

                break;
            }
            default: {
                let allShapes = [...shapes, activeShape];
                setShapes(allShapes);
                setActiveShape(null);
                setDragging(false);
                break;
            }
        }

    }

    const ShowColor = () => {

    }

    const newClickCoords = (event: any) => {
        var x = event.clientX;
        var y = event.clientY;
        return [x, y];
    }

    const addPoint = (x: number, y: number) => {
        let newCircle = (
            <div
                style={{ position: 'absolute', borderRadius: '100%', height: '5px', width: '5px', left: x, top: y, border: '1px solid black', backgroundColor: 'red' }}
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
        {showColor && <div className="" style={{ position: 'absolute'}} ><SketchPicker /></div>}
        <div className="row">
                <button className="col" onClick={Undo}>Undo</button>
                <button className='col' onClick={() => setShowColor(!showColor)}>Color</button>
                <button className="col" onClick={() => setShape('rectangle')}>Rectangle</button>
                <button className="col" onClick={() => setShape('circle')}>Circle</button>
                <button className="col" onClick={() => setShape('point')}>Point</button>
            </div>
            <div style={{ width: '100%', height: '100vh', background: 'beige' }} onMouseDown={HandleMouseDown} onMouseUp={HandleMouseUp} onMouseMove={HandleMouseMove}>
                {activeShape}
                {shapes}
            </div>
        </>
    );
}
