import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import ClientBucketsImage from "assets/images/data_lifecycle/data_lifecycle_listed_client_buckets.png";
import ClientS3RawImage from "assets/images/data_lifecycle/data_lifecycle_listed_xenos_raw_client.png";
import S3RawImageSO from "assets/images/data_lifecycle/data_lifecycle_listed_xenos_raw.png";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})


class DataOnboarding extends React.Component {
    render() {
        const {section} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    When a new client is about to work with us, the first thing PRIME does is create their very own S3
                    bucket where they upload all their data in a non-structured manner, named prime-clientName,
                    as in the image below:
                </Typography>

                <Typography variant={'p'}>
                    <img src={ClientBucketsImage}/>
                </Typography>

                <Typography variant={'p'}>
                    By non structured, we mean that the format, the content and the data structure is not defined by
                    any mean and we call this data raw client data. This data usually comes in CSV (comma separated
                    values) format, that is why the second thing we do is move this data as is (sometimes with small
                    modifications, depends on the client) to our production data lake.
                </Typography>

                <Typography variant={'p'}>
                    To do this, we create a new client environment on platform and a project, called Standardized
                    Output and inside this project we create a subproject called Raw.
                </Typography>

                <Typography variant={'p'}>
                    In Raw we want to create any pipeline that does the data migration from client environment to our
                    data lake. The way we do this might differ from client to client, but a thick line always stands
                    between transaction data and mapper files (a line which Data Analysts usually easily notice).
                </Typography>

                <Typography variant={'p'}>
                    When creating the pipelines, it is a good habit to use as much wildcards as possible; using
                    wildcards avoids hard-coded values and minimizes manual work, thus leading to better and more
                    compact data.
                </Typography>

                <Typography variant={'p'}>
                    When this migration happens, the destiny file format must be parquet. Parquet is a data format which
                    is much faster compared to it’s subordinates because it is optimized to work with complex data in
                    bulk and features different ways for efficient data compression (like snappy).
                </Typography>

                <Typography variant={'p'}>
                    If we were to take this into technical terms, raw client data would be:
                </Typography>
                <Code>s3://prime-client/data.csv</Code>
                <Typography variant={'p'}>
                    <img src={ClientS3RawImage}/>
                </Typography>

                <Typography variant={'p'}>
                    and raw data would be:
                </Typography>
                <Code>s3://prime-data-lake/production/client/vdh/standardized_output/raw/data</Code>
                <Typography variant={'p'}>
                    <img src={S3RawImageSO}/>
                </Typography>
                <Typography variant={'p'}>
                    The .parquet postfix is not specified by the user because it is something that Spark handles for us.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataOnboarding)
