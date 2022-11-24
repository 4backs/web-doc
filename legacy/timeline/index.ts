import { r } from "vanilla-render-function";
import { DocTimelineItem } from "..";
import timelineItemRender from "../timelineItem";

const timelineRender = (color: string, timeline: DocTimelineItem[]) => {
    return r({
        tag: 'div',
        attributes: {
            class: 'doc-container_section'
        },
        children: [
            r({
                tag: 'div',
                attributes: {
                    class: 'doc-container_section-container'
                },
                children: [
                    r({
                        tag: 'p',
                        attributes: {
                            class: 'doc-container_section-title'
                        },
                        children: 'Histórico'
                    }),
                    r({
                        tag: 'div',
                        style: {
                            position: 'relative',
                            marginTop: '10px'
                        },
                        children: [
                            // Barrinha
                            r({
                                tag: 'div',
                                style: {
                                    position: 'absolute',
                                    top: '5px',
                                    bottom: '0',
                                    left: '2px',
                                    width: '1px',
                                    background: color
                                }
                            }),
                            ...timeline.map(el => timelineItemRender(color, el))
                        ]
                    })
                ]
            })
        ]
    });
};

export default timelineRender;