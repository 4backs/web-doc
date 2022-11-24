import container from "./elements/container";
import { DocContainer, DocOptions } from "./interfaces";

export default function useWebDoc(docs: DocContainer[], options?: DocOptions) {
    const scan = () => {

        // Pegar a referencia de todos os elementos
        docs.forEach((doc) => {

            // Verificar se o elemento já existe
            const hasTheDoc = document.querySelector(`[doc-ref="${doc.selector}"]`) as HTMLElement;
            
            if(!hasTheDoc) {

                // Inserir container na referencia
                const reference = document.querySelector(doc.selector) as HTMLElement;
                if(reference != null) {
                    const containerEl = container({ doc, reference });
                    reference.parentElement?.appendChild(containerEl);
                }
            }
        });
    };

    return { scan };
}

if (typeof window !== 'undefined') {
    (window as any).useWebDoc = useWebDoc;
}