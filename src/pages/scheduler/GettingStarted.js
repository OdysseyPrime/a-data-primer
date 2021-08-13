import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})


class GettingStarted extends React.Component {
    render() {
        const {section} = this.props

        const howWeGotHere = section.children[0];
        const allIntoOne = section.children[1];

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Getting Started
                    <Divider/>
                </Typography>
                <Typography variant={'p'}>
                    Scheduler is a platform feature that allows users to schedule periodically or on-event EMR steps.
                </Typography>
                <Typography variant={'p'}>
                    To us, a step is one or more groups of instructions (recipes) that are given to EMR by either
                    passing custom configurations or by running platform pipelines.
                </Typography>

                <Typography id={howWeGotHere.id} variant={'title'}>
                    {howWeGotHere.display}
                </Typography>
                <Typography variant={'p'}>
                    Since the very beginning of VDH release, we have found use of it in almost every thing we have done,
                    from constructing test pipelines to complex ones that do big data processing and heavy calculations.
                    As time passed, we found the need to run specific pipelines on a timely basis. These specific
                    pipelines are mainly pipes that process weekly client uploads, but not only.
                </Typography>
                <Typography variant={'p'}>
                    Doing these data processing was a must, and a solution had to be found. There were some tools out
                    there which we started to utilize, but the ones that fit us the most were:
                    <ol>
                        <li>Apache Airflow: a service provided by the same creator of Spark.</li>
                        <li>Terraform: a service provided by Hashicorp that uses code as infrastructure concept.</li>
                    </ol>
                    Both of these tools were very useful, but still there were limitations when it came to the
                    interconnection with our platform. For example, scheduling Terraform in Apache Airflow was not
                    possible.
                </Typography>

                <Typography id={howWeGotHere.id} variant={'title'}>
                    {allIntoOne.display}
                </Typography>
                <Typography variant={'p'}>
                    With all of these difficulties ahead, the best solution was to create our own, isolated and
                    unique feature that enables the run of EMR steps in a free-style manner. This allowed the eventual
                    removal of two external services mentioned above and have everything inside the platform, which
                    is always our goal.
                </Typography>
                <Typography variant={'p'}>
                    Scheduler is made of three parts:
                    <ol>
                        <li>Runs</li>
                        <li>Jobs</li>
                        <li>Clusters</li>
                    </ol>
                    All of these concepts will be elaborated in the coming section.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(GettingStarted)
