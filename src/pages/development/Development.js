import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/development/Intro";
import React from "react";
import ETL from "pages/development/ExtractTransformLoad";
import CodeBaseSetup from "pages/development/CodeBaseSetup";

const styles = () => ({
    root: {},
})

class Development extends React.Component {
    render() {
        const {breadcrumbs} = this.props

        let section = breadcrumbs[0]
        if (breadcrumbs.length > 1) {
            section = breadcrumbs[1]
        }

        const props = {
            section
        }

        switch (section.id) {
            case PAGES.DEVELOPMENT.EXTRACT_TRANSFORM_LOAD:
                return <ETL {...props} />
            case PAGES.DEVELOPMENT.CODE_BASE_SETUP:
                return <CodeBaseSetup {...props} />
        }

        return <Intro {...props} />
    }
}

export default withStyles(styles)(Development)
