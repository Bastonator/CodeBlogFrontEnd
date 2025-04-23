import React from 'react'
import {SnippetType} from "@/app/(root)/material/[slug]/page";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


interface SnippetProps {
    snippet: SnippetType
}


const Snippets:React.FC<SnippetProps> = ({snippet}) => {


    if (snippet.code)
        return (
            <>

                <article className={"max-w-3xl mx-auto p-5"}>
                    <Accordion type="single" collapsible className="w-full transition">
                        <AccordionItem value="item-1" className={"w-full"}>
                            <AccordionTrigger className={"transition"}>
                                <p className={"whitespace-pre-wrap font-serif text-xl"}>
                                    {snippet.text}
                                </p>
                            </AccordionTrigger>
                            <AccordionContent className={"transition border-black rounded-3xl"}>
                            <pre>
                                <code>
                                    <SyntaxHighlighter language={"JavaScript"} style={docco}>
                                {snippet.code}
                                    </SyntaxHighlighter>
                                </code>
                            </pre>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <hr className={"text-black"}/>
                </article>
            </>
        )

    if (!snippet.code)

    return (
        <>

            <article className={"max-w-3xl mx-auto p-5"}>
                <p className={"whitespace-pre-wrap font-serif text-xl"}>
                    {snippet.text}
                </p>
                <hr className={"text-black"}/>
            </article>

        </>
    )
}

export default Snippets
