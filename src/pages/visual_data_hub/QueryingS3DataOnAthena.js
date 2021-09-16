import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import Code from "presentations/Code";
import S3ToAthenaCrawlerTab from "assets/images/visual_data_hub/s3_to_athena_crawler_tab.png";
import S3ToAthenaCrawlerName from "assets/images/visual_data_hub/s3_to_athena_crawler_name.png";
import S3ToAthenaCrawlerSourceType from "assets/images/visual_data_hub/s3_to_athena_crawler_source_type.png";
import S3ToAthenaCrawlerDataStore from "assets/images/visual_data_hub/s3_to_athena_data_store.png";
import S3ToAthenaCrawlerAnotherDataStore from "assets/images/visual_data_hub/s3_to_athena_another_store.png";
import S3ToAthenaCrawlerIAMRole from "assets/images/visual_data_hub/s3_to_athena_IAM.png";
import S3ToAthenaCrawlerSchedule from "assets/images/visual_data_hub/s3_to_athena_schedule_crawler.png";
import S3ToAthenaCrawlerCrawlerOutput from "assets/images/visual_data_hub/s3_to_athena_crawler_output.png";
import S3ToAthenaCrawlerOutput from "assets/images/visual_data_hub/s3_to_athena_output.png";
import S3ToAthenaRunCrawler from "assets/images/visual_data_hub/s3_to_athena_run_crawler.png";
import S3ToAthenaDBTable from "assets/images/visual_data_hub/s3_to_athena_db_table.png";

const styles = () => ({
    root: {},
})

class QueryingS3DataOnAthena extends React.Component {
    render() {
        const {} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Querying S3 Data on Athena
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    There is a way to directly query data from our data lake that resides on S3. To do this, three
                    AWS services are needed:
                </Typography>

                <Typography>
                    <li>
                        AWS S3: is an object storage service that offers industry-leading scalability,
                        data availability, security, and performance.
                    </li>
                    <li>
                        AWS Glue: AWS Glue is a serverless data integration service that makes it easy to discover,
                        prepare, and combine data for analytics, machine learning, and application development.
                    </li>
                    <li>
                        AWS Athena: Amazon Athena is an interactive query service that makes it easy to analyze data
                        in Amazon S3 using standard SQL.
                    </li>
                </Typography>

                <Typography>We want to start off by finding the S3 folder on our data-lake. Let us assume we want
                    to use this path:</Typography>

                <Code>
                    s3://prime-data-lake/production/client/data
                </Code>

                <Typography>
                    Careful, we need to use the S3 URi path (the one above), not the one from AWS, meaning this is not
                    correct:
                </Typography>

                <Code>https://s3.console.aws.amazon.com/s3/buckets/prime-data-lake?prefix=production/client/data/ -
                    WRONG!
                </Code>

                <Typography>
                    Having copied the correct URi, open the AWS Glue service on your AWS console and navigate to
                    Crawlers,
                    as in the image:
                </Typography>

                <Typography>
                    <img src={S3ToAthenaCrawlerTab}/>
                </Typography>

                <Typography>
                    We need to add a crawler which crawls the S3 data and put results as a table on Athena, let's
                    create a crawler by clicking Add Crawler button.
                </Typography>

                <Typography>
                    <ol>
                        <li>Add information about your crawler - the name of the crawler, we skip Tags, description,
                            etc.
                        </li>
                        <Typography><img src={S3ToAthenaCrawlerName}/></Typography>

                        <li>Specify crawler source type - we do not touch the default settings.</li>
                        <Typography><img src={S3ToAthenaCrawlerSourceType}/></Typography>

                        <li>Add a data store - we specify our path at the Include Path section.</li>
                        <Typography><img src={S3ToAthenaCrawlerDataStore}/></Typography>

                        <li>Add another data store - if we want to add multiple sources.</li>
                        <Typography><img src={S3ToAthenaCrawlerAnotherDataStore}/></Typography>

                        <li>Choose an IAM Role - we chose AWSGlueServiceRole-Prime</li>
                        <Typography><img src={S3ToAthenaCrawlerIAMRole}/></Typography>

                        <li>Create a schedule for this crawler - we use on demand because we need it only once.</li>
                        <Typography><img src={S3ToAthenaCrawlerSchedule}/></Typography>

                        <li>Configure the crawler's output - specify database and
                            add a prefix, the table name is appended to your prefix.
                        </li>
                        <Typography><img src={S3ToAthenaCrawlerCrawlerOutput}/></Typography>

                        <li>Configure output wrap up.</li>
                        <Typography><img src={S3ToAthenaCrawlerOutput}/></Typography>
                        <Typography>And click finish, then you can see your crawler in the list. You can start it by
                            clicking Run Crawler.</Typography>
                        <Typography><img src={S3ToAthenaRunCrawler}/></Typography>
                    </ol>
                </Typography>

                <Typography>Having done all of this, you can finally navigate to AWS Athena service and use the
                    database you have set earlier.</Typography>
                <Typography><img src={S3ToAthenaDBTable}/></Typography>
                <Typography>Your table will be listed below if everything has run correctly. It is worth mentioning that
                    there is a cost applied to every service we request.</Typography>

                <Typography>Make sure to remove the tables you have created after using them.</Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(QueryingS3DataOnAthena)
