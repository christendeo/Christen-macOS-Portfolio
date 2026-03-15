import gsap from "gsap";

// Make windows draggable
import {Draggable} from "gsap/Draggable";

import React from 'react'
import {Dock, Navbar, Welcome, Home} from "#components"
import {Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Home />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
            <Photos />
        </main>
    )
}
export default App
