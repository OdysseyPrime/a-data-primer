import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import spotOptionsImg from "assets/images/scheduler/spot_options.png"
import advancedOptionsImg from "assets/images/scheduler/advanced_options.png"
import masterNodeImg from "assets/images/scheduler/master_node.png"
import coreNodesImg from "assets/images/scheduler/core_nodes.png"
import singleCapacityNodeImg from "assets/images/scheduler/single_capacity_node.png"

const styles = () => ({
    root: {},
})


class Clusters extends React.Component {
    render() {
        const {section} = this.props

        let spotOptions = section.children[0]
        let bootstrapOptions = section.children[1]

        let nodes = section.children[2]
        let master = section.children[2].children[0]
        let core = section.children[2].children[1]
        let singleCapacity = section.children[2].children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Clusters
                    <Divider/>
                </Typography>
                <Typography variant={'p'}>
                    Scheduler clusters define the general EMR cluster behavior, that is, when to shut down, when it's
                    free to be taken back by AWS, and many more options.
                </Typography>
                <Typography variant={'p'}>
                    Before diving in to clusters, let us explain two very important AWS concepts that will follow us
                    through all AWS related topics.
                    <ol>
                        <li>Spot instances: A Spot Instance is an instance that uses spare EC2 capacity that is
                            available for less than the On-Demand price. Because Spot Instances enable you to request
                            unused EC2 instances at steep discounts, you can lower your Amazon EC2 costs significantly.
                        </li>
                        <li>On demand instances: With On-Demand Instances, you pay for compute capacity by the second
                            with no long-term commitments. You have full control over its lifecycle—you decide when to
                            launch, stop, hibernate, start, reboot, or terminate it.
                        </li>
                    </ol>
                    An Amazon instance is a virtual server in Amazon's Elastic Compute Cloud.
                </Typography>
                <Typography variant={'p'}>
                    Spot instances are our to-go instances because of cost.
                </Typography>

                <Typography id={spotOptions.id} variant={'title'}>
                    {spotOptions.display}
                </Typography>
                <Typography variant={'p'}>
                    Spot options are a set of instructions that we give to a cluster to define the up time and time out
                    duration and action.
                </Typography>
                <Typography variant={'p'}>
                    <img src={spotOptionsImg}/>
                </Typography>
                <Typography variant={'p'}>
                    <ol>
                        <li>Defined duration: the amount of minutes that you are renting the instances from AWS. Because
                            AWS instances are high on demand, chances are very likely that your instances will be taken
                            out after this duration.
                        </li>
                        <li>Timeout duration: the amount of minutes that you take an action specified by On Timeout
                            action.
                        </li>
                        <li>Timeout action: the action to take after minutes specified by Timeout Duration have passed.
                            Can be:
                        </li>
                        <ul>
                            <li>Terminate Cluster</li>
                            <li>Switch to On Demand</li>
                        </ul>
                    </ol>
                    In our case, the configurations that we have set in the image above make a request to get a
                    cluster that has 3 hours (can be more, if instances are not high on demand) up time. If the
                    instances can not be provisioned, then terminate the cluster.
                </Typography>

                <Typography id={bootstrapOptions.id} variant={'title'}>
                    {bootstrapOptions.display}
                </Typography>
                <Typography variant={'p'}>
                    You can use a bootstrap action and advanced options to install additional software or customize
                    the configuration of cluster instances. For example, this case would set Spark's executor memory
                    to 2G.
                </Typography>
                <Typography variant={'p'}>
                    <img src={advancedOptionsImg}/>
                </Typography>

                <Typography id={nodes.id} variant={'title'}>
                    {nodes.display}
                </Typography>
                <Typography variant={'p'}>
                    An important consideration when you create an EMR cluster is how you configure Amazon EC2 instances
                    and network options. EC2 instances in an EMR cluster are organized into node types. There are three:
                    master nodes, core nodes, and task nodes. Each node type performs a set of roles defined by the
                    distributed applications that you install on the cluster.
                    <ol>
                        <li>
                            The master node manages the cluster and typically runs master components of distributed
                            applications.
                        </li>
                        <li>
                            Core nodes are managed by the master node.
                        </li>
                        <li>
                            You can use task nodes to add power to perform parallel computation tasks on data.
                        </li>
                    </ol>
                    Below we will list some examples that can help you understand the concept of nodes better by
                    scheduler configurations.
                </Typography>
                <Divider/>

                <Typography id={master.id}>
                    {master.display}
                </Typography>
                <Typography variant={'p'}>
                    <img src={masterNodeImg}/>
                </Typography>
                <Typography variant={'p'}>
                    A configuration of a spot master instance. Master node always needs only one instance.
                    This node is of type m4.2xlarge (has 8 vCPUs and 32GB of RAM).
                </Typography>
                <Divider/>

                <Typography id={core.id}>
                    {core.display}
                </Typography>
                <Typography variant={'p'}>
                    <img src={coreNodesImg}/>
                </Typography>
                <Typography variant={'p'}>
                    A configuration of two spot core instances. Core instances are of type m4.2xlarge (has 8 vCPUs and
                    32GB of RAM) and d2.8xlarge (has 36 vCPUs, 244GB of RAM and 759GB of HDD storage). The target
                    capacity of two will be filled with one from each node specified.
                </Typography>
                <Divider/>

                <Typography id={singleCapacity.id}>
                    {singleCapacity.display}
                </Typography>
                <Typography variant={'p'}>
                    <img src={singleCapacityNodeImg}/>
                </Typography>
                <Typography variant={'p'}>
                    A configuration of two spot core instances. Core instances are of type m4.2xlarge (has 8 vCPUs and
                    32GB of RAM) and d2.8xlarge (has 36 vCPUs, 244GB of RAM and 759GB of HDD storage). The target
                    capacity of one will be filled with the cheapest available instance there is. Precisely, we will
                    first look to spin up the cluster with one core m4.2xlarge instance, if that is not available, then
                    we switch to d2.8xlarge, if that is not available, then the cluster fails because of not being able
                    to provision the required instances.
                </Typography>
                <Divider/>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Clusters)
