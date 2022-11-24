import { r } from "vanilla-render-function";
import { DocContainer } from "..";
import section from '../section';
import timelineRender from "../timeline";

const containerRender = (data: DocContainer) => {
    const { sections, selector, color = '#0094FF', timeline } = data;
    
    return r({
        tag: 'div',
        attributes: {
            'doc-ref': selector,
            'class': 'doc-container'
        },
        style: {
            border: `dashed ${color} 2px`,
        },
        children: [
            r({
                tag: 'div',
                attributes: {
                    class: 'doc-container_wrapper'
                },
                children: [
                    // Título do container
                    r({
                        tag: 'p',
                        attributes: {
                            class: 'doc-container_title'
                        },
                        style: {
                            color
                        },
                        children: selector
                    }),
                    // Container das sessões
                    r({
                        tag: 'div',
                        attributes: {
                            class: 'doc-container_info'
                        },
                        style: {
                            borderTop: `solid ${color} 6px`,
                        },
                        children: [
                            ...sections.map(s => section(s)),
                            // Timeline
                            timeline ? timelineRender(color, timeline) : r({ tag: 'div' })
                        ]
                    })
                ]
            })
        ]
    });
};
export default containerRender;