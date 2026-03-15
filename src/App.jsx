import gsap from "gsap";

// Make windows draggable
import {Draggable} from "gsap/Draggable";

import React from 'react'
import {Dock, Navbar, Welcome} from "#components"
import {Terminal, Safari, Resume, Finder, Text, Image, Contact} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </main>
    )
}
export default App
