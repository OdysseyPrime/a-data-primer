import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/visual_data_hub/Intro";
import React from "react";
import GlobPatterns from "pages/visual_data_hub/GlobPatterns";
import PlainValuesDictionary from "pages/visual_data_hub/PlainValuesDictionary";
import ModuleJSONConfig from "pages/visual_data_hub/ModuleJSONConfig";
import QueryingS3DataOnAthena from "pages/visual_data_hub/QueryingS3DataOnAthena";
import ProcessingJSONData from "pages/visual_data_hub/ProcessingJSONData";
import EnsuringDataAppending from "pages/visual_data_hub/EnsuringDataAppending";

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
            case PAGES.VISUAL_DATA_HUB.QUERYING_S3_DATA_ON_ATHENA:
                return <QueryingS3DataOnAthena {...props} />
            case PAGES.VISUAL_DATA_HUB.PROCESSING_JSON_DATA:
                return <ProcessingJSONData {...props} />
            case PAGES.VISUAL_DATA_HUB.ENSURING_DATA_APPENDING:
                return <EnsuringDataAppending {...props} />
        }
        return <Intro {...props} />
    }
}

export default withStyles(styles)(VisualDataHub)
