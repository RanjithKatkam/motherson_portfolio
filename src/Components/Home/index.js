/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./index.css";
class Home extends Component {
    state = {
        projectName: "",
        projectLink: "",
        projectDesc: "",
    };

    onClickAddProject = () => {
        const { projectDesc, projectLink, projectName } = this.state;
        if (projectName !== "" && projectDesc !== "" && projectLink !== "") {
            const projectItem = document.getElementById("projects-div");
            const innerDiv = document.createElement("div");
            innerDiv.className = "project1";

            const projectImage = document.createElement("img");
            projectImage.src = "/rectangle-7@2x.png";
            projectImage.className = "project-image";
            innerDiv.appendChild(projectImage);

            const childDiv = document.createElement("div");
            childDiv.className = "project-info";

            projectItem.appendChild(innerDiv);
            innerDiv.appendChild(childDiv);

            const projectHeading = document.createElement("b");
            projectHeading.textContent = projectName;
            projectHeading.className = "text1";

            const projectDescription = document.createElement("p");
            projectDescription.textContent = projectDesc;
            projectDescription.className = "text2";

            const buttonDiv = document.createElement("div");
            buttonDiv.className = "view-container";

            const link = document.createElement("a");
            link.className = "view-button";
            link.textContent = "View Project";
            link.href = "";

            buttonDiv.appendChild(link);
            childDiv.appendChild(projectHeading);
            childDiv.appendChild(projectDescription);
            childDiv.appendChild(buttonDiv);
            this.setState({
                projectName: "",
                projectDesc: "",
                projectLink: "",
            });
        }
    };
    onChangeProjectName = (event) => {
        this.setState({ projectName: event.target.value });
    };
    onChangeProjectLink = (event) => {
        this.setState({ projectLink: event.target.value });
    };
    onChangeProjectDescription = (event) => {
        this.setState({ projectDesc: event.target.value });
    };

    render() {
        const { projectDesc, projectLink, projectName } = this.state;
        return (
            <div className="portfolio-main-container">
                <img className="image-icon" alt="" src="/headerImage.png" />
                <div className="Navbar">
                    <h1 className="madelyn-torff">Madelyn Torff</h1>
                    <div className="nav">
                        <a href="#about" className="nav-links">
                            About
                        </a>
                        <a href="#projects" className="nav-links">
                            Projects
                        </a>
                        <a href="#contact" className="nav-links">
                            Contact
                        </a>
                    </div>
                </div>
                <section id="about" className="about-section-main-container">
                    <h1 className="uiux-designer">UI/UX Designer</h1>
                    <h1 className="title">Hello, my name is Madelyn Torff</h1>
                    <p className="para">
                        Short text with details about you, what you do or your
                        professional career. You can add more information on the
                        about page.
                    </p>
                    <div className="buttons">
                        <div className="button-primary">
                            <a href="#projects" className="button1">
                                Projects
                            </a>
                        </div>
                        <div className="button-secondary">
                            <p className="button1">LinkedIn</p>
                        </div>
                    </div>
                </section>
                <section className="add-project-main-container">
                    <h1 className="add-project-heading">Add Project</h1>
                    <div className="form-container">
                        <label className="label">Project Name</label>
                        <input
                            onChange={this.onChangeProjectName}
                            type="text"
                            value={projectName}
                        />
                        <label className="label">Project Link</label>
                        <input
                            onChange={this.onChangeProjectLink}
                            type="text"
                            value={projectLink}
                        />
                        <label className="label">Description</label>
                        <textarea
                            onChange={this.onChangeProjectDescription}
                            value={projectDesc}></textarea>
                        <button onClick={this.onClickAddProject}>Add</button>
                    </div>
                </section>
                <section id="projects" className="projects">
                    <h1 className="projects-title">Projects</h1>
                    <div id="projects-div" className="projects-div">
                        <div className="project1">
                            <div className="project-info">
                                <b className="text1">Project Name</b>
                                <p className="text2">
                                    I created this personal project in order to
                                    show how to create an interface in Figma
                                    using a portfolio as an example.
                                </p>
                                <div className="view-container">
                                    <a href="" className="view-button">
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <img
                                className="project-image"
                                alt=""
                                src="/pexelsellyfairytale3823207-1@2x.png"
                            />
                        </div>
                        <div className="project1">
                            <img
                                className="project-image"
                                alt=""
                                src="/rectangle7.png"
                            />
                            <div className="project-info">
                                <b className="text1">Project Name</b>
                                <div className="text2">
                                    What was your role, your deliverables, if
                                    the project was personal, freelancing.
                                </div>
                                <div className="view-container">
                                    <a href="" className="view-button">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project1">
                            <div className="project-info">
                                <b className="text1">Project Name</b>
                                <div className="text2">
                                    You can also add in this description the
                                    type of the project, if it was for web,
                                    mobile, electron.
                                </div>
                                <div className="view-container">
                                    <a href="" className="view-button">
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <img
                                className="project-image"
                                alt=""
                                src="/rectangle-7@2x.png"
                            />
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact-container">
                    <div className="icon-container">
                        <img alt="" src="/insta.svg" />
                        <img alt="" src="/linkidin.svg" />
                        <img alt="" src="/mail.svg" />
                    </div>
                    <p>Copyright © 2024. All rights reserved</p>
                </section>
                <img className="vector" alt="" src="/vector@2x.png" />
            </div>
        );
    }
}

export default Home;
