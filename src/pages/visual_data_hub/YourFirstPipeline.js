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
                    In this specific case, since the client is Xenos, the final path would be:
                </Typography>

                <Code>
                    s3a://prime-data-lake/production/xenos/vdh/anything/
                </Code>

                <Typography variant={'p'}>
                    When creating pipelines, it is always recommended to use Parquet as exporting module because of
                    it's capabilities. Parquet is designed as a columnar storage format to support complex data processing.
                </Typography>

                <Typography variant={'p'}>
                    Apache Parquet is a self-describing data format that embeds the schema or structure within the data itself.
                </Typography>

                <Typography variant={'p'}>
                    Parquet performance, when compared to a format like CSV, offers compelling benefits in terms of cost,
                    efficiency, and flexibility.
                </Typography>

                <Typography variant={'p'}>
                    If you are creating testing pipelines, it is recommended to either use Default Project, or create
                    your own project. Make sure to clean your pipelines and projects after your work is done.
                </Typography>

                <Typography variant={'p'}>
                    At the moment of writing this, we do not automatically clean pipelines or the data it creates,
                    therefore it is best for them to be handled by the creator.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(YourFirstPipeline)
