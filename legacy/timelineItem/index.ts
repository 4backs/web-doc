import { r } from "vanilla-render-function";
import { DocTimelineItem } from "..";

const timelineItemRender = (color: string, data: DocTimelineItem) => {
    return r({
        tag: 'div',
        attributes: {
            class: 'doc-container_timeline-item'
        },
        children: [
            r({
                tag: 'div',
                style: {
                    width: '6px',
                    height: '6px',
                    borderRadius: '3px',
                    marginRight: '6px',
                    background: color
                }
            }),
            r({
                tag: 'div',
                style: {
                    flex: '1'
                },
                children: [
                    r({
                        tag: 'p',
                        attributes: {
                            class: 'doc-container_section-title'
                        },
                        children: data.commit
                    }),
                    r({
                        tag: 'p',
                        style: {
                            fontSize: '11px',
                            opacity: '.6',
                            margin: '0'
                        },
                        children: `${data.author} - ${data.date.toLocaleDateString()} • ${data.date.toLocaleTimeString()}`
                    })
                ]
            }),
        ]
    });
};

export default timelineItemRender;