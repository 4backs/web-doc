import { attachCSS } from "vanilla-render-function";

export let loaded = false;

export function load() {
    attachCSS([
        {
            selector:'.doc-container',
            props: {
                borderRadius: '10px',
                position: 'absolute',
                transition: 'background 150ms',
                background: 'transparent'
            }
        },
        {
            selector: '.doc-container p',
            props: {
                textAlign: 'left',
                fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
            }
        },
        {
            selector:'.doc-container:hover',
            props: {
                borderStyle: 'solid',
                background: '#0094FF10'
            }
        },
        {
            selector:'.doc-container_wrapper',
            props: {
                position: 'relative',
                width: '100%',
                height: '100%'
            }
        },
        {
            selector:'.doc-container_title',
            props: {
                position: 'absolute',
                left: '0',
                top: '-25px',
                fontWeight: 'bold',
                margin: '0',
            }
        },
        {
            selector: '.doc-container_info',
            props: {
                position: 'absolute',
                top: 'calc(100% + 10px)',
                left: '0',
                minWidth: '280px',
                borderRadius: '10px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2);',
                
                background: 'white',
                opacity: '0',
                pointerEvents: 'none',
                zIndex: '99',
                transition: 'opacity 150ms'
            }
        },
        {
            selector:'.doc-container:hover .doc-container_info',
            props: {
                opacity: '1',
                pointerEvents: 'all'
            }
        },
        {
            selector: '.doc-container_section',
            props: {
                padding: '0 8px'
            }
        },
        {
            selector: '.doc-container_section-container',
            props: {
                padding: '10px 8px',
                borderBottom: 'solid #E0E0E0 1px'
            }
        },
        {
            selector: '.doc-container_section-title',
            props: {
                margin: '0',
                fontWeight: '600',
                marginBottom: '3px',
                fontSize: '12px',
                textAlign: 'left',
            }
        },
        {
            selector: '.doc-container_section-description',
            props: {
                margin: '0',
                fontSize: '12px',
                textAlign: 'left',
            }
        },
        {
            selector: '.--hide-docs .doc-container',
            props: {
                display: 'none'
            }
        },
        {
            selector: '.doc-container_timeline-item',
            props: {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: '0.75rem'
            }
        },
        {
            selector: '.doc-container_timeline-item:last',
            props: {
                marginBottom: '0'
            }
        }
    ]);

    loaded = true;
}
