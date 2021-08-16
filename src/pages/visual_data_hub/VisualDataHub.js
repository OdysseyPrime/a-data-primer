import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/visual_data_hub/Intro";
import React from "react";
import GlobPatterns from "pages/visual_data_hub/GlobPatterns";
import PlainValuesDictionary from "pages/visual_data_hub/PlainValuesDictionary";
import ModuleJSONConfig from "pages/visual_data_hub/ModuleJSONConfig";

const styles = () => ({
    root: {},
})

class VisualDataHub extends React.Component {
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
            case PAGES.VISUAL_DATA_HUB.PLAIN_VALUES_DICTIONARY:
                return <PlainValuesDictionary {...props} />
            case PAGES.VISUAL_DATA_HUB.GLOB_PATTERNS:
                return <GlobPatterns {...props} />
            case PAGES.VISUAL_DATA_HUB.MODULE_JSON_CONFIG:
                return <ModuleJSONConfig {...props} />
        }
        return <Intro {...props} />
    }
}

export default withStyles(styles)(VisualDataHub)
