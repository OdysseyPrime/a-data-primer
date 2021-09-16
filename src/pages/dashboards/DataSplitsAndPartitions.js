import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import ManyPartitions from "assets/images/dashboards/dashboards_workflow_explanation_many_partitions.png";
import NumberOfSplits from "assets/images/dashboards/dashboards_workflow_explanation_nr_of_splits.png";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import Partitions from "assets/images/dashboards/dashboards_workflow_explanation_partitions.png";
import PartitionedByPos from "assets/images/dashboards/overhead_issues_partitioned_by_pos.png";
import PartitionByUI from "assets/images/dashboards/splits_and_partitions_partition_by_ui.png";
import PartitionedObjects from "assets/images/dashboards/splits_and_partitions_partitioned_objects.png";
import PartitionedPartitions from "assets/images/dashboards/splits_and_partitions_partitioned_partition.png";

const styles = () => ({
    root: {},
})


class DataSplitsAndPartitions extends React.Component {
    render() {
        const {section} = this.props

        const overheadIssues = section.children[0]
        const repartition = section.children[1]
        const partitionBy = section.children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography id={overheadIssues.id} variant={'title'}>
                    {overheadIssues.display}
                </Typography>
                <Typography variant={'p'}>
                    Depending on the structure of our exported data, the path of which is in our case:
                </Typography>
                <Code>
                    s3://.../production/xenos/vdh/processed/&#123;projectId&#125;/&#123;pipelineId&#125;/
                </Code>
                <Typography variant={'p'}>
                    The dashboards may load fast or slow. There are two main factors that have direct impact on
                    platform performance:
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>The output file having too many partitions.</li>
                        <li>On-the-fly calculations.</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    We will talk about the second point later; for now, let us elaborate the first one.
                </Typography>

                <Typography variant={'p'}>
                    In order for the pipeline to complete as fast as possible, our processing engine, Spark does
                    partitioning, which means it distributes the load to its processing cores. The main problem with
                    this is that unless specified by the user, Spark will most likely generate hundreds of partitions.
                    What do partitions look like?
                </Typography>

                <Typography variant={'p'}>
                    <img src={Partitions}/>
                </Typography>

                <Typography variant={'p'}>
                    In this exact case, Spark has generated 5 partitions because we requested it so (we determined 5 splits).
                    The first one is not a partition, that one indicates if the pipeline has finished or not.
                </Typography>

                <Typography variant={'p'}>
                    This means that every time you require a dashboard, Presto, which is our query engine will try
                    to combine all of these files and give you a visual display in dashboards. In this case, 5 partitions
                    are easy to handle (depending on the size), but if there were more, then overhead is created in
                    proportion with the number of partitions.
                </Typography>

                <Typography variant={'p'}>
                    Let us assume we have the following dataset which Presto runs queries against to provide Widgets
                    the required content.
                </Typography>

                <Typography variant={'p'}>
                    <img src={ManyPartitions}/>
                </Typography>

                <Typography variant={'p'}>
                    We have 501 partitions with a size of 2.5 MB each.
                </Typography>

                <Typography variant={'p'}>
                    Calculating the total size, we
                    get 502 * 2.5 MB = 1255 MB. As we can tell, the data size is quite big, but another problem with
                    this
                    data set is that it is split in 500 parts. For Presto to collect all of the partitions,
                    it needs time and processing power.
                </Typography>

                <Typography variant={'p'}>
                    The ideal size of a data source is N-partitions with the size of 128 MB. Since our export has a lot
                    of partitions with small sizes, a refactoring is needed. We can either:
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>Get it to 11 partitions of around 120MB.</li>
                        <li>Partition the data from a column that is frequently used while filtering.</li>
                    </ol>
                </Typography>

                <Typography id={repartition.id} variant={'title'}>
                    {repartition.display}
                </Typography>
                <Typography variant={'p'}>
                    Repartitioning is the process where we try to enforce Spark (default 500 partitions) to use less
                    partitions than auto generated. We can do this in two ways:
                </Typography>


                <Typography variant={'p'}>
                    <ol>
                        <li>Specify a number in splits UI while creating the data lake exporter - good when we already
                            know the output size.
                        </li>
                        <Typography variant={'p'}>
                            <img src={NumberOfSplits}/>
                        </Typography>

                        <li>Set optimize to true in JSON Configuration of the data lake exporter - good when we do not
                            know the output size, the application decides for the optimum number of splits.

                            <Code> "optimize": &#123;
                                "enabled": true,
                                "size": 64,
                                "tolerance": 5,
                                "set": false
                                &#125;
                            </Code>
                        </li>
                    </ol>
                </Typography>

                <Typography id={partitionBy.id} variant={'title'}>
                    {partitionBy.display}
                </Typography>
                <Typography variant={'p'}>
                    Partition by is the database process where very large tables are divided into multiple smaller parts.
                    This process is a two-edged sword, since if used correctly, it immensely increases the performance
                    because it enables Spark not to do a full scan of all the data and if used incorrectly, it generates
                    a dozen of partitions inside a dozen of objects.
                </Typography>

                <Typography variant={'p'}>
                    It is ideal to partition by columns that are frequently used in filtering. For example, if a
                    dashboard visually displays data per year, then using that column as partition by fastens the
                    process a lot.
                </Typography>

                <Typography variant={'p'}>
                    An example of a partitioned by data source looks like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={PartitionedByPos}/>
                </Typography>

                <Typography variant={'p'}>
                    This partitioning was generated through an export connector by adding the following setting:
                </Typography>

                <Code>
                    partitionBy: ['columnToPartitionBy']
                </Code>

                <Typography variant={'p'}>
                    If we want to partition by through a Data Lake exporter, then we can specify it in the user interface.
                    An example of that looks like:
                </Typography>

                <Typography variant={'p'}>
                    <img src={PartitionByUI}/>
                </Typography>

                <Typography variant={'p'}>
                    Both settings mentioned above work for partition by as well. The overhead affects partitioned by data
                    as well. For example, a partitioned by object that holds hundreds of partitions will still run slow.
                </Typography>

                <Typography variant={'p'}>
                    For example, optimize set to true for this pipeline generates the following results:
                </Typography>

                <Typography variant={'p'}>
                    <img src={PartitionedObjects}/>
                </Typography>

                <Typography variant={'p'}>
                    And if we visit one of the objects, we see:
                </Typography>

                <Typography variant={'p'}>
                    <img src={PartitionedPartitions}/>
                </Typography>

                <Typography variant={'p'}>
                    This is a perfect example, since this category is small and still has only one partition, which
                    means no overhead while Presto scans the full data set.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataSplitsAndPartitions)
