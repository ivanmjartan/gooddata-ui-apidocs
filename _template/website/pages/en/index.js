/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const siteConfig = require(process.cwd() + "/siteConfig.js");

function docUrl(doc, language) {
    return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a
                    className={this.props.className || "button"}
                    href={this.props.href}
                    target={this.props.target}
                >
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: "_self",
};

const SplashContainer = (props) => (
    <section className="homeContainer">
        <div className="wrapper homeWrapper">{props.children}</div>
    </section>
);

const ProjectTitle = (props) => <h1 className="projectTitle">{siteConfig.title}</h1>;

const ProjectDescription = (props) => (
    <p className="projectDescription">
        Component library for rapid <br className="noMobile" />
        development of interactive <br className="noMobile" />
        analytical user interfaces
    </p>
);

const SplashParallax = (props) => (
    <div id="splash-parallax" className="splash-parallax">
        {props.layers.map((layer, index) => (
            <img
                src={layer}
                key={`SplashParallaxLayer${index}`}
                className={`splash-parallax-layer splash-parallax-layer-${index}`}
            />
        ))}
    </div>
);

class HomeSplash extends React.Component {
    render() {
        return (
            <SplashContainer>
                <div className="left">
                    <ProjectTitle />
                    <ProjectDescription />
                    <Button href={docUrl("index.html")} className="button-link">
                        See documentation
                    </Button>
                </div>
                <div className="right">
                    <SplashParallax
                        layers={[
                            "./img/homepage/splash-image-l1.svg",
                            "./img/homepage/splash-image-l2.svg",
                            "./img/homepage/splash-image-l3.svg",
                            "./img/homepage/splash-image-l4.svg",
                        ]}
                    />
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        let language = this.props.language || "";

        return (
            <div>
                <HomeSplash language={language} />
            </div>
        );
    }
}

module.exports = Index;
