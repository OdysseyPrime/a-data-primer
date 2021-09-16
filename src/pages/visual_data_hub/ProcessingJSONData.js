import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import Code from "presentations/Code";
import ProcessingJsonDataFirstRound from "assets/images/visual_data_hub/processing_json_data_first_round.png";
import ProcessingJsonDataJsonResult from "assets/images/visual_data_hub/processing_json_data_json_result.png";
import ProcessingJsonDataExploded from "assets/images/visual_data_hub/processing_json_data_exploded.png";
import ProcessingJsonDataFinalData from "assets/images/visual_data_hub/processing_json_data_final_data.png";

const styles = () => ({
    root: {},
})

class ProcessingJSONData extends React.Component {
    render() {
        const {section} = this.props

        let useCase = section.children[0]
        let solution = section.children[1]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Processing JSON Data
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    We have the possibility to process JSON data through VDH as well. Assume we have the following
                    use case;
                </Typography>

                <Typography id={useCase.id} variant={'title'}>
                    {useCase.display}
                </Typography>
                <Typography variant={'p'}>
                    Say we have a REST API to fetch data from. We want that data to be processed through VDH
                    and export the results into a dashboard, a parquet or whatever the need. Usually, when we want to
                    hit a REST API endpoint, there are credentials to be provided. We do not worry about this, we
                    assume we have the data ready and it looks like this (almost always, REST API endpoints give a
                    response that starts with a result key):
                </Typography>

                <Code>
                    &#123;"result":[&#123;"availability":"UNAVAILABLE","bundles":[1,2,3]&#125;,&#123;"availability":"AVAILABLE","bundles":[1]&#125;,&#123;"availability":"PROBABLY","bundles":[100]&#125;]&#125;
                </Code>

                <Typography id={solution.id} variant={'title'}>
                    {solution.display}
                </Typography>

                <Typography variant={'p'}>
                    Let's load this into VDH, since JSON importer does one round of auto-parsing, then the Data Overview
                    will look like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={ProcessingJsonDataFirstRound} />
                </Typography>

                <Typography variant={'p'}>
                    Right know, this row is a string. For us to process this, we have to parse it as JSON.
                    Data parsing is a method where one string of data gets converted into a different type of data.
                    In our case, we parse this row to an array of objects, meaning this row corresponds this data type:
                </Typography>

                <Code>
                    array&lt;struct&lt;availability:string,bundles:array&lt;integer&gt;&gt;&gt;
                </Code>

                <Typography variant={'p'}>
                    Knowing this, we can create a new column expression in VDH, we can name it whatever we want and
                    put the following code:
                </Typography>

                <Code>
                    from_json(result, 'array&lt;struct&lt;availability:string,bundles:array&lt;integer&gt;&gt;&gt;')
                </Code>

                <Typography variant={'p'}>
                    From_json does the parsing, result is the string column that we want to parse, and
                    second parameter represents the type conversion. Having done this, then Data Overview looks the same,
                    but these two columns are not structurally the same, since one represents a string and the other a
                    JSON.
                </Typography>

                <Typography variant={'p'}>
                    <img src={ProcessingJsonDataJsonResult} />
                </Typography>

                <Typography variant={'p'}>
                    Since we now have a JSON, we can explode the array to get multiple objects into rows.
                </Typography>

                <Code>
                    explode(json_result)
                </Code>

                <Typography variant={'p'}>
                    We can now start working individually with each row, we could not do this if the string was not
                    parsed to JSON, since square brackets are recognized as string characters not as array.
                </Typography>

                <Typography variant={'p'}>
                    <img src={ProcessingJsonDataExploded} />
                </Typography>

                <Typography variant={'p'}>
                    Now let's say we want to create a column that holds the availability value and one column that
                    holds the multiplied values inside bundles. For the first one, we can do:
                </Typography>

                <Code>
                    exploded_row.availability
                </Code>

                <Typography variant={'p'}>
                    And for the second one:
                </Typography>

                <Code>
                    aggregate(exploded_row.bundles, 1, (acc, x) -> acc * x)
                </Code>

                <Typography variant={'p'}>
                    This is a simple reduce function useful for this case. The first parameter requires the array we
                    want to operate on, and the second parameter holds the start value. Data Overview then looks like
                    this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={ProcessingJsonDataFinalData} />
                </Typography>

                <Typography variant={'p'}>
                    We can now say that we have successfully parsed the JSON data and converted it into a format
                    that can handle more easily.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ProcessingJSONData)
