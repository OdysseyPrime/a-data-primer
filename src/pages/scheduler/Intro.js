import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})

class Intro extends React.Component {
    render() {
        const {section} = this.props
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
                    A step is one or more groups of instructions (recipes) that are given to EMR by either
                    passing custom configurations or by running platform pipelines.
                </Typography>

                <Typography variant={'title'}>
                    How did we get here?
                </Typography>
                <Typography variant={'p'}>
                    Since the very beginning of VDH release, we have found use of it in almost every thing we have done,
                    from constructing test pipelines to complex pipelines that do big data processing and heavy calculations.
                    As time passed, we found the need to run specific pipelines on a timely basis. These specific can
                    be for instance pipelines that process weekly client uploads.
                </Typography>
                <Typography variant={'p'}>
                    Running these data processing pipelines was a must, and a solution had to be found.
                    There were some tools out there which we started to utilize, but the ones that fit us the most were:
                    <ol>
                        <li>Apache Airflow: a service provided by the same creator of Spark.</li>
                        <li>Terraform: a service provided by Hashicorp that uses code as infrastructure concept.</li>
                    </ol>
                    Both tools were very useful, but still there were limitations when it came to the
                    interconnection with our platform. For example, scheduling Terraform in Apache Airflow was not
                    possible.
                </Typography>

                <Typography variant={'title'}>
                    Everything into one
                </Typography>
                <Typography variant={'p'}>
                    The best solution was to create our own, isolated and unique feature that enables the run of EMR
                    steps in a free-style manner. This allowed the eventual removal of two external services mentioned
                    above and have everything inside the platform, which is always our goal.
                </Typography>
                <Typography variant={'p'}>
                    Scheduler is made of three parts:
                    <ol>
                        <li>Runs</li>
                        <li>Jobs</li>
                        <li>Clusters</li>
                    </ol>
                    These concepts will be elaborated in the coming next section.
                </Typography>
                <Typography variant='p'>
                    This service contains the underlying pages:
                    <ol>
                        {section.children.map(next => <li key={next.id}>
                            <PageLink to={`/lecture/${next.id}/`}>{next.display}</PageLink>
                        </li>)}
                    </ol>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Intro)
