import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import SimplePipe from "assets/images/visual_data_hub/your_first_pipeline_simple_pipe.png"
import React, {Fragment} from "react";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})

class YourFirstPipeline extends React.Component {
    render() {
        const {section} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    An ETL (or Visual Data Hub) pipeline is the set of processes used to move data from a source or
                    multiple sources into a database such as a data warehouse. The data warehouse in our case is
                    Amazon's Simple Storage Service.
                </Typography>

                <Typography variant={'p'}>
                    An end-to-end pipeline is a sequence of stages. A stage contains one or more importer connectors,
                    followed by one or more transformations and ending with one or more exporter connectors. We support
                    a lot of data source types, but the most frequent ones are:

                    <ol>
                        <li>Parquet</li>
                        <li>Parquet - Data Lake Exporter</li>
                        <li>CSV - Comma Separated Values</li>
                        <li>JSON</li>
                    </ol>

                    We also support modules (like Rename, Casting, etc.) together with SQL statements that we can write
                    using modules as well.
                </Typography>

                <Typography variant={'p'}>
                    The simplest pipeline consists of a stage, an importer and one exporter, as shown below:
                </Typography>

                <Typography>
                    <img src={SimplePipe}/>
                </Typography>

                <Typography variant={'p'}>
                    Note that you can read from client's raw data (for example, if you are using Xenos Platform, then
                    you can read data from prime-xenos S3 bucket), but you can not write to it.
                    You can only write within:
                </Typography>

                <Code>
                    s3://.../production/client/vdh/
                </Code>

                <Typography variant={'p'}>
                    In this specific case, client is Xenos we export to:
                </Typography>

                <Code>
                    s3a://prime-data-lake/production/xenos/vdh/standardized_output/raw/klantenteller/
                </Code>
            </Fragment>
        )
    }
}

export default withStyles(styles)(YourFirstPipeline)
