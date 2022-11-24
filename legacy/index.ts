import containerRender from './container';
import { load, loaded } from './loadCSS';

export interface DocSection { title: string; description: string }
export interface DocTimelineItem {
    commit: string;
    author: string;
    date: Date
}

export interface DocContainer {
    selector: string;
    sections: DocSection[],
    timeline?: DocTimelineItem[]
    color?: string;
}

interface ResizeObserverEntry {
    target: HTMLElement;
    borderBoxSize: { blockSize: number; inlineSize: number }[];
    contentBoxSize: { blockSize: number; inlineSize: number }[];
    contentRect:DOMRectReadOnly;
    devicePixelContentBoxSize: { blockSize: number; inlineSize: number }[];
}
declare class ResizeObserver {
    constructor(cb: (entries: ResizeObserverEntry[]) => void)
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

export default function useWebDoc(docs: DocContainer[], options: { startVisible: boolean } = { startVisible: true }) {

    if(!loaded) {
        load();
    }

    const refreshContainersPosition = () => {

        docs.forEach(doc => {
            const container = document.querySelector(`[doc-ref="${doc.selector}"]`) as HTMLElement;
            const reference = document.querySelector(doc.selector) as HTMLElement;
            if(reference) {
                container.style.left = `${reference.offsetLeft - 4}px`;
                container.style.top =  `${reference.offsetTop - 10}px`;
                container.style.width =  `${reference.clientWidth + 4}px`;
                container.style.height =  `${reference.clientHeight + 20}px`;
            }
        });
    };
    
    const scan = () => {

        // Pegar a referencia de todos os elementos
        docs.forEach((doc) => {
            const hasTheDoc = document.querySelector(`[doc-ref="${doc.selector}"]`) as HTMLElement;
            if(!hasTheDoc) {
                const el = document.querySelector(doc.selector) as HTMLElement;
                if(el) {
                    const container = containerRender(doc);
                    el.parentElement?.appendChild(container);
                }
            }

        });

        const observer = new ResizeObserver(() => refreshContainersPosition());
        observer.observe(document.body);
    };

    const toogleVisibility = () => {
        document.body.classList.contains('--hide-docs')
            ? document.body.classList.remove('--hide-docs')
            : document.body.classList.add('--hide-docs');
    };

    const dispose = () => {
        docs.forEach(doc => {
            const container = document.querySelector(`[doc-ref="${doc.selector}"]`) as HTMLElement;
          
            if(container) {
                container.remove();
            }
        });
    };

    if(!options.startVisible) {
        toogleVisibility();
    }

    return { scan, refreshContainersPosition, toogleVisibility, dispose };
}

if (typeof window !== 'undefined') {
    (window as any).useWebDoc = useWebDoc;
}