import { r } from '@4backs/render-function';
import { DocContainer } from '../interfaces';

interface ContainerArgs {
    reference: HTMLElement;
    doc: DocContainer;
}

export default function container(args: ContainerArgs) {
    const { sections, selector, title, color, timeline, } = args.doc;

    const positions = {
        left: `${args.reference.offsetLeft - 6}px`,
        top:`${args.reference.offsetTop - 10}px`,
        width:`${args.reference.clientWidth + 12}px`,
        height:`${args.reference.clientHeight + 20}px`,
    };

    const container = r({
        tag: 'div',
        style: {
            boxSizing: 'border-box',
            borderRadius: '10px',
            position: 'absolute',
            transition: 'background 150ms',
            background: 'transparent',
            border: `solid ${color || 'red'}  4px`,
            top: positions.top,
            left: positions.left,
            width: positions.width,
            height: positions.height,
        }
    });
    
    return container;
}