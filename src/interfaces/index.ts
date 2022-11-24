export interface DocSection {
    title: string; 
    description: string 
}

export interface DocTimelineItem {
    commit: string;
    author: string;
    date: Date
}

export interface DocContainer {
    title: string;
    selector: string;
    sections: DocSection[],
    timeline?: DocTimelineItem[]
    color?: string;
}

export interface DocOptions {
    startVisible?: boolean;
}