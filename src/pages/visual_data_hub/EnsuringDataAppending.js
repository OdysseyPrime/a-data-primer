import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import Code from "presentations/Code";
import RawFiles from "assets/images/visual_data_hub/ensuring_data_append_raw_files.png"


const styles = () => ({
    root: {},
})

class EnsuringDataAppending extends React.Component {
    render() {
        const {section} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    Often times, when creating pipelines we have to combine a number of data sources to come to a
                    desirable result. For example, say we are processing weekly data and somewhere in the process, we
                    want to merge specific files.
                </Typography>

                <Typography variant={'p'}>
                    Since the input is not dependent on us (usually on the client), schema might eventually change.
                    Meaning that, a column that we expect to be string in parquet importer, is integer, thus it
                    cannot be parsed.
                </Typography>

                <Typography variant={'p'}>
                    The best approach to solve this, is to first handle the schema change. Because we can not hard
                    refresh the importer every week, what we can do is remove the schema from the JSON Config, so it
                    is dynamically parsed every time a week comes in.
                </Typography>

                <Code>
                    schema: []
                </Code>

                <Typography variant={'p'}>
                    Then, we want to cast EVERY selected column (considering we have a select right after the importer,
                    which is always recommended) to a specific type, even if we know that it might probably be parsed
                    to that. For example, if we know we get a column called product_name, we still want to cast it to
                    string, even tho we know that it will always be a string (consistency).
                </Typography>

                <Typography variant={'p'}>
                    By doing this, we are transitioning from raw to cleaned files, and we can assure that cleaned
                    files will have the same schema. That's where we start using the wildcard operator then.
                </Typography>

                <Typography variant={'p'}>
                    The wildcard operator itself combines data sources, that's why we can not use it in raw data sources,
                    because we can not combine data whose schema is not the same.
                </Typography>

                <Typography variant={'p'}>
                    For example, say we have some data sources that we know that schema is the same so far, but might
                    eventually change. We need these data sources as one for later use.
                </Typography>

                <Typography>
                    <img src={RawFiles}/>
                </Typography>

                <Typography variant={'p'}>
                    In order to process this data as one, we can:

                    <ol>
                        <li>Use wildcard operator all these files.</li>
                        <li>Do a select module.</li>
                        <li>Do casting modules.</li>
                        <li>Export to parquet.</li>
                    </ol>

                    By doing this, we skip a cleaned file which results to less data. But the problem with this approach
                    is that if the input schema changes once, then the wildcard will mess up. By schema change, we mean
                    if another column is added which we do not expect or if a type changes. The first case, will result
                    in a bad combination, while the second one will result in schema merging errors.
                </Typography>

                <Typography>
                    CSV schema does merging row-based, while Parquet has smart merge. For example, in CSV, if we combine
                    two tables which do not have columns in the same order, combination will mess up, unlike in Parquet.
                </Typography>

                <Typography>
                    In the other hand, we could clean those data sources individually every week, thus having data with
                    the same schema. This allows to use wildcard operator freely without worrying about any error. That
                    means, for each data source:
                    <ol>
                        <li>Do a select module.</li>
                        <li>Do casting modules for all the columns.</li>
                        <li>Export to parquet.</li>
                        <li>Combine.</li>
                    </ol>
                </Typography>

                <Typography>
                    As an example, this way of working is implemented in Xenos' Standardized Output pipelines.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(EnsuringDataAppending)
