import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/dashboards/Intro";
import React from "react";
import DataSplitsAndPartitions from "pages/dashboards/DataSplitsAndPartitions";
import PipelineVsOnTheFly from "pages/dashboards/PipelineVsOnTheFly";
import YourFirstDashboard from "pages/dashboards/YourFirstDashboard";

const styles = () => ({
    root: {},
})

class Dashboards extends React.Component {
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
            case PAGES.DASHBOARDS.YOUR_FIRST_DASHBOARD:
                return <YourFirstDashboard {...props} />
            case PAGES.DASHBOARDS.DATA_SPLITS_AND_PARTITIONS:
                return <DataSplitsAndPartitions {...props} />
            case PAGES.DASHBOARDS.PIPELINE_VS_ON_THE_FLY:
                return <PipelineVsOnTheFly {...props} />
        }
        return <Intro {...props} />
    }
}

export default withStyles(styles)(Dashboards)
