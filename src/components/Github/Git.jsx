import React from 'react'
import GitHubCalendar from "react-github-calendar";
import "./git.css"

const Git = () => {
    return (
        <>
            <div id='github'>
                <h3 className="section__title">GitHub </h3>
                <section className="github container">
                    <GitHubCalendar
                        username="kevalsutariya710"
                        blockSize={15}
                        blockMargin={7}
                        hideColorLegend
                        fontSize={16}
                    />
                </section>
            </div>
        </>
    )
}

export default Git