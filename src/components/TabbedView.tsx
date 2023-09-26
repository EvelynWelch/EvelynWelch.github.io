// A simple tabbed view react component.

import { tab } from '@testing-library/user-event/dist/tab';
import { useState } from 'react';

// create a random string of length n for unique id's
function makeid(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

interface TabProps {
    title: string
    thumbnailSrc?: string
    thumbnailAlt?: string
    key: string
}

function Tab(props: TabProps, onclick: Function): JSX.Element {
    // The onclick will toggle the display of TabBody
    return (
        <div className="thumbnail" id={props.key} key={props.key} onClick={e => onclick(e)}>
            {props.thumbnailSrc != null &&
                <img src={props.thumbnailSrc} alt={props.thumbnailAlt} />
            }
            {props.thumbnailSrc != null &&
                <h2 >{props.title}</h2>
            }

            {props.thumbnailSrc == null &&
            
                <h2 className='text-large'>{props.title}</h2>
            }
        </div>
    )
}

interface TabBodyProps {
    title: string
    description: string
    about: string
    key: string
    link?: string
    thumbnailSrc?: string
    thumbnailAlt?: string
    technologies?: string
}

function TabBody(props: TabBodyProps, onclick: Function): JSX.Element {
    return (
        <div className="projectCard fade-in">
            <div className='projectCard-X' onClick={e => onclick(e)}>
                <button name="close-focused-project">X</button>
            </div>
            <article>
                <div className="projectCard-text-wrapper">
                    {props.link != null &&
                        <h2><a href={props.link}>{props.title} </a></h2>
                    }
                    <h3 className='tertiary-color'>{props.description}</h3>
                    {props.technologies != null &&
                        <p className='secondary-color'>{props.technologies}</p>
                    }
                    <p>{props.about}</p>
                </div>
                {props.thumbnailSrc != null &&
                    <div className="img-wrapper">
                        <img src={props.thumbnailSrc} alt={props.thumbnailAlt} />
                    </div>
                }
            </article>
        </div>
    )
}

function getTabProps(tabBodyProps: TabBodyProps): TabProps {
    const tabProps = {
        title: tabBodyProps.title,
        key: tabBodyProps.key,
        thumbnailSrc: tabBodyProps.thumbnailSrc,
        thumbnailAlt: tabBodyProps.thumbnailAlt
    }
    return tabProps
}

function tabFactory(tabData: TabBodyProps[], onclick: Function): JSX.Element[] {
    // onclick's deals with TabView's state, so the function must be defined there and passed down
    let tabs: JSX.Element[] = []
    tabData.forEach(e => {
        // strip unused data
        let tabData = getTabProps(e)
        tabs.push(Tab(tabData, onclick))
    })
    return tabs
}


function startAnimation(animation: string) {
    const fadeInTarget = document.getElementById("fade-target")
    fadeInTarget?.classList.remove(animation)
    void fadeInTarget?.offsetWidth;
    fadeInTarget?.classList.add(animation)
}

export function TabView(props: TabBodyProps[]): JSX.Element {
    // TODO: make the default the AboutMe?
    const [focusedTab, setfocusedTab] = useState<JSX.Element | null>(null)

    const tabData = props
    let focusedTabKey: string | null = null

    // const fadeInTarget = document.getElementById("fade-target")
    // fadeInTarget?.classList.remove("fade-in")
    
    let tabs: JSX.Element[] = tabFactory(
        tabData,
        // onclick
        (e: any) => {
            // setfocusedTab(null)
            // get the clicked element, and its id
            let clickedElement = e.currentTarget
            let clickedId = clickedElement.id
            focusedTabKey = clickedId
            
            
            
            console.log(focusedTab)
            // add the selected-tab class
            clickedElement.classList.add("selected-tab")


           
            // fadeInTarget?.classList.remove("fade-in")
            // console.log(fadeInTarget?.classList)

            // make sure only one Tab is the "selected-tab"
            tabData.forEach(element => {
                if (element.key != clickedId) {
                    let elem = document.getElementById(element.key)
                    if (elem!.classList.contains("selected-tab")) {
                        elem!.classList.remove("selected-tab")
                    }
                }
            })

            // find that id in tabs array and set it as the focused project 
            for (let i = 0; i < tabData.length; i++) {
               
                if (tabData[i].key == clickedId) {
                    let data = { ...tabData[i] }
                    data.key = makeid(5)
                    // setfocusedTab(null)
                    
                    
                    const tabBody = TabBody(
                        data,
                        // add onclick to close witht he 'x'
                        (e:any) => {
                            // TODO: add the close animation
                            clickedElement.classList.remove("selected-tab")

                            setfocusedTab(null)
                            focusedTabKey = null
                        }
                    )
                    // TODO: open tab animation.
                    // fadeInTarget?.classList.remove("fade-in")   
                    
                    setfocusedTab(tabBody)
                    startAnimation("fade-in")
                    
               
                    break;
                }
            }
        }
    )

    return (
        <div className='tabs-container'>
            <div className="thumbnail-container">
                {tabs}
            </div>
            <div id='fade-target'>
                {focusedTab}
            </div>
           
        </div>
    )

}

// Animations


