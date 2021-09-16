import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import DataLakeExporter from "assets/images/dashboards/dashboards_workflow_explanation_data_lake_module.png"
import DataSource from "assets/images/dashboards/dashboards_workflow_explanation_data_source.png"
import DashboardCreating from "assets/images/dashboards/dashboards_workflow_explanation_dashboard.png"
import Partitions from "assets/images/dashboards/dashboards_workflow_explanation_partitions.png"
import ManyPartitions from "assets/images/dashboards/dashboards_workflow_explanation_many_partitions.png"
import Widget from "assets/images/dashboards/dashboards_workflow_widget.png"
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})


class YourFirstDashboard extends React.Component {
    render() {
        const {section} = this.props

        const exportingToDataLake = section.children[0]
        const querying = section.children[1]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    To get the most out of this tool, we have to know the complete process of what happens
                    when we export data to a Data Lake Exporter.
                </Typography>

                <Typography id={exportingToDataLake.id} variant={'title'}>
                    {exportingToDataLake.display}
                </Typography>

                <Typography variant={'p'}>
                    Let us assume we have a pipeline whose data we want to visualize on a dashboard. In order to do that,
                    we need to use Data Lake Exporter;
                </Typography>

                <Typography variant={'p'}>
                    <img src={DataLakeExporter}/>
                </Typography>

                <Typography variant={'p'}>
                    As a topic name, let's set so_xenos_week_data and as version, let's set 2021. When we finish running
                    this pipeline, a new parquet data source will be created in:
                </Typography>

                <Code>
                    s3://.../production/xenos/vdh/processed/&#123;projectId&#125;/&#123;pipelineId&#125;/
                </Code>

                <Typography variant={'p'}>
                    To find projectId and pipelineId, we have to break down our platform uri of the pipeline we
                    have run, in this case:
                </Typography>

                <Code>
                    https://platform.goprime.io/vetl/60d9bf23227bda000110c158/60d9bf43a28184000169bab2/60df04dc2495b40001162c8b
                </Code>

                <Typography variant={'p'}>
                    As our main url, which does not come to help goes:
                </Typography>
                <Code>
                    https://platform.goprime.io/vetl/60d9bf23227bda000110c158/
                </Code>

                <Typography variant={'p'}>
                    Then our projectId is the equivalent of:
                </Typography>
                <Code>
                    60d9bf43a28184000169bab2/
                </Code>

                <Typography variant={'p'}>
                    And our pipelineId is the equivalent of:
                </Typography>
                <Code>
                    60df04dc2495b40001162c8b/
                </Code>

                <Typography variant={'p'}>
                    Now we can properly locate the parquet data source we have created through Data Lake Exporter.
                </Typography>

                <Typography id={querying.id} variant={'title'}>
                    {querying.display}
                </Typography>

                <Typography variant={'p'}>
                    Having run the pipeline, we can see that there is one more Data Source created in our project, in
                    this case:
                </Typography>

                <Typography variant={'p'}>
                    <img src={DataSource}/>
                </Typography>

                <Typography variant={'p'}>
                    Let us create a dashboard that uses that data source as input:
                </Typography>
                <Typography variant={'p'}>
                    <img src={DashboardCreating}/>
                </Typography>

                <Typography variant={'p'}>
                    We have the dashboard ready now, let's create a Bar widget that shows Weeks by period, as
                    in the example below:
                </Typography>
                <Typography variant={'p'}>
                    <img src={Widget}/>
                </Typography>

                <Typography variant={'p'}>
                    Then save the dashboard. Now every time you refresh the page, the widget will reload. By reload,
                    we mean that the widget is loaded by either cache or by the Data Lake Exportation path.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(YourFirstDashboard)
