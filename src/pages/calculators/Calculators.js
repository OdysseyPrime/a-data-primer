import withStyles from "@material-ui/core/styles/withStyles";
import {PAGES} from 'Constants';
import Intro from "pages/calculators/Intro";
import React from "react";
import SparkConfigurations from "pages/calculators/SparkConfigurations";

const styles = () => ({
    root: {},
})

class Calculators extends React.Component {
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
            case PAGES.CALCULATORS.SPARK_CONFIGURATIONS:
                return <SparkConfigurations {...props} />
        }
        return <Intro {...props} />
    }
}

export default withStyles(styles)(Calculators)
