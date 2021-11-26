import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/data_lifecycle/Intro";
import React from "react";
import DataOnboarding from "pages/data_lifecycle/DataOnboarding";
import DataProcessing from "pages/data_lifecycle/DataProcessing";
import DataDelivery from "pages/data_lifecycle/DataDelivery";
import Overview from "pages/data_lifecycle/Overview";

const styles = () => ({
    root: {},
})

class DataLifeCycle extends React.Component {
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
            case PAGES.DATA_LIFECYCLE.DATA_ONBOARDING:
                return <DataOnboarding {...props} />
            case PAGES.DATA_LIFECYCLE.DATA_PROCESSING:
                return <DataProcessing {...props} />
            case PAGES.DATA_LIFECYCLE.DATA_DELIVERY:
                return <DataDelivery {...props} />
            case PAGES.DATA_LIFECYCLE.OVERVIEW:
                return <Overview {...props} />
        }

        return <Intro {...props} />
    }
}

export default withStyles(styles)(DataLifeCycle)
