import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

/*special shout out to florin-pop for this excellent
 * way to structure data in a timeline
 * curious about the original implementation?
 * https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/*/

class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        heading: "Federal University of Technology, Minna",
        text:
          "An ongoing five year bachelor of engineering resulting in a research project into the electrochemical performance of maize straw in solid oxide direct carbon fuel cell modelled and simulated using python3 and the anaconda distribution.",
        date: "2015 - Present",
        category: {
          tag: "degree (b.eng)",
          color: "#648fcf",
        },
        link: {
          url: "https://academia.edu",
          text: "read research paper",
        },
      },
    };
  }
  render() {
    return (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <span
            className="tag"
            style={{ background: this.state.data.category.color }}
          >
            {this.state.data.category.tag}
          </span>
          <time>{this.state.data.date}</time>
          <h5>
            <a href="https://www.futminna.edu.ng/">{this.state.data.heading}</a>
          </h5>
          <p>{this.state.data.text}</p>
          {this.state.data.link && (
            <a
              href={this.state.data.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.data.link.text}
            </a>
          )}
          <span className="circle">
            <FontAwesomeIcon icon={faGraduationCap} color="#777" size="1x" />
          </span>
        </div>
      </div>
    );
  }
}

export default TimelineItem;
