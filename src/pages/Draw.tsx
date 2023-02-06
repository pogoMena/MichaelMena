import * as React from 'react';
import { useState } from 'react';

export const Draw = (props: any) => {
    const [shapes, setShapes]: any = useState<JSX.Element[]>([]);
    const [shape, setShape] = useState<string>("point");


    const HandleMouseDown = (event: any) => {
        var [x,y] = newClickCoords(event);
        switch (shape) {
            case 'point': {
                break;
            }
            case 'rectangle': {
                break;
            }
            default: {

            }
        }
    }

    const HandleMouseUp = (event: any) => {
        switch (shape) {
            case 'point': {
                break;
            }
            case 'rectangle': {
                break;
            }
            default: {

                break;
            }
        }

    }

    const newClickCoords = (event: any) => {
        var x = event.clientX;
        var y = event.clientY;
        return [x, y];
    }

    const addCircle = (event: any) => {
        let [x, y] = newClickCoords(event);
        let newCircle = (
            <div
                style={{ position: 'absolute', borderRadius: '100%', height: '5px', width: '5px', left: x, top: y, border: '1px solid black', backgroundColor: 'red' }}
                key={shapes.length + 1}
            />
        );
        let allShapes = [...shapes, newCircle];
        setShapes(allShapes);
    };

    const removeCircle = () => {
        let allShapes = shapes.slice(0, -1)
        setShapes(allShapes);
    };

    return (
        <>
            <button onClick={removeCircle}>Undo</button> <button>Rectangle</button>
            <div style={{ width: '100%', height: '100vh', background: 'beige' }} onClick={addCircle} onMouseDown={HandleMouseDown} onMouseUp={HandleMouseUp}>

                {shapes}
            </div>
        </>
    );
}
