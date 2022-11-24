import { r } from "vanilla-render-function";
import { DocSection } from "..";

const section = (data: DocSection) => {
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
                        children: data.title
                    }),
                    r({
                        tag: 'p',
                        attributes: {
                            class: 'doc-container_section-description'
                        },
                        children: data.description
                    })
                ]
            })
        ]
    });
};

export default section;