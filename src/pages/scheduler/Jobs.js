import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import tagImage from "../../assets/images/scheduler/tags.png"
import priceRunTags from "../../assets/images/scheduler/price_run_tags.png"
import timeBasedTriggerImg from "../../assets/images/scheduler/time_based_trigger.png"
import anotherJobTriggerPipeline from "../../assets/images/scheduler/another_job_trigger_pipeline.png"
import anotherJobTriggerPipelineCompleted from "../../assets/images/scheduler/another_job_trigger_pipeline_completed.png"
import anotherJobTriggerJobFailed from "../../assets/images/scheduler/another_job_trigger_job_failed.png"
import anotherJobTriggerJobFailedExample from "../../assets/images/scheduler/another_job_trigger_job_failed_example.png"
import taskTerminateCluster from "../../assets/images/scheduler/task_terminate_cluster.png"
import jobDedicatedCluster from "../../assets/images/scheduler/job_dedicated_cluster.png"


import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})

const Italic = (props) => {
    return <label style={{display: 'contents', fontStyle: 'italic', paddingLeft: 4, paddingRight: 4}}>{props.children}</label>
}

class Jobs extends React.Component {
    render() {
        const {section} = this.props

        let tags = section.children[0]

        let triggers = section.children[1]
        let timeBasedTrigger = section.children[1].children[0];
        let jobBasedPipeline = section.children[1].children[1];
        let jobBasedJob = section.children[1].children[2];

        let tasks = section.children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Jobs
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    Jobs enable us to schedule EMR steps through VDH pipelines or Spark Custom Steps, set a
                    Trigger (they are time based, or state change based) and add Tags to our needs.
                </Typography>

                <Typography id={tags.id} variant={'title'}>
                    {tags.display}
                </Typography>
                <Typography variant={'p'}>
                    It can be convenient to categorize your AWS resources in different ways; for example, by purpose,
                    owner, or environment. You can achieve this in Amazon EMR by assigning custom metadata to your
                    Amazon EMR clusters using tags. A tag consists of a key and a value, both of which you define.
                    For Amazon EMR, the cluster is the resource-level that you can tag.
                </Typography>
                <Typography variant={'p'}>
                    In the Scheduler, tags look like this:
                </Typography>
                <Typography variant={'p'}>
                    <img src={tagImage}/>
                </Typography>
                <Typography variant={'p'}>
                    Beside the custom made, there are quite some tags which are set built-in, so we can exactly track
                    down the costs through AWS Billing service.
                </Typography>
                <Typography variant={'p'}>
                    For example, if we are to check Makro's Price Run tags through EMR, we can find that:
                </Typography>
                <Typography variant={'p'}>
                    <img src={priceRunTags}/>
                </Typography>
                <Typography variant={'p'}>
                    there are four built-in tags applied to this cluster by platform, even though we did not specify
                    one on our own.
                </Typography>

                <Typography id={triggers.id} variant={'title'}>
                    {triggers.display}
                </Typography>
                <Typography variant={'p'}>
                    When scheduling, we have two options to set as triggers:
                    <ol>
                        <li>Time Based Triggers: triggered on a periodic or non-periodic time manner that we set.</li>
                        <li>On State Change: triggered when the state of a pipeline or job is changed. A pipeline or
                        job can have three states:
                            <ul>
                                <li>Job Starts</li>
                                <li>Job Fails</li>
                                <li>Job Completes</li>
                            </ul>
                        </li>
                    </ol>
                </Typography>

                <Typography id={timeBasedTrigger.id}>
                    <Italic>{timeBasedTrigger.display} that runs every week on 12:00 starting from 11 August 2021.</Italic>
                </Typography>
                <Typography variant={'p'}>
                    <img src={timeBasedTriggerImg}/>
                </Typography>
                <Divider/>

                <Typography id={jobBasedPipeline.id}>
                    <Italic>{jobBasedPipeline.display} that runs when pipeline has completed.</Italic>
                </Typography>
                <Typography variant={'p'}>
                    <img src={anotherJobTriggerPipeline}/>
                </Typography>
                <Typography variant={'p'}>
                    In our case, this trigger is activated when the following run happens:
                </Typography>
                <Typography variant={'p'}>
                    <img src={anotherJobTriggerPipelineCompleted}/>
                </Typography>
                <Divider/>

                <Typography id={jobBasedJob.id}>
                    <Italic>{jobBasedJob.display} that runs when a job has failed.</Italic>
                </Typography>
                <Typography variant={'p'}>
                    <img src={anotherJobTriggerJobFailed}/>
                </Typography>
                <Typography variant={'p'}>
                    In our case, this trigger is activated when the following run happens:
                </Typography>
                <Typography variant={'p'}>
                    <img src={anotherJobTriggerJobFailedExample}/>
                </Typography>

                <Typography id={tasks.id} variant={'title'}>
                    {tasks.display}
                </Typography>
                <Typography variant={'p'}>
                    To execute EMR steps in an orderly manner, we specify a list of tasks that are either:
                    <ol>
                        <li>Pipeline Task: a pipeline constructed through VDH.</li>
                        <li>Custom Spark Step: a custom pipeline constructed through external libraries.</li>
                    </ol>
                    This list is then fed into a Job and is executed when triggers are activated.
                </Typography>
                <Typography variant={'p'}>
                    When creating a job that processes data into a dedicated cluster, and we specify tasks, we
                    are enabled to choose an Action on Failure consequence. This means that we can decide either to
                    keep the cluster alive when a step fails or keep running, depending on whether the steps are
                    dependent on each other or not.
                </Typography>

                <Typography variant={'p'}>
                    The following example will terminate the cluster if the specified step does not run successfully.
                </Typography>
                <Typography variant={'p'}>
                    <img src={taskTerminateCluster}/>
                </Typography>
                <Typography variant={'p'}>
                    This is possible because the default cluster that is selected, is a dedicated one, and not general
                    the default General Cluster.
                </Typography>
                <Typography variant={'p'}>
                    <img src={jobDedicatedCluster}/>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Jobs)
