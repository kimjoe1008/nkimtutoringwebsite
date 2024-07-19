'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion"

export default function ProcessContent(){
    return(
        <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Step 1" title="Step 1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptates, voluptate debitis deleniti obcaecati hic provident quaerat ex odit deserunt dolore tenetur iste quae cum facilis. Nihil, tempore deleniti.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Step 2" title="Step 2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum officiis dolorem animi illo saepe, eligendi pariatur voluptatibus optio velit? Modi natus officia quo distinctio possimus sapiente ab labore repudiandae.</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Step 3" title="Step 3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, asperiores. Voluptate illo ut laudantium doloremque provident similique, accusamus, beatae voluptatum libero sed culpa nulla officiis corporis neque odit eum itaque.</p>
            </AccordionItem>
        </Accordion>
    )
}