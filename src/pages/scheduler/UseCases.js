import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import exampleOneJob from "../../assets/images/scheduler/example_1_job.png"
import exampleOneJobTerminateCluster from "../../assets/images/scheduler/example_1_job_terminate_cluster.png"
import exampleOneClusterConfig from "../../assets/images/scheduler/example_1_cluster_config.png"
import exampleTwoFirstJob from "../../assets/images/scheduler/example_2_first_job.png"
import exampleTwoFirstCluster from "../../assets/images/scheduler/example_2_first_cluster.png"
import exampleTwoSecondCluster from "../../assets/images/scheduler/example_2_second_cluster.png"


import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})

class UseCases extends React.Component {
    render() {
        const {section} = this.props

        let first = section.children[0]
        let second = section.children[1]
        let toKeepInMind = section.children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Use Cases
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    We have created below a list of use cases, the respective solutions and best practices.
                </Typography>

                <Typography id={first.id} variant={'title'}>
                    {first.display}
                </Typography>
                <Typography variant={'p'}>
                    We have two pipelines:
                    <ol>
                        <li>Importer pipeline - the pipeline where we get all the raw data to our data lake
                            [ETA: 45 min.].
                        </li>
                        <li>Processing importers - the pipeline where we process all files that are in our data lake
                            [ETA: 35 min.].
                        </li>
                    </ol>
                    We do not want to execute pipeline number 2 if the pipeline number 1 was not successfully finished.
                </Typography>
                <Divider/>
                <Typography variant={'p'}>
                    Let's first create the job. For this job, we do not specify any tag or trigger (since it is
                    run-once)
                    and also. We have to create a configuration for the cluster since we cannot terminate default ETL
                    cluster (general cluster).
                </Typography>
                <Typography variant={'p'}>
                    We proceed to create this job:
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleOneJob}/>
                </Typography>
                <Typography variant={'p'}>
                    The first pipeline in the tasks list, has Action on Failure set to Terminate Cluster.
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleOneJobTerminateCluster}/>
                </Typography>
                <Typography variant={'p'}>
                    Then we move on to modify the Xenos: Standardized Output Run cluster, since we are using that one
                    in our job.
                </Typography>
                <Typography variant={'p'}>
                    We do not want any bootstrap action, that's why we skip Bootstrap Actions and Advanced Options,
                    we also do not want to have any tag.
                </Typography>
                <Typography variant={'p'}>
                    Since the two pipelines take about one hour and a half to finish in the general cluster, we
                    create the same instances as the default cluster. That means, we want a master node of type
                    m4.2xlarge and four core nodes of type m4.2xlarge as well.
                    We then move on to Spot Options, where we set Defined Duration to 120 minutes (because it will not
                    take more than two hours), set a Timeout Duration of 15 minutes and On Timeout Action to Terminate
                    Cluster, because we do not want to run this at all costs.
                </Typography>
                <Typography variant={'p'}>
                    We usually want to leave EMR to the default one because that is the compatible version with
                    Java and other libraries as well. This is what the cluster looks like:
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleOneClusterConfig}/>
                </Typography>

                <Typography id={second.id} variant={'title'}>
                    {second.display}
                </Typography>
                <Typography variant={'p'}>
                    We have two pipelines:
                    <ol>
                        <li>Importer pipeline - the pipeline where we get all the raw data to our data lake
                            [ETA: 45 min.].
                        </li>
                        <li>Processing importers - the pipeline where we process all files that are in our data lake.
                        </li>
                    </ol>
                    We know for sure that the Importer Pipeline will finish, but Processing Importers might fail because
                    there is a lot of data to process. We want to try doing this in the same cluster first, and if we
                    can't, we want to do the second task in a bigger cluster.
                </Typography>
                <Divider/>

                <Typography variant={'p'}>
                    We need two jobs for this and two clusters, each with different settings. Let's start off with the
                    jobs.
                </Typography>
                <Typography variant={'p'}>
                    We create two jobs with these tasks:
                    <ol>
                        <li>First job: two pipelines (Importer pipeline and Processing importers)</li>
                        <li>Second job: one pipeline (Processing importers) that must be run when the first one
                            fails.
                        </li>
                    </ol>
                    Then on the second job, we create a Trigger of type Another Job, that has the first job selected and
                    is triggered when job fails, as below:
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleTwoFirstJob}/>
                </Typography>
                <Typography variant={'p'}>
                    Then we move on to modify the clusters for each of these tasks. The Xenos: Standardized
                    Output cluster has again, same instances as general cluster (four m4.2xlarge instances), while
                    Example 2: 8 core cluster has eight m4.2xlarge instances, which is double the processing power
                    of the general (or Xenos: Standardized Output) cluster. These are the configurations:
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleTwoFirstCluster}/>
                </Typography>
                <Typography variant={'p'}>
                    <img src={exampleTwoSecondCluster}/>
                </Typography>
                <Divider/>

                <Typography id={toKeepInMind.id} variant={'title'}>
                    {toKeepInMind.display}
                </Typography>
                <Typography variant={'p'}>
                    <ul>
                        <li>A cluster in scheduler defines cluster configurations and not clusters.</li>
                        <li>A new job means a new cluster, even if you refer the same cluster.</li>
                        <li>Pipeline trigger is not dependent on the cluster.</li>
                    </ul>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(UseCases)
