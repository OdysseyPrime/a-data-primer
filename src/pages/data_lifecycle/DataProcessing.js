import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})


class DataOnboarding extends React.Component {
    render() {
        const {section} = this.props

        const dqa = section.children[0]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    The process of transforming and potentially combining the raw files into new, structured output is
                    data called processing. The output file must be a Standard Output, meaning that it must contain a
                    strict and validated data structure.
                </Typography>

                <Typography variant={'p'}>
                    The data processing stage can be divided into three parts, the creation of mapper files, the creation
                    of point of sale foundation and data quality assurance checks.
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>
                            <Typography>Mapper files are small data, consisting information about a specific
                                topic. </Typography>
                            <Typography>For example, a promotion mapper holds information about a product which has been
                                put into promotion.</Typography>
                        </li>
                        <li>
                            <Typography>
                                Point of sale holds all the transactions, stored in a monthly or yearly basis, depending
                                on
                                the client size.
                            </Typography>

                            <Typography>
                                For example, the versioning of point of sale is sometimes done in yearly
                                basis if the data per year doesn't exceed gigabytes of parquet, for example:
                            </Typography>

                            <Code>
                                /point_of_sale/2020 or /point_of_sale/2021
                            </Code>
                            and sometimes in months if the data is bigger
                            <Code>
                                /point_of_sale/2020/01 or /point_of_sale/2020/02
                            </Code>
                        </li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    In order to do this processing, we must start off by creating a new project on Standardized Output
                    called Retail Template which (varies from clients) holds the creation of Point of Sale, Receipt Data
                    and Mapper Files.
                </Typography>

                <Typography variant={'p'}>
                    Usually, point of sale and receipt data are created within one pipeline and mapper files are created
                    in another pipeline, where possibly one stage represents the creation of one mapper file. To be
                    even more precise, a Mapper File pipeline (starting from version 1) contains these stages:
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>Promotion mapper</li>
                        <li>Product Mapper</li>
                        <li>Product Promotion Mapper</li>
                        <li>Date Mapper</li>
                        <li>Date Mapper Promo</li>
                        <li>Customer Mapper</li>
                        <li>Online Mapper</li>
                        <li>Store Mapper</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    Once we have all the listed files above, we can say that mappers are available to work with. As per
                    point of sale and receipt foundation, we usually create one pipeline which holds two stages respectively.
                </Typography>

                <Typography variant={'p'}>
                    When it comes to the creation of point of sale and receipt data, the partition by technique is used,
                    by using this method, we make sure that data is correctly split into years, without having to hard
                    code values.
                </Typography>

                <Typography variant={'p'}>
                    This also avoids data mistakes that usually happen when there is more data than expected (we want to
                    work with 2021 data, and suddenly there is a 2020 somewhere).
                </Typography>

                <Typography variant={'p'}>
                    Once this foundation is in place, then comes the concern of versioning; versioning is the process of
                    creating back-up data which is accessible to users at any time, making it possible to check previous
                    work. In our current ecosystem, we have two ways of creating versions:

                    <ol>
                        <li>
                            Platform versioning - when we specify a key word which represents a time stamp, the usual
                            of which is 'version'.
                        </li>
                        <li>
                            S3 versioning - by declaring policies which automatically, regardless of it's deletion
                            status create versions which we can recover from the archives.
                        </li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    We use platform versioning because we want to keep our way of working as isolated as possible. In
                    order for each data to be available at any time, we use the key word latest as latest batch of data
                    together with date created. For example, a store mapper’s export paths should be:
                    <Code>/store_mapper/latest and /store_mapper/2021_01_01/</Code> this enables us the possibility
                    to point to the latest data and also have access to a potential working batch.
                </Typography>

                <Typography variant={'p'}>
                    When making exportation, especially on point of sale, we should be very cautious because potential
                    mistakes that we do while processing might result to hundred of gigabytes of data in the future.
                </Typography>

                <Typography id={dqa.id} variant={'title'}>
                    {dqa.display}
                </Typography>

                <Typography variant={'p'}>
                    A data quality assurance check, also known as a DQA is a process which outputs basic data overview,
                    like number of rows, number of numerical rows, number of duplicate rows and so on, thus making it
                    available for us to see potential errors, data types, etc.
                </Typography>

                <Typography variant={'p'}>
                    Typically, a PRIME data quality check has three parts:

                    <ul>
                        <li>
                            Outliers - the process of listing outlier rows of a data set.
                        </li>
                        <li>
                            Duplicates - the process of listing duplicate rows of a data set.
                        </li>
                        <li>
                            Overview - the process of listing numeric values, non-numeric values, number of duplicate
                            rows, number of identical rows, number of unique values for a column and so on.
                        </li>
                    </ul>
                </Typography>

                <Typography variant={'p'}>
                    Data quality check is ran after a normal data processing is finished, for example once a point of
                    sale runs completely, then we run a data quality check on it. The output of a DQA should not contain
                    any latest version because it is directly put into a dashboard.
                </Typography>

                <Typography variant={'p'}>
                    When creating a DQA for a client, we must make sure that we are into project Data Quality Assurance
                    and create a subproject with the name of the project we want to run the DQA on; for example, if
                    we want to run a DQA check on a point of sale located in Standardized Pipeline, Retail Template,
                    Point of Sale then the Data Quality Assurance project should have a project named Retail Template
                    with a pipeline named point_of_sale.
                </Typography>

                <Typography variant={'p'}>
                    We have combined all of these data quality assurance checks together, to create the PRIME Data
                    Quality Assurance Framework, a framework which lists all things mentioned above in dashboards,
                    tables so there is no room for mistake.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataOnboarding)
