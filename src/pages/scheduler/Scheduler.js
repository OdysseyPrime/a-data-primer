import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/scheduler/Intro";
import React from "react";
import Jobs from "./Jobs";
import Clusters from "./Clusters";
import GettingStarted from "./GettingStarted";
import UseCases from "pages/scheduler/UseCases";

const styles = () => ({
    root: {},
})

class Scheduler extends React.Component {
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
            case PAGES.SCHEDULER.GETTING_STARTED:
                return <GettingStarted {...props} />
            case PAGES.SCHEDULER.JOBS:
                return <Jobs {...props} />
            case PAGES.SCHEDULER.CLUSTERS:
                return <Clusters {...props} />
            case PAGES.SCHEDULER.USE_CASES:
                return <UseCases {...props} />
        }
        return <Intro {...props} />
    }
}

export default withStyles(styles)(Scheduler)
